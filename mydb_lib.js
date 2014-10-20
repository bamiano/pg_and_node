"use strict"
// pg is a node module that allows node apps to communicate with post gres servers. 
var pg = require('pg');

// this is a constructor function for a database. the first parameter is the name of the database. the second is the port that we connect to. 
function DB(database, port, host) {
  this.config = {
    database: database,
    port: port,
    host: host
  };
}

//DB.protptype is a method that refers to any instance of the DB class. 

DB.prototype.connect = function(callback){
  pg.connect(this.config, function(err, client, done){
    console.log(client);
      if (err) {
           console.error("OOOPS!!! SOMETHING WENT WRONG!", err);
      }
      // if there is a successfull connection, we're going to pass in the (client information)
      callback(client);
      // done means you're done with the pg function
      done();
  });
};
// 
// First thing i do is connect (function defined above). once i'm connected, i bring in the "client" object.
// I then call the query method on the client ovject (client.query)
// That function takes in three parameters
// this is a method attached to the DB prototype
// A statement is a string from SQL
DB.prototype.query = function(statement, params, anotherCallback){
  this.connect(function(client){
    client.query(statement, params, anotherCallback);
  });
};

DB.prototype.end = function(){
 pg.end();
};

module.exports = DB;