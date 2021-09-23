#!/bin/sh

deployment_dir=/opt/microservices-demo/postings-service
if [ -d "$deployment_dir" ] && [ -x "$deployment_dir" ]; then
  cd /opt/microservices-demo/postings-service

  rm -rf *
fi