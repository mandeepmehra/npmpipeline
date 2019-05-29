"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.database = void 0;
//'mongodb://database/mean-docker
var username = process.env.MONGODB_USERNAME || "";
var password = process.env.MONGODB_PASSWORD || "";
var host = process.env.MONGODB_HOST || "";
var databasename = process.env.MONGODB_DATABASE || 'meanDB';
var port = process.env.MONGODB_PORT || 27017;
var url = '';

if (username !== '' && password !== '') {
  url = 'mongodb://database/meanDB';
} else {
  url = "mongodb://" + username + ":" + password + "@" + host + "/" + databasename;
}

var database = {
  name: "MongoDB Service",
  url: url
};
exports.database = database;
//# sourceMappingURL=config.js.map