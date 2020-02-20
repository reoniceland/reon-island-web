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

const port = process.env.PORT || 4000

app.listen({ port }, () => {
  if (process.env.NODE_ENV === 'production') {
    console.log(`🚀 Koa started on port: ${port}`)
  } else {
    console.log(`🚀 GraphQl Playground: http://localhost:${port}${apolloServer.graphqlPath}`)
  }
})
