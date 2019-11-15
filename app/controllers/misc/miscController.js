import miscService from '../../services/misc/miscService'

/**
 * 获取系统信息
 * !! 不要在生产环境使用
 * @param {*} ctx
 */
const getSysInfo = async ctx => {
  ctx.body = await miscService.getSysInfo()
}

const getHealthCheck = async ctx => {
  ctx.body = await miscService.getOK()
}

export default { getSysInfo, getHealthCheck }
