# Development database

A basic chart that installs a PostgreSQL StatefulSet and Service. Should be used strictly for
development purposes and validation. To access from outside the cluster, you should use the
`kubectl port-forward` tool.
