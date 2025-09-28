# EventBridge Scheduler Schedules
resource "aws_scheduler_schedule" "every_six_hours" {
  name       = "${var.stack_name}-smartfieldsEvery6Hours"
  group_name = "default"
  state      = "ENABLED"

  schedule_expression          = "cron(0 */6 * * ? *)"
  schedule_expression_timezone = "Europe/Kiev"

  flexible_time_window {
    mode = "OFF"
  }

  target {
    arn      = var.lambda_function_arn
    role_arn = var.lambda_invoke_role_arn
    input    = jsonencode({
      cron = {
        function = "everySixHours"
      }
    })

    retry_policy {
      maximum_event_age_in_seconds = 86400
      maximum_retry_attempts       = 0
    }
  }
}

resource "aws_scheduler_schedule" "every_fifteen_minutes" {
  name       = "${var.stack_name}-smartfieldsEvery15Minutes"
  group_name = "default"
  state      = "ENABLED"

  schedule_expression          = "cron(0/15 * * * ? *)"
  schedule_expression_timezone = "Europe/Kiev"

  flexible_time_window {
    mode = "OFF"
  }

  target {
    arn      = var.lambda_function_arn
    role_arn = var.lambda_invoke_role_arn
    input    = jsonencode({
      cron = {
        function = "everyFifteenMinutes"
      }
    })

    retry_policy {
      maximum_event_age_in_seconds = 86400
      maximum_retry_attempts       = 0
    }
  }
}

resource "aws_scheduler_schedule" "every_midnight" {
  name       = "${var.stack_name}-smartfieldsEveryMidnight"
  group_name = "default"
  state      = "ENABLED"

  schedule_expression          = "cron(0 0 * * ? *)"
  schedule_expression_timezone = "Europe/Kiev"

  flexible_time_window {
    mode = "OFF"
  }

  target {
    arn      = var.lambda_function_arn
    role_arn = var.lambda_invoke_role_arn
    input    = jsonencode({
      cron = {
        function = "everyMidnight"
      }
    })

    retry_policy {
      maximum_event_age_in_seconds = 86400
      maximum_retry_attempts       = 0
    }
  }
}