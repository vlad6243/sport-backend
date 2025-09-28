const path = require('path');
const TerserPlugin = require('terser-webpack-plugin');
const webpack = require('webpack');

module.exports = {
  target: 'node',
  mode: 'production',
  entry: './src/lambda.ts',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'lambda.js',
    libraryTarget: 'commonjs2',
  },
  resolve: {
    extensions: ['.ts', '.js'],
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  externals: ['pg-hstore', 'fastify-swagger', 'aws-sdk'],
  optimization: {
    minimizer: [
      new TerserPlugin({
        terserOptions: {
          keep_classnames: true,
        },
      }),
    ],
  },
  plugins: [
    new webpack.IgnorePlugin({
      checkResource(resource) {
        const lazyImports = [
          '@nestjs/microservices/microservices-module',
          '@nestjs/microservices',
          '@nestjs/websockets/socket-module',
          '@nestjs/websockets',
          '@nestjs/platform-socket.io',
          'class-transformer/storage',
          'pg-native',
          '@fastify/static',
          '@fastify/view',
          'mongodb',
          'mysql2',
          'mysql',
          'better-sqlite3',
          'sqlite3',
          'sql.js',
          'mssql',
          'react-native-sqlite-storage',
          '@google-cloud/spanner',
          '@sap/hana-client',
          '@sap/hana-client/extension/Stream',
          'oracledb',
          'kafkajs',
          'nats',
          'mqtt',
          'ioredis',
          'amqplib',
          'amqp-connection-manager',
          '@grpc/grpc-js',
          '@grpc/proto-loader',
        ];

        if (lazyImports.includes(resource)) {
          try {
            require.resolve(resource);
          } catch (err) {
            return true;
          }
        }
        return false;
      },
    }),
  ],
};