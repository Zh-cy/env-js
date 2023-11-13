#!/bin/bash

CONTAINER_ID=$(docker-compose ps -q app)

if [ -z "$CONTAINER_ID" ]; then
    echo "App service not found."
    exit 1
fi

docker exec -it $CONTAINER_ID /bin/bash
