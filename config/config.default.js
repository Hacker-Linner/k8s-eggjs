/* eslint valid-jsdoc: "off" */

'use strict';

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = exports = {};

  config.security = {
    csrf: {
        enable: false
    },
  };

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1606048787722_451';

  // add your middleware config here
  config.middleware = [];

  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
  };
  
  config.exporter = {
    scrapePort: 7777,
    scrapePath: '/metrics',
    prefix: 'k8seggjs_',
    defaultLabels: { stage: process.env.NODE_ENV },
  };

  config.logger = {
    disableConsoleAfterReady: false,
  };

  return {
    ...config,
    ...userConfig,
  };
};
