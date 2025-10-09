/* console.warn(`------ Arithmetic Operators ---------`)

let num1 = 10
let num2 = 3

//String value convert into number -- parseInt()
//const add = parseInt(num1) + parseInt(num2)
const add = num1 + num2
const sub = num1 - num2
const multiply = num1 * num2
const divison = num1 / num2
const modulus = num1 % num2
const exponen = num1 ** num2
num1++    // num1 = num1 + 1
num2--     // num2 = num2 - 1


console.log(`Addition - ${num1} + ${num2} = ${add}`)
console.log(`Subtraction - ${num1} - ${num2} = ${sub}`) 
console.log(`Multiplication - ${num1} * ${num2} = ${multiply}`)
console.log(`Division - ${num1} / ${num2} = ${divison}`)
console.log(`Modulus - ${num1} % ${num2} = ${modulus}`)
console.log(`Exponentiation - ${num1} ** ${num2} = ${exponen}`)
console.log(`Increment - ${num1}`)
console.log(`Decrement - ${num2}`)

 */

/* console.warn(`-------- Comparison Operator ----------------`)

console.warn(`-------- equal to == Operator ----------------`)

let x1 = 50
//let x2 = 50     //number
let x2 = '50'     // string

let result1 = x1 == x2
console.log(`Equal to  == : ${x1} == ${x2} - ${result1} - Only Check Value`)

let username = "Virat Kohli"
let userInput = "Virat Kohli"

let loginHandler = userInput == username
console.log(`Username is Correct - ${loginHandler}`)

console.warn(`-------- strict equal to === Operator ----------------`)

let y1 = 50
let y2 = 50
let result2 = y1 === y2
console.log(`Strict Equal to === : ${y1} === ${y2} - ${result2} - Check value as well as Datatypes`)

console.warn(`-------- greater than Operator ----------------`)

let z1 = 20
let z2 = 5
let result3 = z1 > z2
console.log(`greater than > : ${z1} > ${z2} -- ${result3}`)

console.warn(`-------- greater than or equal to Operator ----------------`)

let a1 = 20
let a2 = '20'
let result4 = a1 >= a2   // 20 > 20
//            20 > 20     -   false
//            20 == 20    -   true
//            false OR true  - true
console.log(`greater than >= : ${a1} >= ${a2} -- ${result4}`)

console.warn(`-------- less than Operator ----------------`)
let b1 = 20
let b2 = 20
let result5 = b1 < b2 // 20 < 30
console.log(`less than < : ${b1} < ${b2} = ${result5}`)

console.warn(`-------- less than or equal Operator ----------------`)
let c1 = 20
let c2 = 20
let result6 = b1 <= b2 // 20 < 30
console.log(`less than or equal to <= : ${b1} <= ${b2} = ${result6}`)

console.warn(`---------- not equal to and strict not equal to operator -----`)
let d1 = 50
let d2 = '50'
let result7 = d1 != d2 // check only value
let result8 = d1 !== d2 // check value as well as datatypes
console.log(result7) 
console.log(result8) */


console.warn(`--------- Logical Operator --------`)
console.warn(`--------- AND && Operator ------`)
let result1 = true && true   
let result2 = true && false
let result3 = false && true
let result4 = false && false
console.log(`true && true -   ${result1}`)
console.log(`true && false -  ${result2}`)
console.log(`false && true -  ${result3}`)
console.log(`false && false - ${result4}`)

let x1 = 20 >=20 && 20 == 20 
//          true  &&   true   --- true
console.log(` 20 >=20 && 20 == 20 ---> ${x1}`)

let x2 = 20 >='20' && 20 == '20'
console.log(`20 >='20' && 20 == '20' - ${x2}`)

let x3 = 20 >='20' && 20 === '20'
//         true    &&    false  --->  false
console.log(`20 >='20' && 20 === '20' - ${x3}`)

console.warn(`--------- OR || Operator ------`)
let result5 = true  || true   
let result6 = true  || false
let result7 = false || true
let result8 = false || false
console.log(`true || true -   ${result5}`)
console.log(`true || false -  ${result6}`)
console.log(`false || true -  ${result7}`)
console.log(`false || false - ${result8}`)


let x4 = 20 >='20' || 20 === '20' 
//         true    ||     false   ---> true
console.log(` 20 >='20' || 20 === '20' --> ${x4}`)
console.warn(`--------- NOT ! Operator ------`)
let result9 = true
let result10 = false 
console.log(!(result9))
console.log(!(result10))
console.log(!x4)

