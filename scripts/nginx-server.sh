#!/bin/bash

CONTAINER_ID=$(docker-compose ps -q nginx)

if [ -z "$CONTAINER_ID" ]; then
    echo "NGINX service not found."
    exit 1
fi

docker exec -it $CONTAINER_ID /bin/bash
