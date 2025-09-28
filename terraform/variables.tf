variable "aws_region" {
  description = "AWS region"
  type        = string
  default     = "us-east-1"
}

variable "stack_name" {
  description = "Stack name"
  type        = string
}

variable "subdomain" {
  description = "Subdomain for API"
  type        = string
}

variable "subdomain_images" {
  description = "Subdomain for images"
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

variable "certificate_arn" {
  description = "Certificate ARN for CloudFront"
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