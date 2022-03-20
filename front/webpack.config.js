const HtmlWebpackPlugin = require('html-webpack-plugin'); // Require  html-webpack-plugin plugin
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const webpack = require('webpack');


function mockApi(app){

    app.get('/infos', function (req, res) {
                      res.send('devMode');
                    })
    app.post('/login', function (req, res) {
    //

        res.json({'name': 'Fabrice Szanjderman', 'isAdmin':true, token: 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VySWQiOiJhaGVyaXRpZXIiLCJmaXJzdG5hbWUiOiJhaGVyaXRpZXJAZ21haWwuY29tIiwiaXNBZG1pbiI6dHJ1ZX0.-ymZ5w8e6Whw2BYl0TVlqNA2q4mLe1YoEyjQsDxWJm0'});
    })

}

module.exports = env => {
    return {
        entry: __dirname + "/src/app/index.js", // webpack entry point. Module to start building dependency graph
        output: {
            path: __dirname + '/dist', // Folder to store generated bundle
            filename: 'floxx.js', // Name of generated bundle after build
            publicPath: '/' // public URL of the output directory when referenced in a browser
        },
        plugins: [ // Array of plugins to apply to build chunk
            new HtmlWebpackPlugin({
                template: __dirname + "/src/public/index.html",
                inject: 'body'
            }),
            new VueLoaderPlugin(),

        ],
        devServer: {
            contentBase: './src/public',
            port: 8082,
            host: '0.0.0.0',
            disableHostCheck: true,
            before: function(app) {
                mockApi(app)
            }
        },
        resolve: {
            alias: {
                'vue': 'vue/dist/vue.esm.js'
            }
        },
        module: {
            rules: [{
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            }, {
                test: /\.vue$/,
                loader: 'vue-loader'
            }]
        }
    }
}