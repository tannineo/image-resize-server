const debug = require('debug')('app:' + __filename)

/**
 * get resized image
 * @param {*} ctx
 */
const getResizedImage = async ctx => {
  debug('getResizedImage the ctx: %o', ctx.params)

  ctx.body = 'test'
}

export default {
  getResizedImage
}
