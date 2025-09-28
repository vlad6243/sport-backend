variable "aws_region" {
  description = "AWS region"
  type        = string
  default     = "us-east-1"
}

variable "stack_name" {
  description = "Stack name"
  type        = string
}



variable "environment_variables" {
  description = "Environment variables for Lambda"
  type        = map(string)
  default     = {}
}