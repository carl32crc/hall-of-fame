const HtmlWebPackPlugin = require('html-webpack-plugin')
const { SourceMapDevToolPlugin } = require('webpack')
const path = require('path')

const publicPath = process.env.PUBLIC_PATH || '/'

const fs = require('fs')
const directoryPath = path.join(__dirname, 'src')

function getFiles() {
  return new Promise((resolve) => {
    fs.readdir(directoryPath, function (error, files) {
      if (error) {
        return console.log('Unable to scan directory: ' + error)
      }
      resolve(files)
    })
  })
}

function getAlias(files) {
  return files
    .filter(file => !file.includes('.'))
    .reduce((acc, folder) => ({
      ...acc,
      [folder]: path.resolve(__dirname, `src/${folder}/`)
    }), {})
}

const config = async () => {
  const files = await getFiles()
  const alias = getAlias(files)
  return {
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: 'index_bundle.js',
      publicPath: publicPath
    },
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader'
          }
        },
        {
          test: /\.js$/,
          enforce: 'pre',
          use: ['source-map-loader']
        },
        {
          test: /\.(png|jpe?g|gif)$/i,
          use: [
            {
              loader: 'file-loader',
              options: {
                regExp: /\/([a-z0-9]+)\/[a-z0-9]+\.png$/i,
                name: '[1]-[name].[ext]'
              }
            }
          ]
        },
        {
          test: /\.html$/,
          use: [
            {
              loader: 'html-loader'
            }
          ]
        }
      ]
    },
    devServer: {
      historyApiFallback: true
    },
    resolve: {
      modules: [path.resolve(__dirname, './src'), 'node_modules'],
      extensions: ['.js', '.jsx', '.json'],
      alias
    },
    plugins: [
      new HtmlWebPackPlugin({
        publicPath: '/',
        template: './src/index.html',
        filename: './index.html',
        favicon: './favicon.ico'
      }),
      new SourceMapDevToolPlugin({
        filename: '[file].map'
      })
    ]
  }
}

module.exports = config
