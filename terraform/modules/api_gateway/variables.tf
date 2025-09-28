variable "stack_name" {
  description = "Stack name"
  type        = string
}

variable "subdomain" {
  description = "Subdomain for API"
  type        = string
}

variable "hosted_zone_name" {
  description = "Hosted zone name"
  type        = string
}

variable "domain_certificate_arn" {
  description = "Domain certificate ARN"
  type        = string
}

variable "lambda_function_arn" {
  description = "Lambda function ARN"
  type        = string
}

variable "lambda_function_name" {
  description = "Lambda function name"
  type        = string
}