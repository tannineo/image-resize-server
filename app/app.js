import './env'
import Koa from 'koa'
import routes from '~/app/routes'

const port = process.env.PORT

const app = new Koa()

// cors mw
app.use(require('koa2-cors')())

// apply routes
app.use(routes)

// start server
app.listen(port, '0.0.0.0', () => {
  console.log(`app listening on :${port}`)
})
