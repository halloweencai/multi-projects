const config = {
    projectA: {
        pages: {
            index: {
                entry: "src/projects/projectA/main.js",
                template: "public/index.html",
                filename: "index.html"
            }
        },
        devServer: {
            port: 8080,  // 端口地址
            open: false,  // 是否自动打开浏览器页面
            host: "localhost", // 指定使用一个host，默认是localhost
            https: false, // 使用https提供服务
            disableHostCheck: true,
            // 设置代理
            proxy: {
                "/eopenhapi": {
                    target: "http://open.jdpay.com",
                    changeOrigin: true
                }
            }
        }
    },
    projectB: {
        pages: {
            index: {
                entry: "src/projects/projectB/main.js",
                template: "public/index.html",
                filename: "index.html"
            }
        },
    }
}

module.exports = config