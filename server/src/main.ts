import Koa from 'koa'
import bodyParser from 'koa-bodyparser'
import json from 'koa-json'

import router from './routes'
import apolloServer from './apollo'

const app = new Koa()

// Middleware:
app.use(apolloServer.getMiddleware())
app.use(bodyParser())
app.use(json())
app.use(router.routes())
app.use(router.allowedMethods())


app.listen({ port: 4000 }, () => {
  console.log(`🚀 GraphQl Playground: http://localhost:4000${apolloServer.graphqlPath}`)
})
