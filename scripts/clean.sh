#!/bin/bash

docker-compose down

docker volume ls

echo "Deleting all volumes!"

docker volume rm $(docker volume ls -q)
