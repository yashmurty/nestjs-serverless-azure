# NestJS Serverless App

This is a proof-of-concept app which utilizes the following projects/technologies.

### Primary Tasks for PoC

- [NestJS](https://github.com/nestjs/nest) - NodeJS Framework.
- [Serverless](https://github.com/serverless/serverless) - Build applications with serverless architectures using AWS Lambda.
    - [Azure Functions](https://serverless.com/framework/docs/providers/azure/guide/intro/)
    - [Azure Functions scalability](https://docs.microsoft.com/en-us/azure/azure-functions/durable/durable-functions-perf-and-scale)
- [CosmosDB](https://docs.microsoft.com/en-us/azure/cosmos-db/) - Azure Cosmos DB is Microsoft’s globally distributed, multi-model database service for operational and analytics workloads.

### Progress

| Technology  | Progress |
| ------------- | ------------- |
| NestJS  | PoC Done |
| Serverless  | PoC Done  |
| CosmosDB  | Not Started  |

### Secondary Tasks for PoC
- `docker-compose` - It would be good to have it for local development. 
    - This would be a good alternative since `serverless offline` does not support hot-reload (at least the way it's implemented right now in this repo). This should consider the use of `offline CosmosDB`?
- `CosmosDB` - Add support in `serverless` YAML file `resources` section?
- `Swagger/openapi` - Investigate how to auto-generate it with decorators, etc. (We should not think about maintaining it manually).
- `Stages` - Configure various deployment stages like `dev`, `stg`, `prd`. 
- `Routing` - Configure domain routing, etc. via `serverless` resources (we do not need `terraform` if we can do all config via `serverless` YAML.)
- `CircleCI` - Add `CI/CD` support.
- `DynamoDB trigger -> GCP BigQuery (or AWS redshift) for Data Analysis`
- `SMS auth (encrypt phone number if possible)` - Please investigate only the encryption part, auth will be taken care of by Primary Tasks.

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Running the app in serverless offline mode
```bash
$ npm run sls-offline
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```
