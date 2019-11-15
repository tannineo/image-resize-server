import * as fs from 'fs'
import * as path from 'path'

import * as Promise from 'bluebird'
import * as _ from 'lodash'

const sharp = require('sharp')

const debug = require('debug')('app:' + __filename)

Promise.promisifyAll(fs)

/**
 * get resized image
 * @param {*} ctx
 */
const getResizedImage = async ctx => {
  debug('getResizedImage the ctx: %o', ctx.params)

  try {
    const filename = ctx.params.name
    const width = parseInt(ctx.params.width)
    const height = parseInt(ctx.params.height)
    const filepath = path.resolve(__dirname, '../../statics', filename)

    debug('getResizedImage the filepath: %o', filepath)
    const data = await fs.readFileAsync(filepath)
    debug('getResizedImage read a data: %o', data)

    let resizedData
    if (_.isNaN(height) || _.isNull(height)) {
      debug('getResizedImage with width: %o', width)
      resizedData = await sharp(data)
        .resize(width)
        .toBuffer()
    } else {
      debug('getResizedImage with width: %o and height: %o', width, height)
      resizedData = await sharp(data)
        .resize(height, width)
        .toBuffer()
    }
    ctx.response.set('content-type', 'image/jpeg')
    ctx.body = resizedData
  } catch (err) {
    debug('getResizedImage catch a error: %o', err)
    return (ctx.body = '404'), (ctx.status = 404)
  }
}

export default {
  getResizedImage
}
