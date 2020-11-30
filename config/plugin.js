'use strict';

/** @type Egg.EggPlugin */
module.exports = {
  // had enabled by egg
  static: {
    enable: true,
  },
  exporter: {
    enable: true,
    package: 'egg-exporter'
  }
};
