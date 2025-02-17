const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const path = require('path');
const json = require('./config/config.json');

const config = {
  mode: 'development',
  entry: './src/.coco/index.tsx',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: [
          { loader: 'babel-loader' },
          {
            loader: "ts-loader",
            options: {
              transpileOnly: false,
            }
          }
        ],
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        use: [
          'style-loader', // 将 CSS 注入到 DOM 中
          'css-loader',   // 解析 CSS 文件
          {
            loader: 'postcss-loader', // 使用 PostCSS 插件
            options: {
              postcssOptions: {
                plugins: [
                  require('tailwindcss'),
                  require('autoprefixer'),
                ],
              },
            },
          },
        ],
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.jsx', '.js'],
  },
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, json.target),
    clean: true,
  },
  devServer: {
    static: {
      directory: path.join(__dirname, json.target),
    },
    compress: true,
    historyApiFallback: true,
    port: 9700,
    devMiddleware: {
      writeToDisk: true,
    }
  },
  plugins: [
    new HtmlWebpackPlugin({
      publicPath: '/',
      templateContent: `
<!DOCTYPE html>
<html lang="en">
<body>
  <div id="root"></div>
</body>
</html>
  `,
    }),
    new CopyPlugin({
      patterns: [
        { from: 'other-assert', to: './' },
      ],
      options: {
        concurrency: 100,
      },
    }),
  ],
};

module.exports = config;
