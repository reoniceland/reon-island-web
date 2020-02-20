import * as soap from 'soap'
import Router from 'koa-router'


const soapExample: Router.IMiddleware = async (ctx, next) => {
  const { zip_code: zipCode } = ctx.request.query

  if (!zipCode) {
    ctx.status = 400
    ctx.body = JSON.stringify({
      error: 'Missing zip_code from query. Example: /soap/?zip_code=10001',
    })
    next()
    return
  }

  const url = 'https://graphical.weather.gov/xml/SOAP_server/ndfdXMLserver.php?wsdl'

  const client = await soap.createClientAsync(url)

  await client.LatLonListZipCodeAsync({
    zipCodeList: zipCode,
  })
    .then((res: any) => {
      ctx.body = res[0].listLatLonOut.$value.match(/<latLonList>(.*)<\/latLonList>/)[1].split(',')
    })
    .catch((err: any) => {
      ctx.status = 500
      ctx.body = {
        error: 'Server error',
      }

      console.error(err)
    })

  next()
}

export default soapExample
