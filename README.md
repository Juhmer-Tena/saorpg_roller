# SAO-RPG Roller Monorepo

This monorepo contains the three-tier stack (clients, backend, data) for the SAO-RPG Roller and
any configuration required for them.

This project is designed to be deployed using podman-compose to be OCI-compliant where the processes
for each layer is run as a container in the pod. However, any infrastructure, provisioning, or
configuration is not required to be done through podman.

## Roadmap

The roadmap to the v1.0.0-alpha is as follows:

1. [x] Database schema definition
2. [ ] Backend server creation with HATEOAS
3. [ ] Configure compose specification that can deploy the database with scripts that build the
    images and creates the pod
4. [ ] Creating a webpage as a front-end client using a HATEOAS client
5. [ ] Adding the webpage front-end client to the compose specification
6. [ ] Using Packer, Terraform, and Ansible to create, provision, and configure machines that host
    the application using the compose specification

## Preventing Scope Creep

The end goal of this project is to create a system that can be deployed anywhere and migrated
seamlessly from host to host as long as a database backup is available. This includes ensuring that
each component is well-tested even if automated tests are not set up in a continuous integration
pipeline and well-architected such that it can be maintained without too much expertise.

Using a high availability (HA) Kubernetes cluster is not necessary for a project of this scale.
