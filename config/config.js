const path = require('node:path');
const process = require("node:process");

const config = {
  "webpack": {
    "output": {
      "path": path.join(process.cwd(), "docs")
    }
  }
}

module.exports = config;