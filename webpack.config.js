const path = require('path');
var webpack = require("webpack");


var childProcess = require('child_process');
var buildBranch = childProcess.execSync('git rev-parse --abbrev-ref HEAD').toString().trim();


module.exports = {
  entry: { 
    'index': './src/index.js',
    'paper-polymer': './paper-polymer-imports.js',
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js',
    chunkFilename: '[name].js',
    // publicPath: 'dist/',
    // jsonpScriptType:"module",
    libraryTarget: "umd",
    library:"executableHTML"
  },
  mode: "development",
  devtool:"source-map",
  
  plugins: [
    // new webpack.DefinePlugin({
    //   VERSION: build.version,
    //   BUILD_NUMBER: build.build,
    //   BUILD_BRANCH: buildBranch,
    //   BUILD_STRING: buildBranch+":"+build.build
    // })
  ]
};

