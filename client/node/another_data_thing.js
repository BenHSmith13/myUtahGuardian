"use strict";
var _    = require("lodash");
var data = require("./processed_data.json");


var people = {};
var ids = [];

_.each(data, function(d){
debugger;
  if(_.contains(ids, d.CaseFileReportId)){
    d.child = true;
    if(people[d.CaseFileReportId].children){
      people[d.CaseFileReportId].children.push(d)
    } else {
      people[d.CaseFileReportId].children = [d]
    }
  } else {
    people[d.CaseFileReportId] = [d];
    ids.push(d.CaseFileReportId);
  }
  //console.log(ids)

});

var fs = require('fs');
fs.writeFile("./processed_data4.jsx", JSON.stringify(people), function(err) {
  if(err) {
    return console.log(err);
  }

  console.log("The file was saved!");
});