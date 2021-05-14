const path = require('path')
const HTMLWebpackPlugin = require('html-webpack-plugin')
const {CleanWebpackPlugin} = require('clean-webpack-plugin')

// webpack所有配置应该写在module.exports中
module.exports = {
    // 指定入口文件
    entry: "./src/index.ts",
    // 指定打包文件存放的目录
    output: {
        // 指定打包文件的目录
        path: path.resolve(__dirname, 'dist'),
        // 打包后的文件
        filename: "bundle.js",

        // 告诉webpack不使用箭头函数
        environment: {
            arrowFunction: false
        }
    },
     // 设置mode
    // mode: "development",
    mode: 'production',
    // webpack打包时要使用的模块
    module: {
        // 指定loader规则
        rules: [
            {
                // test 规则生效的文件
                test: /\.ts$/,
                // 使用的loader
                use: [
                    // 配置babel
                    {
                        // 配置加载器
                        loader: 'babel-loader',
                        // 设置babel
                        options: {
                            // 设置预定义环境
                            presets: [
                                [
                                    // 指定环境插件
                                    "@babel/preset-env",
                                    // 配置信息
                                    {
                                        // 要兼容的目标浏览器
                                        targets: {
                                            "chrome": '58',
                                            "ie": "11"

                                        },
                                        // 指定corejs版本
                                        "corejs": "3",
                                        // 使用corejs方法
                                        // 按需加载
                                        "useBuiltIns": "usage"
                                    }
                                ]

                            ]
                        }
                        
                    },
                    'ts-loader'
                ],
                // 指定要排除的文件
                exclude: /node_modules/
            }
        ]
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HTMLWebpackPlugin({
            // 自定义title
            // title: "my page"
            template: './src/index.html'
        }),
    ],
    // 指定哪些文件可以作为模块使用
    resolve: {
        extensions: ['.ts', '.js']
    }

}