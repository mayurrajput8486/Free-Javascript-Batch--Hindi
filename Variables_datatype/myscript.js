console.log('Welcome to JavaScript')

console.warn(`------------ number -----------`)
let num1 = 20.25698
console.log(num1)
//Template Literal - backtick
console.log(`the value of num1 = ${num1} and its datatype is ${typeof num1}`)
//string concatination method
console.log('The value of num1 = '+ num1 +' and its dataype is '+ typeof num1 )


console.warn(`------------ String -----------`)

let str1 = 'Welcome'
console.log(`the value str1 = ${str1} and its datatype is ${typeof str1}`)

const str2 = '';
console.log(`The value of str2 = ${str2} - ${typeof str2}`)

const str3 = '2512'
console.log(`value of str3 = ${str3} - ${typeof str3}`)
console.log(`value of str3 = ${str3} - ${typeof parseInt(str3)}`)


/* How to use parseInt() */
//const a1 = prompt('Enter First Number')
//const a2 = prompt('Enter Second Number')

/* const b1 = parseInt(a1)
const b2 = parseInt(a2) */

//const sum = parseInt(a1) + parseInt(a2)
//console.log(sum)

console.log('<h1>Learn Datatypes</h1>')

console.warn(`-------- boolean -------------`)

/* $ or _*/
const isactive = true
console.log(`the person is available - ${isactive} - ${typeof isactive}`)

console.warn(`---------- undefined ---------`)

console.log(x1)
var x1;
console.log(`value of x1 = ${x1} - ${typeof x1}`)

let x2;
console.log(`value of x2 = ${x2} - ${typeof x2}`)

const x3 = undefined;
console.log(`value of x3 = ${x3} - ${typeof x3}`)

console.warn(`---------- null --------`)
const y1 = null;
console.log(`value of y1 = ${y1} - ${typeof y1}`)

console.warn(`--------- bigint - ES2020-------------`)
// by using "n" in the suffix

let bigInt1 = 123456789123456789n
console.log(`value of bigInt1 = ${bigInt1} - ${typeof bigInt1}`)

//by using bigInt ()
let bigInt2 = BigInt(123456789563214563324566)
console.log(`value of bigInt2 = ${bigInt2} - ${typeof bigInt2}`)


console.warn(`----------- symbol ----------`)

const id = Symbol("userID")

let user = {
    [id] : 101,
    name : "Virat",
    contact : 7744556633,
    email : "virat@gmail.com"
}

console.log(id)
console.log(typeof id)
console.log(user[id])





