const path = require('path');
var webpack = require("webpack");


var childProcess = require('child_process')
var buildBranch = childProcess.execSync('git rev-parse --abbrev-ref HEAD').toString();

let build = require("./dist/build.json");
build.build++;
build.version = require("./package.json").version;
module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'aaCustomElements.js'
  },
  mode: "development",
  plugins: [
    new webpack.DefinePlugin({
      VERSION: build.version,
      BUILD_NUMBER: build.build,
      BUILD_BRANCH: buildBranch,
      BUILD_STRING: buildBranch+":"+build.build
    })
  ]
};

const fs = require('fs');
build.date = new Date().toString();
let data = JSON.stringify(build, null, 2);
fs.writeFileSync('./dist/build.json', data);