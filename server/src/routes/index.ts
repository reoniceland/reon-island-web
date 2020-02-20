import Router from 'koa-router'

import restExample from './api-examples/rest'
import soapExample from './api-examples/soap'
import graphqlExample from './api-examples/graphql'


const router = new Router()


router.get('/', (ctx, next) => {
  ctx.body = 'Status: UP'
  next()
})

router.get('/api-examples/rest/', restExample)
router.get('/api-examples/soap/', soapExample)
router.get('/api-examples/graphql/', graphqlExample)

export default router
