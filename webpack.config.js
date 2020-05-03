const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: './src/index.tsx',
  module: {
    rules: [
      {
        test: /\.tsx/,
        exclude: /node_modules/,
        use: [{
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
            plugins: ["@babel/plugin-transform-runtime","@babel/plugin-proposal-class-properties"]
            }
            }, {
              loader: 'ts-loader',
              options: {
                compilerOptions: {
                  module: 'esNext', // for Tree-shaking
                  // sourceMap: isDev,
                },
              },
            }]
          },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      }
    ]
    // rules: [
    //   {
    //     test: /\.tsx/,
    //     use: [
    //       {
    //         loader: 'babel-loader',
    //         options: {
    //           presets: ['@babel/preset-env', '@babel/preset-react'],
    //           // babelrc: false,
    //           plugins: ['react-hot-loader/babel'],
    //         },
    //       },
    //       {
    //         loader: 'ts-loader',
    //         options: {
    //           compilerOptions: {
    //             module: 'esNext', // for Tree-shaking
    //             // sourceMap: isDev,
    //           },
    //         },
    //       },
    //     ],
    //   },
    //   {
    //     test: /\.(css|scss)$/,
    //     use: [
    //       {
    //         loader: 'css-loader',
    //         options: {

    //           importLoaders: 2, // 在css-loader前应用的loader数量
    //         }
    //       },

    //     ]
    //   },
    // ]
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js']
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Hot Module Replacement',
      template: './index.html'
    }),
  ],
  devServer: {
    contentBase: './dist',
    hot: true
  },
};