const accountId = 144553
let accounrEmail = "hitesh@google.com"
var accountPassword = "12345"
accountCity = "Jaipur"
let accountState;

// accountId = 2 not allowed

/* 

prefer not to use var because of issue in block scope and 
functional scope

*/

console.log(accountId);
console.table([accountId, accounrEmail, accountPassword, accountCity])

console.log(accountState);

