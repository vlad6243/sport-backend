output "bucket_name" {
  description = "S3 bucket name"
  value       = aws_s3_bucket.webapp_bucket.id
}

output "bucket_arn" {
  description = "S3 bucket ARN"
  value       = aws_s3_bucket.webapp_bucket.arn
}

output "cloudfront_distribution_id" {
  description = "CloudFront distribution ID"
  value       = aws_cloudfront_distribution.images_distribution.id
}

output "upload_file_role_arn" {
  description = "Upload file role ARN"
  value       = aws_iam_role.upload_file_role.arn
}