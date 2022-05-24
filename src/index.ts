// src/index.ts
import * as dotenv from 'dotenv';
dotenv.config();

import "reflect-metadata";
import { createConnection } from "typeorm";
import { ApolloServer } from "apollo-server";
import { buildSchema } from "type-graphql";


// import { 
//   UserResolver, 
//   UserBillingResolver, 
//   UserMessageResolver,
//   UserPondResolver
// } from './resolvers';

let res = [__dirname + "/resolvers/*.ts"]
console.log(res, "OK")
const corsOptions = {
  origin: '*',
  credentials: true
}

async function main() {
  console.log("Launching DB Server")
  const connection = await createConnection()
  const schema = await buildSchema({

    //resolvers: [UserResolver, UserBillingResolver, UserMessageResolver, UserPondResolver]
    resolvers: [__dirname + "/resolvers/*.ts"]
  })
  const server = new ApolloServer(
    {
      schema, cors: corsOptions,
      subscriptions: { path: "/subscriptions" }
    })
  // server.subscriptionsPath = 'subscriptions'

  console.log("Launching GraphQL Server")
  console.log("RUNNING ON " + process.env.SERVER_PORT)
  await server.listen(process.env.SERVER_PORT)
  console.log("API Server is Ready!")
}
main();