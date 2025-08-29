{{/*
Expand the name of the chart.
*/}}
{{- define "shared-secrets.name" -}}
{{- default .Chart.Name .Values.nameOverride | trunc 63 | trimSuffix "-" }}
{{- end }}

{{/*
Create a default fully qualified app name.
We truncate at 63 chars because some Kubernetes name fields are limited to this (by the DNS naming spec).
If release name contains chart name it will be used as a full name.
*/}}
{{- define "shared-secrets.fullname" -}}
{{- if .Values.fullnameOverride }}
{{- .Values.fullnameOverride | trunc 63 | trimSuffix "-" }}
{{- else }}
{{- $name := default .Chart.Name .Values.nameOverride }}
{{- if contains $name .Release.Name }}
{{- .Release.Name | trunc 63 | trimSuffix "-" }}
{{- else }}
{{- printf "%s-%s" .Release.Name $name | trunc 63 | trimSuffix "-" }}
{{- end }}
{{- end }}
{{- end }}

{{/*
Create chart name and version as used by the chart label.
*/}}
{{- define "shared-secrets.chart" -}}
{{- printf "%s-%s" .Chart.Name .Chart.Version | replace "+" "_" | trunc 63 | trimSuffix "-" }}
{{- end }}

{{/*
Common labels
*/}}
{{- define "shared-secrets.labels" -}}
helm.sh/chart: {{ include "shared-secrets.chart" . }}
{{ include "shared-secrets.selectorLabels" . }}
{{- if .Chart.AppVersion }}
app.kubernetes.io/version: {{ .Chart.AppVersion | quote }}
{{- end }}
app.kubernetes.io/managed-by: {{ .Release.Service }}
{{- end }}

{{/*
Selector labels
*/}}
{{- define "shared-secrets.selectorLabels" -}}
app.kubernetes.io/name: {{ include "shared-secrets.name" . }}
app.kubernetes.io/instance: {{ .Release.Name }}
{{- end }}

{{/*
Create the name of the secret with the aws sm creds
*/}}
{{- define "shared-secrets.awsSecretManagerCredName" -}}
{{- printf "%s-%s" (include "shared-secrets.fullname" .) "aws-sm-creds" }}
{{- end }}

{{/*
Create the name of the aws secret store
*/}}
{{- define "shared-secrets.awsSecretStoreName" -}}
{{- printf "%s-%s" (include "shared-secrets.fullname" .) "aws-secret-store" }}
{{- end }}

{{/*
Create the name of the k8s secret store for a target namespace
*/}}
{{- define "shared-secrets.k8sSecretStoreName" -}}
{{- $ := index . 0}}
{{- $namespace := index . 1}}
{{- printf "%s-%s-%s" (include "shared-secrets.fullname" $) "k8s-secret-store" $namespace }}
{{- end }}

{{/*
Create the name of the service account to use
*/}}
{{- define "shared-secrets.serviceAccountName" -}}
{{- if .Values.serviceAccount.create }}
{{- default (include "shared-secrets.fullname" .) .Values.serviceAccount.name }}
{{- else }}
{{- default "default" .Values.serviceAccount.name }}
{{- end }}
{{- end }}

{{/*
Create the name of the RBAC role to use and bind to the service account
*/}}
{{- define "shared-secrets.roleName" -}}
{{- if .Values.serviceAccount.create }}
{{- printf "%s-%s" (default (include "shared-secrets.serviceAccountName" .) .Values.serviceAccount.name) "role" }}
{{- else }}
{{- printf "%s-%s" (default "default" .Values.serviceAccount.name) "role" }}
{{- end }}
{{- end }}
