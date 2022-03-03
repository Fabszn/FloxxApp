const HtmlWebpackPlugin = require('html-webpack-plugin'); // Require  html-webpack-plugin plugin
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const webpack = require('webpack');
var GitRevisionPlugin = require('git-revision-webpack-plugin')


var apiHost;

var setupEnv = function(env) {
    console.log("setup NODE_ENV " + process.env["NODE_ENV"])
    switch (process.env["NODE_ENV"]) {
        case 'staging':
            apiHost = JSON.stringify("https://floxxbackend-staging.cleverapps.io/")
            wsHost = JSON.stringify("wss://floxxbackend-staging.cleverapps.io")
            break;
        case 'production':
            apiHost = JSON.stringify("https://floxxbackend.cleverapps.io/")
            wsHost = JSON.stringify("wss://floxxbackend.cleverapps.io")
            break;
        case 'development':
            apiHost = JSON.stringify("http://localhost:8081/")
            wsHost = JSON.stringify("ws://localhost:8081")
            break;
        default:
             apiHost = JSON.stringify("http://localhost:8081/")
                        wsHost = JSON.stringify("ws://localhost:8081")
                        break;
    }
}

var gitRevisionPlugin = new GitRevisionPlugin();

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
            new webpack.DefinePlugin({
                FLOXX_VERSION: JSON.stringify(gitRevisionPlugin.version())
            })
        ],
        devServer: { // configuration for webpack-dev-server
            contentBase: './src/public', //source of static assets
            port: 8080, // port to run dev-server
            host: '0.0.0.0',
            disableHostCheck: true
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