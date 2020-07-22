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
      // {
      //   test: /\.css$/i,
      //   use: ['style-loader', 'css-loader'],
      // }
      { 
        test: /\.scss$/,
        use:[
          'style-loader',
          // {
          //   loader: "@teamsupercell/typings-for-css-modules-loader",
          //   options: {
          //     disableLocalsExport: false,
          //     eol: "\r\n"
          //   }
          // },
          // '@teamsupercell/typings-for-css-modules-loader',
          {
            loader: "css-loader",
            // options: { modules: true }
          },
          {
            loader:'postcss-loader',  
            options: {
              ident: 'postcss',
              plugins: [
                require('autoprefixer'),
                require('postcss-modules')({
                  generateScopedName: "[name]__[local]___[hash:base64:5]",
                })
              ],
            },
          },
          'sass-loader',
        ]
      },


      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      }
    ]

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