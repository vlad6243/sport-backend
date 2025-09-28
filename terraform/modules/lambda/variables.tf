variable "stack_name" {
  description = "Stack name"
  type        = string
}

variable "pdf_function_arn" {
  description = "PDF function ARN"
  type        = string
  default     = ""
}

variable "sqs_function_arn" {
  description = "SQS function ARN"
  type        = string
  default     = ""
}

variable "environment_variables" {
  description = "Environment variables for Lambda"
  type        = map(string)
  default     = {}
}