terraform {
  required_providers {
    local = {
      source  = "hashicorp/local"
      version = "~> 2.3"
    }
  }
}

provider "local" {}

# Simulate creating a file (practice resource creation)
resource "local_file" "example_file" {
  content  = "Hello Terraform! This is a local simulation."
  filename = "${path.module}/hello.txt"
}

# Simulate another resource
resource "null_resource" "example_null" {
  provisioner "local-exec" {
    command = "echo 'This is a null resource running locally!'"
  }
}
