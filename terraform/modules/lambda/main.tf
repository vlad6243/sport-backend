# Lambda Execution Role
resource "aws_iam_role" "lambda_execution_role" {
  name = "${var.stack_name}-lambda-execution-role"
  path = "/"

  assume_role_policy = jsonencode({
    Version = "2012-10-17"
    Statement = [
      {
        Effect = "Allow"
        Principal = {
          Service = "lambda.amazonaws.com"
        }
        Action = "sts:AssumeRole"
      }
    ]
  })
}

# Lambda Execution Role Policies
resource "aws_iam_role_policy" "lambda_logs_policy" {
  name = "${var.stack_name}-logs"
  role = aws_iam_role.lambda_execution_role.id

  policy = jsonencode({
    Version = "2012-10-17"
    Statement = [
      {
        Effect = "Allow"
        Action = "logs:*"
        Resource = "arn:aws:logs:*:*:*"
      }
    ]
  })
}


resource "aws_iam_role_policy" "lambda_vpc_access_policy" {
  name = "${var.stack_name}-lambda-vpc-access"
  role = aws_iam_role.lambda_execution_role.id

  policy = jsonencode({
    Version = "2012-10-17"
    Statement = [
      {
        Effect = "Allow"
        Action = [
          "ec2:CreateNetworkInterface",
          "ec2:DescribeNetworkInterfaces",
          "ec2:DeleteNetworkInterface"
        ]
        Resource = "*"
      }
    ]
  })
}

# Lambda Function
resource "aws_lambda_function" "lambda_function" {
  function_name = var.stack_name
  role         = aws_iam_role.lambda_execution_role.arn
  handler      = "lambda.handler"
  runtime      = "nodejs22.x"
  timeout      = 90
  memory_size  = 512
  architectures = ["arm64"]

  filename         = "${path.module}/lambda-deployment.zip"
  source_code_hash = filebase64sha256("${path.module}/lambda-deployment.zip")

  ephemeral_storage {
    size = 512
  }

  tracing_config {
    mode = "PassThrough"
  }

  dynamic "environment" {
    for_each = length(var.environment_variables) > 0 ? [1] : []
    content {
      variables = var.environment_variables
    }
  }

  # Dependency on Log Group
  depends_on = [aws_cloudwatch_log_group.lambda_logs]
}

# CloudWatch Log Group
resource "aws_cloudwatch_log_group" "lambda_logs" {
  name              = "/aws/lambda/${var.stack_name}"  # Use exact function name
  retention_in_days = 7  # Keep logs for 7 days

  # Size limitation: automatically delete old logs when exceeded
  # CloudWatch doesn't support direct size limitation, but retention helps

  tags = {
    Name = "${var.stack_name}-lambda-logs"
  }
}


# Lambda Invoke Role for Scheduler
resource "aws_iam_role" "lambda_invoke_role" {
  name = "${var.stack_name}-lambda-invoke-role"
  path = "/"

  assume_role_policy = jsonencode({
    Version = "2012-10-17"
    Statement = [
      {
        Effect = "Allow"
        Principal = {
          Service = "scheduler.amazonaws.com"
        }
        Action = "sts:AssumeRole"
      }
    ]
  })
}

resource "aws_iam_role_policy" "lambda_invoke_role_policy" {
  name = "${var.stack_name}-lambda-invocation"
  role = aws_iam_role.lambda_invoke_role.id

  policy = jsonencode({
    Version = "2012-10-17"
    Statement = [
      {
        Effect = "Allow"
        Action = "lambda:InvokeFunction"
        Resource = aws_lambda_function.lambda_function.arn
      }
    ]
  })
}