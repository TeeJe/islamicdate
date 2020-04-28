//var myModule = require('./JKT-PrayTimes.js');
var myModule = require('./islamicdate.js');
//module.exports = myModule();
//console.log(require);
//console.log();
// var mymodule = new myModule();
//addmore

//end addmore

var myDate = myModule.getIslamicDate();
var myDatePart = myModule.getIslamicDateParts();
console.log(myDate);
//console.log(myDatePart);
