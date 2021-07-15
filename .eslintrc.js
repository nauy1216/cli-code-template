const config = require("./src/config/eslint-config.js");
module.exports = Object.assign(config, {
  env: {
    node: true
  }
});
