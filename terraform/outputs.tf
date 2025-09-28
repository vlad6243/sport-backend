output "api_id" {
  description = "API Gateway API ID"
  value       = module.api_gateway.api_id
}


output "lambda" {
  description = "Lambda function name"
  value       = module.lambda.lambda_function_name
}

output "api_gateway_regional_domain" {
  description = "API Gateway regional domain"
  value       = module.api_gateway.regional_domain_name
}