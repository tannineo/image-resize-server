import Router from 'koa-router'

import miscController from './controllers/misc/miscController'

const router = new Router()

router.get('/', miscController.getSysInfo)
router.get('/status', miscController.getHealthCheck)

export default router.routes()
