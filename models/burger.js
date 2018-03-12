// Import the ORM to create functions that will interact with the database.
var orm = require("../config/orm.js");

// create the burger variable that will be exported back to the controller
var burger = {
  // selectAll for getting all the burgers
  selectAll: function(cb) {
    orm.selectAll("burgers", function(res) {
      cb(res);
    });
  },
  // insertOne for adding a new burger
  // The variables cols and vals are arrays.
  insertOne: function(cols, vals, cb) {
    orm.insertOne("burgers", cols, vals, function(res) {
      cb(res);
    });
  },
  // updateOne for changing the burger status
  updateOne: function(objColVals, condition, cb) {
    orm.updateOne("burgers", objColVals, condition, function(res) {
      cb(res);
    });
  }
};

// Export the database functions for the controller (burger.js).
module.exports = burger;
