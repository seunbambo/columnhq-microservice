#!/bin/sh
cd /opt/microservices-demo/postings-service
mv .production.env .env
yarn
