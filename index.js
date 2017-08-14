const moment = require("moment");
const chalk = require('chalk');


//seconds math
let second = parseInt(moment().format('s'));
let hoursSeconds = parseInt((moment().format('H') * 60) * 60);
let minutesSeconds = parseInt(moment().format('m') * 60);
let seconds = second + hoursSeconds + minutesSeconds;

let dstCheck = function(){
  let dateDST = moment().isDST();
  if (dateDST) {
    return "is"
  } else {
    return "is not"
  }
};

let leapCheck = function(){
  let dateLeap = moment().isLeapYear();
  if (dateLeap) {
    return "is"
  } else {
    return "is not"
  }
};

console.log("It is " + chalk.cyan(moment().format('dddd, MMMM Do YYYY, h:mm:ss a')) + ".");
console.log("It is the " + chalk.redBright(moment().format('DDDo')) + " day of the year.");
console.log("It is " + chalk.green(seconds) + " seconds into the day.");
console.log("It " + chalk.greenBright(dstCheck()) + " during Daylight Savings Time");
console.log("It " + chalk.red(leapCheck()) + " a leap year.");
