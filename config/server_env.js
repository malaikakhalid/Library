const serverConfig = {};

serverConfig.development = {
  //This is for development purpose
  domain_url: process.env.development || "http://localhost:8000",
  domain_address: process.env.development || "0.0.0.0",
  domain_port: process.env.development || "2000",
  database: process.env.development || "mongodb://127.0.0.1:27017/LIBRARY",
};

module.exports = serverConfig;

require("../model/book");
