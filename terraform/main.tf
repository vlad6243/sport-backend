module "lambda" {
  source = "./modules/lambda"

  stack_name               = var.stack_name
  environment_variables    = var.environment_variables
}

module "api_gateway" {
  source = "./modules/api_gateway"

  stack_name               = var.stack_name
  lambda_function_arn      = module.lambda.lambda_function_arn
  lambda_function_name     = module.lambda.lambda_function_name
}


module "scheduler" {
  source = "./modules/scheduler"

  stack_name               = var.stack_name
  lambda_function_arn      = module.lambda.lambda_function_arn
  lambda_invoke_role_arn   = module.lambda.lambda_invoke_role_arn
}