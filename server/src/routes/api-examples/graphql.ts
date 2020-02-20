import Router from 'koa-router'
import fetch from 'isomorphic-fetch'
import ApolloClient, { gql } from 'apollo-boost'


const graphqlExample: Router.IMiddleware = async (ctx, next) => {
  const { request } = ctx

  const client = new ApolloClient({
    uri: `${request.protocol}://${request.host}/graphql`,
    fetch,
  })

  await client.query({
    query: gql`
      query TestQuery {
        test
      }
    `,
  })
    .then(data => {
      ctx.body = data
    })
    .catch(error => {
      ctx.body = error
      ctx.status = 500
    })

  next()
}

export default graphqlExample
