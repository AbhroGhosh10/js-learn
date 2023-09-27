function saymyname() {
    console.log("hello world")
}

// saymyname()

// function addnumber(number1,number2){
//     console.log(number1+number2)
// }
// addnumber("4",2)

function addnumber(number1,number2){
    const result=number1+number2;
    return result;
}

const result=addnumber(4,6);
console.log(result);