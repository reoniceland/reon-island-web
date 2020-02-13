import { ApolloServer } from 'apollo-server-koa'

import typeDefs from './typeDefs'
import resolvers from './resolvers'


const server = new ApolloServer({
  typeDefs,
  resolvers,
})


export default server
