# Terraform code

Terraform can be used to provision any infrastructure needed to support the application.  There's a
bit of a chicken and egg situation though when it comes to secrets.

We want to create secrets and secret versions in Terraform state. Why? Because they are
infrastructure and Terraform can be used to create them idempotently. We are also able to remove
them and transition from one state to the next.

But Terraform state should also be considered as secrets because it can contain secret values as
plain-text. So what is the plan?

The Terraform state secret is the only one that should be manually managed. This means that we will
provision the secret for the Terraform state but not the secret version. The Terraform state will be
uploaded as a secret version through CLI tools.

## TODO:

Currently put off to get MVP rolling. Infrastructure as code can come later.

* Create terraform module that creates the following things:
  * DigitalOcean Kubernetes cluster
    * Reason: Workloads such as the PostgreSQL cluster and the web application hosting
  * Google Secrets Manager
    * Reason: Secrets used to access AWS S3 bucket and also the PostgreSQL cluster from clientside.
  * AWS S3 Bucket
    * Reason: Used for backups of the PostgreSQL cluster
* Create terraform module that provisions using ansible tasks
