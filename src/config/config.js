const mongoose = require("mongoose");
require("dotenv").config();

const config = {
  database: {
    url: process.env.MONGODB_URI,
  },
  server: {
    port: process.env.PORT || 3000,
  },
};

module.exports = config;
