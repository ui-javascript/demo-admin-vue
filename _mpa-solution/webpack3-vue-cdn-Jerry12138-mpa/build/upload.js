const qiniu = require('qiniu')
const fs = require('fs')
const path = require('path')
const customConf = require('../config/app.config')
const OSS = require('ali-oss')

if (!customConf.isUpload) {
  console.log('您不需要上传至cdn，打包完成')
  return
}

// 阿里OSS上传
const client = new OSS(customConf.aLiOss)

async function put(filePath, file) {
  try {
    await client.put(file, filePath)
    console.log(file + ' 上传成功')
  } catch (err) {
    console.log(err)
  }
}

// 七牛上传
const {
  ak, sk, bucket
} = customConf.qiNiuCdn

const mac = new qiniu.auth.digest.Mac(ak, sk)

const qiniuConfig = new qiniu.conf.Config()
qiniuConfig.zone = qiniu.zone[customConf.qiNiuCdn.zone]

const doUpload = (key, file) => {
  const options = {
    scope: bucket + ':' + key
  }
  const formUploader = new qiniu.form_up.FormUploader(qiniuConfig)
  const putExtra = new qiniu.form_up.PutExtra()
  const putPolicy = new qiniu.rs.PutPolicy(options)
  const uploadToken = putPolicy.uploadToken(mac)
  return new Promise((resolve, reject) => {
    formUploader.putFile(uploadToken, key, file, putExtra, (err, body, info) => {
      if (err) {
        return reject(err)
      }
      if (info.statusCode === 200) {
        resolve(body)
      } else {
        reject(body)
      }
    })
  })
}

// 获取上传文件,上传函数
const publicPath = path.join(__dirname, '../dist')

const uploadAll = (dir, prefix) => {
  const files = fs.readdirSync(dir)
  files.forEach(file => {
    const filePath = path.join(dir, file)
    let key = prefix ? `${prefix}/${file}` : file
    key = key.replace(/\/{2,}/, '/').replace(/^\/{2,}/, '')
    if (fs.lstatSync(filePath).isDirectory()) {
      return uploadAll(filePath, key)
    }
    if (customConf.use === 'ali') {
      put(filePath, key)
    } else {
      doUpload(key, filePath)
        .then(resp => {
          console.log(resp)
        })
        .catch(err => console.error(err))
    }
  })
}

uploadAll(publicPath, customConf.uploadPath.prefix)
