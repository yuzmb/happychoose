var path = require('path')
var webpack = require('webpack')
const CleanWebpackPlugin = require('clean-webpack-plugin')

module.exports = {
  entry: './src/main.js',
  output: {
    path: path.resolve(__dirname, './dist'),
    publicPath: '/dist/',
    filename: 'build.js'
  },
  plugins: [
    new CleanWebpackPlugin('./dist')
  ],
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          loaders: {
          }
          // other vue-loader options go here
        }
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        loader: 'file-loader',
        options: {
          name: '[name].[ext]?[hash]'
        }
      },
      {
        test: /\.(css|less)$/, //如果是用npm3 还要多安装less模块
        use: ['style-loader', 'css-loader', 'less-loader'], 
        exclude: /node_modules/
      }

    ]
  },
  resolve: {
    //模块别名定义，方便后续直接引用别名，无须多写长长的地址    
    alias: {
      'vue$': 'vue/dist/vue.esm.js'
    },
    //自动扩展文件后缀名，意味着我们require模块可以省略不写后缀名
    extensions: ['.js', '.json', '.less', '.css', '.vue']
  },
  devServer: {
    historyApiFallback: true,
    noInfo: true,
    port: 8888 //默认端口是8080
  },
  performance: {
    hints: false
  },
  devtool: 'inline-source-map'//'#eval-source-map'
}

if (process.env.NODE_ENV === 'production') {
  module.exports.devtool = '#source-map'
  // http://vue-loader.vuejs.org/en/workflow/production.html
  module.exports.plugins = (module.exports.plugins || []).concat([
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"production"'
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      sourceMap: true,
      compress: {
        warnings: false
      }
    }),
    new webpack.LoaderOptionsPlugin({
      minimize: true
    })
  ])
}
