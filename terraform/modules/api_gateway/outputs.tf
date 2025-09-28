output "api_id" {
  description = "API Gateway API ID"
  value       = aws_apigatewayv2_api.http_api.id
}

output "regional_domain_name" {
  description = "API Gateway regional domain name"
  value       = aws_apigatewayv2_api.http_api.api_endpoint
}