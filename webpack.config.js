const path = require('path');
var webpack = require("webpack");

var childProcess = require('child_process')
var buildnum = childProcess.execSync('git rev-list HEAD --count').toString();

console.log(buildnum);
module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'aaCustomElements.js'
  },
  mode: "development",
  plugins: [
    new webpack.DefinePlugin({
      VERSION: JSON.stringify('12345'),
      BUILD_NUMBER: buildnum
    })
  ]
};