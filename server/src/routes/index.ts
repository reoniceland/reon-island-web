import Router from 'koa-router'

import restExample from './restExample'
import soapExample from './soapExample'


const router = new Router()


router.get('/', (ctx, next) => {
  ctx.body = 'Status: UP'
  next()
})

router.get('/rest/', restExample)
router.get('/soap/', soapExample)

export default router