# 🚀 Deployment Guide

## GitHub Actions CI/CD Setup

### 1. AWS Credentials Setup

#### В AWS Console:
1. Создайте IAM пользователя для GitHub Actions
2. Присвойте политики:
   - `AmazonS3FullAccess`
   - `CloudWatchFullAccess`
   - `AWSLambdaFullAccess`
   - `IAMFullAccess`
   - `AmazonAPIGatewayAdministrator`
   - `AmazonEventBridgeFullAccess`

#### В GitHub Repository Settings > Secrets and Variables:

**Secrets (Settings > Secrets and variables > Actions > Repository secrets):**
```
AWS_ACCESS_KEY_ID=your_access_key_id
AWS_SECRET_ACCESS_KEY=your_secret_access_key

# Database
DB_HOST=your_rds_host
DB_PORT=5432
DB_USERNAME=your_db_user
DB_PASSWORD=your_db_password
DB_NAME=sportbackend

# Auth
JWT_SECRET=your-super-secure-jwt-secret
JWT_EXPIRES_IN=24h

# Optional
PDF_FUNCTION_ARN=arn:aws:lambda:region:account:function:pdf-function
SQS_FUNCTION_ARN=arn:aws:lambda:region:account:function:sqs-function
```

**Variables (Settings > Secrets and variables > Actions > Repository variables):**
```
AWS_REGION=us-east-1
STACK_NAME=sportbackend-prod
```

### 2. Environment Setup

Создайте environment "production":
1. Go to Settings > Environments
2. Click "New environment"
3. Name: `production`
4. Add protection rules if needed

### 3. Deployment Process

#### Automatic Deployment:
- Push to `main` branch triggers deployment
- Workflow: test → build → deploy

#### Manual Deployment:
```bash
# Run GitHub Actions manually from Actions tab
```

### 4. Local Testing

```bash
# Build Lambda package locally
npm run build
mkdir -p dist/lambda-package
cp dist/lambda.js dist/lambda-package/index.js
cp package.json dist/lambda-package/
cd dist/lambda-package
npm ci --production
zip -r ../lambda-deployment.zip .
```

### 5. Terraform State Management

**Important**: Set up remote state backend:

```hcl
# terraform/backend.tf
terraform {
  backend "s3" {
    bucket = "your-terraform-state-bucket"
    key    = "sportbackend/terraform.tfstate"
    region = "us-east-1"

    # Optional: DynamoDB table for state locking
    dynamodb_table = "terraform-locks"
  }
}
```

### 6. Monitoring

After deployment, check:
- CloudWatch Logs: `/aws/lambda/your-stack-name`
- API Gateway: Test endpoints
- Lambda Metrics: Cold starts, duration, errors

### 7. Environment Variables in Lambda

Variables are automatically set from GitHub Secrets:
- `NODE_ENV=production`
- Database connection settings
- JWT configuration

### 8. Troubleshooting

#### Common Issues:
1. **Permissions**: Check IAM policies
2. **Terraform State**: Ensure state bucket exists
3. **Dependencies**: Check package.json production deps
4. **Memory/Timeout**: Adjust in terraform/modules/lambda/main.tf

#### Debug Commands:
```bash
# Check deployment
curl https://your-api-domain/health

# Test auth
curl -X POST https://your-api-domain/auth/register \
  -H "Content-Type: application/json" \
  -d '{"email":"test@example.com","password":"password123","firstName":"Test","lastName":"User"}'
```

## 🔧 Configuration Files

- `.github/workflows/deploy.yml` - CI/CD pipeline
- `terraform/terraform.tfvars.example` - Environment variables template
- `terraform/modules/lambda/main.tf` - Lambda configuration

## 📊 Deployment Outputs

After successful deployment:
- **API URL**: Available in GitHub Actions summary
- **Lambda Function Name**: From Terraform outputs
- **CloudWatch Logs**: Monitoring and debugging