output "api_id" {
  description = "API Gateway API ID"
  value       = module.api_gateway.api_id
}

output "upload_file_role" {
  description = "Upload file role ARN"
  value       = module.s3_cloudfront.upload_file_role_arn
}

output "webapp_s3_bucket_name" {
  description = "Web app S3 bucket name"
  value       = module.s3_cloudfront.bucket_name
}

output "lambda" {
  description = "Lambda function name"
  value       = module.lambda.lambda_function_name
}

output "api_gateway_regional_domain" {
  description = "API Gateway regional domain"
  value       = module.api_gateway.regional_domain_name
}