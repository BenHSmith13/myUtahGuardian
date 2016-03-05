//Converter Class
//var Converter = require("csvtojson").Converter;
//
//var csvConverter=new Converter({constructResult:false}); // The parameter false will turn off final result construction. It can avoid huge memory consumption while parsing. The trade off is final result will not be populated to end_parsed event.
//
//var readStream=require("fs").createReadStream("./IncomeExpenseTransactionsTableData.csv");
//
//var writeStream=require("fs").createWriteStream("./income_expense.json");
//
//readStream.pipe(csvConverter).pipe(writeStream);


var Converter = require("csvtojson").Converter;

var csvConverter=new Converter({constructResult:false}); // The parameter false will turn off final result construction. It can avoid huge memory consumption while parsing. The trade off is final result will not be populated to end_parsed event.

var readStream=require("fs").createReadStream("./little_data.csv");

var writeStream=require("fs").createWriteStream("./little_data.json");

readStream.pipe(csvConverter).pipe(writeStream);