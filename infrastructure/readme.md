# Infrastructure Overview

* Postgres 9.5
* ElasticSearch
* Kibana

## Requirements

* [Docker](https://docs.docker.com/engine/installation/)
* [Docker Compose](https://docs.docker.com/compose/install/)

## Installation

* Run `docker-compose -f dev.yml up` for initial setup
* Use `docker-compose stop` and `docker-compose start` to reuse the services

## Usage

* Kibana `http://localhost:5601`
* Postgres `http://localhost:5432`
* ES `http://localhost:9200`

## Troubleshooting

* Occasionally run `docker volume ls -qf dangling=true` to make sure you're not leaving orphan volumes behind
* If any, run `docker volume rm $(docker volume ls -qf dangling=true)` to clean up said volumes
