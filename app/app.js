import './env'
import Koa from 'koa'
import routes from '~/app/routes'

const port = process.env.PORT

const app = new Koa()

// apply routes
app.use(routes)

// start server
app.listen(port, () => {
  console.log(`app listening on :${port}`)
})
