console.warn(`-------- if statement --------`)
//Boolean Values - true, false

if(true){
    console.log(`I am true`)
}else{
    console.log('I am false')
}

//Check the number is positive
// positive --- number is greater than 0
// negative --- number is less than 0

let num1 = 9

if(num1 >= 0){
    console.log(`${num1} is Positive`)
}else{
    console.log(`${num1} is negative`)
}

//if block
// else if block

if(num1 > 0 ){
    console.log(`${num1} is positive`)
}else if(num1 === 0){
    console.log(`${num1} is Zero`)
}else{
    console.log(`${num1} is negative`)
}

//Number is even or odd
// even ---> rem == 0  
// odd  ---> rem != 0
// Modulus Operator  return rem %

let num2 = 11
if(num2 % 2 === 0){
    console.log(`${num2} is Even Number`)
}else {
    console.log(`${num2} is Odd Number`)
}

//Check username and password

const username = "ADMIN"
const password = "ADMIN@111"

if(username === "ADMIN" && password === "ADMIN@111"){
    console.log('Welcome Admin, Your Login Successfull !!!')
}else{
    alert('Wrong Username or Password')
}

//Signal System
    // red - stop
    // green - go
    // orange - please wait for few sec
    // Please enter valid color - red, green, orange

let color = 'blue'

if(color === 'red'){
    console.log('Please STOP')
}else if (color === 'green'){
    console.log('Please GO')
}else if(color === 'orange'){
    console.log('Please wait for few seconds')
}else{
    console.log('Please enter valid color - red, green, orange')
}

console.warn(`------------- Ternary Operator ? ------`)
//ternary Operator is a shortest way to write if else statement

//   condition ? true : false

true ? console.log('I am true') : console.log('I am false')

//check number even or odd
let num = 15

    num % 2 === 0 ? console.log(`${num} is even`) : console.log(`${num} is odd`)
//     condition  ?              true             :          false

console.warn(`-------- signal system ------------`)
//Signal System
    // red - stop
    // green - go
    // orange - please wait for few sec
    // Please enter valid color - red, green, orange


// condition ?  true : condition ? true : condition ? true : false
let light = 'blue'

light === 'red' ? console.log('STOP') : light === 'green'  ? console.log('GO') : light === 'orange' ? console.log('Please Wait') : console.log('Please enter valid color')

