import type { AWS } from '@serverless/typescript';

const serverlessConfiguration: AWS = {
  service: 'test-serverless',
  frameworkVersion: '2',
  custom: {
    webpack: {
      webpackConfig: './webpack.config.js',
      includeModules: true,
    },
  },
  package: {
    individually: true,
  },
  plugins: ['serverless-webpack'],
  provider: {
    name: 'aws',
    runtime: 'nodejs14.x',
    apiGateway: {
      minimumCompressionSize: 1024,
      shouldStartNameWithService: true,
    },
    environment: {
      AWS_NODEJS_CONNECTION_REUSE_ENABLED: '1',
    },
    lambdaHashingVersion: '20201221',
  },
  // import the function via paths
  functions: { 
    withoutExpress: {
      handler: `src/withoutExpressHandler.handler`,
    },
    express: {
      handler: `src/expressHandler.handler`,
    }
  },
};

module.exports = serverlessConfiguration;
