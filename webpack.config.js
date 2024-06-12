const path = require('path');

module.exports = {
  mode: 'production',
  entry: './src/index.ts', // Your main entry point
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'index.js',
    libraryTarget: 'umd',
    library: 'greentoolsdesign', // Replace with your library name
    umdNamedDefine: true
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx']
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'ts-loader'
        }
      }
    ]
  }
};
