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

resource "aws_iam_role_policy" "lambda_invoke_policy" {
  count = var.pdf_function_arn != "" || var.sqs_function_arn != "" ? 1 : 0
  name  = "${var.stack_name}-lambda-invoke-policy"
  role  = aws_iam_role.lambda_execution_role.id

  policy = jsonencode({
    Version = "2012-10-17"
    Statement = [
      {
        Effect = "Allow"
        Action = [
          "lambda:InvokeFunction",
          "lambda:InvokeAsync"
        ]
        Resource = compact([
          var.pdf_function_arn,
          var.sqs_function_arn
        ])
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

  filename         = "${path.module}/lambda.zip"
  source_code_hash = data.archive_file.lambda_zip.output_base64sha256

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
}

data "archive_file" "lambda_zip" {
  type        = "zip"
  output_path = "${path.module}/lambda.zip"
  source {
    content = <<EOF
exports.handler = async (event) => {
  const response = {
    statusCode: 200,
    body: JSON.stringify('Hello from Lambda!'),
  };
  return response;
};
EOF
    filename = "lambda.js"
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