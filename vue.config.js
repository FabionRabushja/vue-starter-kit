module.exports = {
    pages: {
        index: {
            entry: "src/app/app.main.ts"
        }
    },
    configureWebpack: {
            module: {
                rules: [
                    {
                        test: /.html$/,
                        loader: "vue-template-loader",
                        exclude: /index.html/
                    }
                ]
            }
        }
}
