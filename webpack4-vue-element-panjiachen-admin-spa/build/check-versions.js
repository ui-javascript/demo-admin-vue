'use strict'
const chalk = require('chalk')

// 版本控制
const semver = require('semver')
const shell = require('shelljs')

// 配置信息
const packageConfig = require('../package.json')

// 同步中的异步
// cpu多核 -> 子进程异步执行执行
// 适用于获取少量数据
// https://www.cnblogs.com/yanze/p/6137682.html
function exec(cmd) {
  return require('child_process')
    .execSync(cmd)
    .toString()
    .trim()
}

const versionRequirements = [
  {
    name: 'node',
    currentVersion: semver.clean(process.version),
    versionRequirement: packageConfig.engines.node
  }
]

if (shell.which('npm')) {
  versionRequirements.push({
    name: 'npm',
    currentVersion: exec('npm --version'),
    versionRequirement: packageConfig.engines.npm
  })
}

module.exports = function() {
  const warnings = []

  for (let i = 0; i < versionRequirements.length; i++) {
    const mod = versionRequirements[i]

    if (!semver.satisfies(mod.currentVersion, mod.versionRequirement)) {
      warnings.push(
        mod.name +
          ': ' +
          chalk.red(mod.currentVersion) +
          ' should be ' +
          chalk.green(mod.versionRequirement)
      )
    }
  }

  if (warnings.length) {
    console.log('')
    console.log(
      chalk.yellow(
        'To use this template, you must update following to modules:'
      )
    )
    console.log()

    for (let i = 0; i < warnings.length; i++) {
      const warning = warnings[i]
      console.log('  ' + warning)
    }

    console.log()

    // 退出
    process.exit(1)
  }
}
