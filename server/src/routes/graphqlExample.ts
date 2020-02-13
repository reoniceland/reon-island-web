import Router from 'koa-router'
import axios from 'axios'


const graphqlExample: Router.IMiddleware = async (ctx, next) => {
  ctx.body = 'TODO'
  next()
}

export default graphqlExample
