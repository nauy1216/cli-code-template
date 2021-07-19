const config = require("./src/eslint-config.js");
module.exports = Object.assign(config, {
  env: {
    node: true
  }
});
