const path = require('path');
const webpack = require('webpack');
const env = require('dotenv').config({ path: path.resolve(__dirname, './.env') }).parsed;
const ESLintPlugin = require('eslint-webpack-plugin');
const FriendlyErrorsWebpackPlugin = require('@soda/friendly-errors-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');

const options = {
  mode: 'development',
  devtool: 'eval',
  target: 'web',
  entry: './src',
  stats: false,
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  devServer: {
    host: env.APP_HOST,
    port: env.APP_PORT,
    historyApiFallback: true,
    hot: true,
    client: {
      overlay: { errors: false, runtimeErrors: false, warnings: false },
      progress: false,
    },
    proxy: {
      '/api': {
        target: env.API_URL,
        changeOrigin: true,
      },
    },
  },
  plugins: [
    new ESLintPlugin({
      extensions: ['js', 'jsx'],
      exclude: [path.resolve(__dirname, 'node_modules'), path.resolve(__dirname, 'public')],
    }),
    new HtmlWebpackPlugin({
      template: './public/index.html',
    }),
    new FriendlyErrorsWebpackPlugin({
      clearConsole: true,
    }),
    new webpack.HotModuleReplacementPlugin(),
    new ReactRefreshWebpackPlugin({ overlay: false }),
  ],
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: [
                '@babel/preset-env',
                [
                  '@babel/preset-react',
                  {
                    runtime: 'automatic',
                  },
                ],
                {
                  plugins: [
                    '@babel/plugin-proposal-class-properties',
                    '@babel/plugin-syntax-dynamic-import',
                    '@babel/plugin-proposal-optional-chaining',
                    '@babel/plugin-proposal-nullish-coalescing-operator',
                    '@babel/plugin-proposal-export-default-from',
                    require.resolve('react-refresh/babel'),
                  ].filter(Boolean),
                },
              ],
            },
          },
        ],
      },
      {
        test: /\.html$/,
        use: {
          loader: 'html-loader',
          options: { minimize: true },
        },
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.scss$/,
        exclude: /node_modules/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
      {
        test: /\.(eot|woff|woff2|ttf|svg|png|jpe?g|gif)(\?\S*)?$/,
        use: 'url-loader?limit=100000&name=[name].[ext]',
      },
    ],
  },
};

module.exports = options;
