import Router from 'koa-router'
import axios from 'axios'
import { fromPairs, zip, pick } from 'lodash'


interface Reflection<T> {
  value?: T
  error?: any
  status: 'resolved' | 'rejected'
}

function reflect<T>(promise: Promise<T>): Promise<Reflection<T>> {
  return promise.then(
    (value) => ({ value, status: 'resolved' }),
    (error) => ({ error, status: 'rejected' }),
  )
}


/**
 * Gets the results from a few different currency APIs.
 * Will always return results even if some or all of the
 * external APIs fail to deliver.
 */
const restExample: Router.IMiddleware = async (ctx, next) => {
  const results = await Promise.all([
    axios.get('http://apis.is/currency/m5'),
    axios.get('http://apis.is/currency/arion'),
    axios.get('http://apis.is/currency/lb'),
  ].map(reflect))

  const dataOut = fromPairs(zip(
    ['m5', 'arion', 'lb'],
    results.map(({ value, error }) => {
      if (error == null) {
        return value.data.results
      }

      if (error.response) {
        return {
          error: 'remote_server_error',
          response: pick(error.response, ['data', 'status', 'headers']),
        }
      } else if (error.request) {
        return {
          error: 'remote_server_error',
          response: null,
        }
      }

      console.error(error)
      return {
        error: 'internal_server_error',
      }
    }),
  ))

  ctx.body = JSON.stringify(dataOut, null, 2)

  next()
}

export default restExample
