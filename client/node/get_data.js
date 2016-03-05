var sql = require('mssql');
var parseData = require('./parse_data.js');

console.log("I Print");

var config = {
  user: 'reader',
  password: 'password',
  server: 'conservatordb.c2d9u4iyrnxx.us-east-1.rds.amazonaws.com', // You can use 'localhost\\instance' to connect to named instance
  database: 'conservatordb',

  //options: {
  //  encrypt: true // Use this if you're on Windows Azure
  //}
};

sql.connect(config).then(function() {
  // Query
console.log('connected');
  new sql.Request().query('select top 100 * from IncomeExpenseTransactions').then(function(recordset) {
    console.log(recordset);
    parseData.parser(recordset);
  }).catch(function(err) {
    // ... query error checks
    console.log('ERROR: ', err);
  });



  // Stored Procedure

  new sql.Request()
    .input('input_parameter', sql.Int, value)
    .output('output_parameter', sql.VarChar(50))
    .execute('procedure_name').then(function(recordsets) {
    console.dir(recordsets);
  }).catch(function(err) {
    // ... execute error checks
  });
}).catch(function(err) {
  // ... connect error checks
  console.log("Err2", err);
});