variable "stack_name" {
  description = "Stack name"
  type        = string
}

variable "lambda_function_arn" {
  description = "Lambda function ARN"
  type        = string
}

variable "lambda_invoke_role_arn" {
  description = "Lambda invoke role ARN"
  type        = string
}