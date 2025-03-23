const path = require('node:path');
const process = require("node:process");
const CopyWebpackPlugin = require("copy-webpack-plugin");

const config = {
  "webpack": {
    "output": {
      publicPath: '/',
      "path": path.join(process.cwd(), "docs")
    },
    "plugins": [
      new CopyWebpackPlugin({
        patterns: [
          { from: path.resolve(process.cwd(), "other-assert"), to: path.join(process.cwd(), "docs") },
        ],
      }),
    ]
  }
}

module.exports = config;