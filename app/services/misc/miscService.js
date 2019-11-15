import os from 'os'
import pkgInfo from '~/package.json'

/**
 * 获取系统信息
 * @param {*} ctx
 */
const getSysInfo = async () => {
  const environments = {
    nodeVersion: process.versions.node,
    hostname: os.hostname(),
    platform: `${process.platform}/${process.arch}`
  }

  const data = {
    name: pkgInfo.name,
    version: pkgInfo.version,
    description: pkgInfo.description,
    environments
  }

  return data
}

const getOK = async () => {
  return 'ok'
}

export default { getSysInfo, getOK }
