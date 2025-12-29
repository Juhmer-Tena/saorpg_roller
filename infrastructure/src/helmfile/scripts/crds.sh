#!/bin/sh

kubectl apply --server-side --force-conflicts -f https://github.com/kubernetes-sigs/gateway-api/releases/download/v1.4.0/experimental-install.yaml
kubectl apply -f https://raw.githubusercontent.com/cloudflare/origin-ca-issuer/v0.13.0/deploy/crds/cert-manager.k8s.cloudflare.com_originissuers.yaml
kubectl apply -f https://raw.githubusercontent.com/cloudflare/origin-ca-issuer/v0.13.0/deploy/crds/cert-manager.k8s.cloudflare.com_clusteroriginissuers.yaml
