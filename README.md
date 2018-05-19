# Getting started

This is a Polymer frontend, Graphcool backend, nodejs microservices application.

## Local Development

### Start the frontend and microservices

```
make start
```

Start the graphcool backend

```
cd ./server
```

### Start the backend service

If this is the first time your setting up the application you will need to
create the local docker containers

```
graphcool local up
```

Now you can deploy to the local docker containers

```
graphcool deploy
```

If this is the first time running the `graphcool deploy` command then it will prompt
you for the target name and service name.

```
target: dev
service_name: local
```

If everything worked correctly you should see a listing of GraphQL endpoints.

```
Simple API:        http://localhost:60000/simple/v1/<unique_id>
Relay API:         http://localhost:60000/relay/v1/<unique_id>
Subscriptions API: ws://localhost:60000/subscriptions/v1/<unique_id>
```

Accessing the `Simple API endpoint will show you the interactive Graphcool Playground
where you can query and mutate the local data.

## Accessing the application

Visit [http://localhost](http://localhost)