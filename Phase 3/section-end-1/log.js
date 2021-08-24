let readline = require("readline-sync");
let fs = require("fs");
let dateAndTime = require("date-and-time");

let fname = readline.question("Enter your first name: ");
let lname = readline.question("Enter your last name: ");
let gender = readline.question("Enter your gender: ");
let email = readline.questionEMail("Enter your email: ");
let now = new Date();
let timeDate = dateAndTime.format(now, 'YYYY/MM/DD HH:mm:ss');
console.log(`Hello ${fname} ${lname}, you are a ${gender}, your email is ${email}, and you logged in on ${timeDate}`);
let arr = [];
let user = {firstName:fname, lastName: lname, sex: gender, contact: email, timeAndDate: timeDate};

var strOldItems = fs.readFileSync("users.json").toString();
debugger;
if (strOldItems.length === 0){
    arr.push(user);
    let first = JSON.stringify(arr);
    fs.writeFileSync("users.json", first);
}else{
    debugger;
    let parsedOldItem = JSON.parse(strOldItems);
    parsedOldItem.push(user);
    let strUser = JSON.stringify(parsedOldItem);
    fs.writeFileSync("users.json", strUser);
}
