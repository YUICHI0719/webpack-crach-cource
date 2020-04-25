const path = require('path');

const outputPath = path.resolve(__dirname, 'dist');
console.log({outputPath});

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  output: {
    path: outputPath,
    filename: 'main.js'
  },
  devServer: {
    contentBase: outputPath
  }
}