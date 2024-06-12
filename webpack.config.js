import { resolve as _resolve } from 'path';

export const mode = 'production';
export const entry = './src/index.ts';
export const output = {
  path: _resolve(__dirname, 'dist'),
  filename: 'index.js',
  libraryTarget: 'umd',
  library: 'greentoolsdesign', // Replace with your library name
  umdNamedDefine: true
};
export const resolve = {
  extensions: ['.ts', '.tsx', '.js', '.jsx']
};
export const module = {
  rules: [
    {
      test: /\.(ts|tsx)$/,
      exclude: /node_modules/,
      use: {
        loader: 'ts-loader'
      }
    }
  ]
};
