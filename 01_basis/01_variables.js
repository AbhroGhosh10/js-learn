const accountId=12234
let accountEmail="abhro@google.com"
var accountpassword="1234"
// prefer not to use var
// because of issue of block scope and functional scope
let accountState;
accountCity="jaipur"

// accountId=2
console.log(accountId)
console.table([accountId,accountEmail,accountpassword,accountCity,accountState])