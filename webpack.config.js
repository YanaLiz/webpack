const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundl.js',
    path: path.resolve(__dirname, 'build'),
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
  devServer: {
    port: 4444,
    open: true,
    status: 'errors-only',
    
  }
};
