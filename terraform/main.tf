module "lambda" {
  source = "./modules/lambda"

  stack_name               = var.stack_name
  pdf_function_arn         = var.pdf_function_arn
  sqs_function_arn         = var.sqs_function_arn
  environment_variables    = var.environment_variables
}

module "api_gateway" {
  source = "./modules/api_gateway"

  stack_name               = var.stack_name
  subdomain                = var.subdomain
  hosted_zone_name         = var.hosted_zone_name
  domain_certificate_arn   = var.domain_certificate_arn
  lambda_function_arn      = module.lambda.lambda_function_arn
  lambda_function_name     = module.lambda.lambda_function_name
}

module "s3_cloudfront" {
  source = "./modules/s3_cloudfront"

  stack_name               = var.stack_name
  subdomain_images         = var.subdomain_images
  hosted_zone_name         = var.hosted_zone_name
  certificate_arn          = var.certificate_arn
}

module "scheduler" {
  source = "./modules/scheduler"

  stack_name               = var.stack_name
  lambda_function_arn      = module.lambda.lambda_function_arn
  lambda_invoke_role_arn   = module.lambda.lambda_invoke_role_arn
}