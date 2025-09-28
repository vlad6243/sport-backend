# Terraform Infrastructure

This Terraform configuration creates AWS infrastructure for a serverless application with Lambda, API Gateway, S3, CloudFront, and EventBridge Scheduler.

## Structure

```
terraform/
├── main.tf                    # Main module configuration
├── variables.tf               # Root variables
├── outputs.tf                # Root outputs
├── versions.tf               # Provider versions
├── dev/
│   └── terraform.tfvars      # Development environment variables
├── prod/
│   └── terraform.tfvars      # Production environment variables
└── modules/
    ├── lambda/               # Lambda function and IAM roles
    ├── api_gateway/          # API Gateway V2 (HTTP API)
    ├── s3_cloudfront/        # S3 bucket and CloudFront distribution
    └── scheduler/            # EventBridge Scheduler schedules
```

## Usage

### Development Environment

```bash
cd terraform/
terraform init
terraform plan -var-file="dev/terraform.tfvars"
terraform apply -var-file="dev/terraform.tfvars"
```

### Production Environment

```bash
cd terraform/
terraform init
terraform plan -var-file="prod/terraform.tfvars"
terraform apply -var-file="prod/terraform.tfvars"
```

## Configuration

Update the values in `dev/terraform.tfvars` and `prod/terraform.tfvars`:

- `stack_name`: Unique name for your stack
- `subdomain`: Subdomain for API Gateway
- `subdomain_images`: Subdomain for CloudFront distribution
- `hosted_zone_name`: Your domain name
- `domain_certificate_arn`: ACM certificate ARN for API Gateway
- `certificate_arn`: ACM certificate ARN for CloudFront
- `environment_variables`: Environment variables for Lambda function

## Resources Created

- **Lambda Function**: Main application logic
- **API Gateway V2**: HTTP API with custom domain
- **S3 Bucket**: Static file storage
- **CloudFront Distribution**: CDN for S3 content
- **EventBridge Scheduler**: Cron jobs for Lambda
- **IAM Roles**: Execution and invoke permissions
- **Lambda Permissions**: API Gateway invoke permissions

## Outputs

- `api_id`: API Gateway ID
- `upload_file_role`: S3 upload role ARN
- `webapp_s3_bucket_name`: S3 bucket name
- `lambda`: Lambda function name
- `api_gateway_regional_domain`: API Gateway regional domain