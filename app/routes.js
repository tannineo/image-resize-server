import Router from 'koa-router'

import miscController from './controllers/misc/miscController'
import imgController from './controllers/img/imgController'

const router = new Router()

router.get('/', miscController.getSysInfo)
router.get('/status', miscController.getHealthCheck)
router.get('/img/:width/:height/:name', imgController.getResizedImage)
router.get('/img/:width/:name', imgController.getResizedImage)

export default router.routes()
