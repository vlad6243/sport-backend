output "lambda_function_arn" {
  description = "Lambda function ARN"
  value       = aws_lambda_function.lambda_function.arn
}

output "lambda_function_name" {
  description = "Lambda function name"
  value       = aws_lambda_function.lambda_function.function_name
}

output "lambda_invoke_arn" {
  description = "Lambda function invoke ARN"
  value       = aws_lambda_function.lambda_function.invoke_arn
}

output "lambda_execution_role_arn" {
  description = "Lambda execution role ARN"
  value       = aws_iam_role.lambda_execution_role.arn
}

output "lambda_invoke_role_arn" {
  description = "Lambda invoke role ARN"
  value       = aws_iam_role.lambda_invoke_role.arn
}