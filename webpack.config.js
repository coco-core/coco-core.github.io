const path = require('path');

const config = {
  mode: 'development',
  entry: './src/.coco/index.tsx',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: [{ loader: 'babel-loader' }],
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
    path: path.resolve(__dirname, 'public/dist'),
    clean: true,
  },
  devServer: {
    static: {
      directory: path.join(__dirname, 'public'),
    },
    compress: true,
    port: 8001,
    devMiddleware: {
      writeToDisk: true,
    }
  },
};

module.exports = config;
