.PHONY: up down logs shell migrate migrate-create migrate-revert build clean init plan apply init-dev plan-dev apply-dev init-prod plan-prod apply-prod

# Terraform variables
TERRAFORM_DIR := terraform
ENV ?= dev

# Environment-specific Terraform commands
init: ## Initialize Terraform for current environment
	cd $(TERRAFORM_DIR) && terraform init
	cd $(TERRAFORM_DIR) && terraform workspace select -or-create $(ENV)

plan: ## Plan Terraform changes for current environment
	cd $(TERRAFORM_DIR) && terraform workspace select -or-create $(ENV)
	cd $(TERRAFORM_DIR) && terraform plan -var-file=$(ENV)/terraform.tfvars

apply: ## Apply Terraform changes for current environment
	cd $(TERRAFORM_DIR) && terraform workspace select -or-create $(ENV)
	cd $(TERRAFORM_DIR) && terraform apply -var-file=$(ENV)/terraform.tfvars -auto-approve
	@echo "🚀 Terraform applied for $(ENV) environment"

# Docker commands
up:
	docker-compose up -d

down:
	docker-compose down

logs:
	docker-compose logs -f back

shell:
	docker-compose exec back sh

# Migration commands (Docker)
migrate:
	docker-compose exec back npm run migration:run

migrate-create:
	docker-compose exec back npm run migration:create $(name)

migrate-revert:
	docker-compose exec back npm run migration:revert

# Migration commands (Local)
migrate-local:
	set -a && source .env && set +a && npm run migration:run

migrate-create-local:
	set -a && source .env && set +a && npm run migration:create $(name)

migrate-revert-local:
	set -a && source .env && set +a && npm run migration:revert

# Build commands
build:
	docker-compose build

rebuild:
	docker-compose build --no-cache

# Clean up
clean:
	docker-compose down -v
	docker system prune -f

# Linting and Formatting commands
lint:
	npm run lint

lint-fix:
	npm run lint:fix

format:
	npm run format

format-check:
	npm run format:check

# Newman/Testing commands
test-api:
	newman run postman/SportBackend.postman_collection.json -e postman/SportBackend.postman_environment.json

test-api-verbose:
	newman run postman/SportBackend.postman_collection.json -e postman/SportBackend.postman_environment.json --verbose

test-api-report:
	newman run postman/SportBackend.postman_collection.json -e postman/SportBackend.postman_environment.json --reporters cli,html --reporter-html-export postman/test-report.html

install-newman:
	npm install -g newman

# Development workflow
dev: up migrate logs

# Environment-specific workflows
deploy: init plan apply ## Deploy to environment (use ENV=dev or ENV=prod)

# Show help
help:
	@echo "Available commands:"
	@echo "Terraform commands:"
	@echo "  init            - Initialize Terraform for current environment (ENV=dev by default)"
	@echo "  plan            - Plan Terraform changes for current environment"
	@echo "  apply           - Apply Terraform changes for current environment"
	@echo "  init-dev        - Initialize Terraform for dev environment"
	@echo "  plan-dev        - Plan Terraform changes for dev environment"
	@echo "  init-prod       - Initialize Terraform for prod environment"
	@echo "  plan-prod       - Plan Terraform changes for prod environment"
	@echo "  deploy          - Full deployment (use ENV=dev or ENV=prod, default: dev)"
	@echo ""
	@echo "Docker commands:"
	@echo "  up              - Start containers"
	@echo "  down            - Stop containers"
	@echo "  logs            - Show logs"
	@echo "  shell           - Access container shell"
	@echo "  migrate         - Run migrations (Docker)"
	@echo "  migrate-create  - Create migration (Docker)"
	@echo "  migrate-revert  - Revert last migration (Docker)"
	@echo ""
	@echo "Local commands:"
	@echo "  migrate-local         - Run migrations (Local)"
	@echo "  migrate-create-local  - Create migration (Local)"
	@echo "  migrate-revert-local  - Revert last migration (Local)"
	@echo ""
	@echo "Code Quality:"
	@echo "  lint            - Run ESLint"
	@echo "  lint-fix        - Run ESLint with auto-fix"
	@echo "  format          - Format code with Prettier"
	@echo "  format-check    - Check code formatting"
	@echo ""
	@echo "Testing:"
	@echo "  test-api        - Run API tests with Newman"
	@echo "  test-api-verbose - Run API tests with verbose output"
	@echo "  test-api-report - Run API tests and generate HTML report"
	@echo "  install-newman  - Install Newman globally"
	@echo ""
	@echo "Other:"
	@echo "  build           - Build containers"
	@echo "  rebuild         - Rebuild containers from scratch"
	@echo "  clean           - Clean up containers and volumes"
	@echo "  dev             - Start development (up + migrate + logs)"