const config = require("./config/projectsConfig.js")
let projectName = process.env.INCLUDEAPP  // 获取package.json中scripts配置的变量
console.log(projectName)

module.exports = {
    ...config[projectName],

    // 基本路径
    publicPath: "./",

    // 输出文件目录
    outputDir: "dist/" + projectName + "/"
}