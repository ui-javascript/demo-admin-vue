// 颜色插件
var chalk = require('chalk')

// 版本控制
var semver = require('semver')

var packageConfig = require('../package.json')

// 执行
function exec(cmd) {
    return require('child_process').execSync(cmd).toString().trim()
}

// 版本要求
var versionRequirements = [
    {
        name: 'node',
        currentVersion: semver.clean(process.version),
        versionRequirement: packageConfig.engines.node
    },
    {
        name: 'npm',
        currentVersion: exec('npm --version'),
        versionRequirement: packageConfig.engines.npm
    }
]

// 导出
module.exports = function () {
    var warnings = []
    for (var i = 0; i < versionRequirements.length; i++) {
        var mod = versionRequirements[i]

        // 如果不符合环境要求
        if (!semver.satisfies(mod.currentVersion, mod.versionRequirement)) {
            warnings.push(mod.name + ': ' +
                chalk.red(mod.currentVersion) + ' should be ' +
                chalk.green(mod.versionRequirement)
            )
        }
    }

    if (warnings.length) {
        console.log('')
        console.log(chalk.yellow('To use this template, you must update following to modules:'))
        console.log()

        for (var i = 0; i < warnings.length; i++) {
            var warning = warnings[i]
            console.log('  ' + warning)
        }

        console.log()

        // 退出
        process.exit(1)
    }
}
