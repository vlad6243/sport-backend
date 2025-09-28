variable "stack_name" {
  description = "Stack name"
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

variable "certificate_arn" {
  description = "Certificate ARN for CloudFront"
  type        = string
}