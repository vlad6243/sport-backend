stack_name               = "sportbackend-prod"
subdomain                = "api"
subdomain_images         = "images"
hosted_zone_name         = "example.com"
domain_certificate_arn   = "arn:aws:acm:us-east-1:123456789012:certificate/12345678-1234-1234-1234-123456789012"
certificate_arn          = "arn:aws:acm:us-east-1:123456789012:certificate/12345678-1234-1234-1234-123456789012"
pdf_function_arn         = ""
sqs_function_arn         = ""

environment_variables = {
  NODE_ENV = "production"
  LOG_LEVEL = "info"
}