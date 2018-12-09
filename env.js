import { Constants } from 'expo';

const ENV = {
  dev: {
    apiUrl: 'https://newsapi.org/v2',
  },
  test: {
    apiUrl: 'https://newsapi.org/v2',
  },
  staging: {
    apiUrl: 'https://newsapi.org/v2',
  },
  prod: {
    apiUrl: 'https://newsapi.org/v2',
  },
};

function getEnvVars(env = '') {
  if (env === null || env === undefined || env === '') return ENV.dev;
  if (env.indexOf('dev') !== -1) return ENV.dev;
  if (env.indexOf('test') !== -1) return ENV.test;
  if (env.indexOf('staging') !== -1) return ENV.staging;
  if (env.indexOf('prod') !== -1) return ENV.prod;
  return null;
}

export default getEnvVars(Constants.manifest.releaseChannel);
