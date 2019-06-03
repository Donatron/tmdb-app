if (process.env.NODE_ENV === "production") {
  module.exports = require("./config_dev.js");
} else {
  module.exports = require("./config_dev.js");
}
