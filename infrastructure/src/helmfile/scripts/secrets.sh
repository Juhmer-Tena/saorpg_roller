#!/bin/sh

# Namespace should be the same one that external-dns is written into (usually saorpg-roller)
kubectl create secret generic external-dns --from-literal=CF_API_TOKEN=${CF_API_TOKEN} --namespace=${namespace}
