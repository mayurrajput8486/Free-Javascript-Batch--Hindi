function addNumber (num1,num2) {
    console.log('num1 - ',num1)
    console.log('num2 - ',num2)
    return console.log(num1 + num2)
}
addNumber(10,20,30,40)

//... - arguments dynamically - rest
//... - copy or clone , merge - spread

function sumNumbers (...b) {
    console.log(...b)
    let total = 0
    for (let num of b){
        total+=num
        //total = total + num
    }
    return total
}
const a1 = sumNumbers(10,20,30,40,50)
console.log('Total - ',a1)

const b1 = a1 / 5
console.log('b1 - ', b1)

//... - rest - dynamically arguments are passed in function (return array)  
//... - spread 

// Why return is imp
function withoutReturn (a,b) {
    console.log(a + b)
}

function withReturn (a,b) {
    return a + b
}

let x = withoutReturn(5,10)
console.log("x - ",x)


let y = withReturn(5,10)
console.log("y - ",y)

let resultX = x + 10
console.log(resultX)

let resultY = y + 10
console.log(resultY)

//Arrow function

const sum = (a,b) => {
    return a + b
}
const sumX = sum(25,35)
console.log(' sumX - ',sumX)

const sumNum = (a,b) => console.log(a + b)

const sumNumY = sumNum(30,70)
console.log(' sumNumY - ',sumNumY)


const addNum = (num1, num2) =>{
    return num1 + num2
}
const result1 = addNum (25,35)


//spread operator
const arr1 = [0,10, 20, 30, 40, 50,60]
console.log(arr1)

const arr2 = [70,80,90,100]
console.log(arr2)

// Spread Operator - Merge
const arr3 = [...arr1, ...arr2]
console.log(arr3)

// Spread Operator - Copy
const arr4 = [...arr1]
console.log(arr4)

const user = {
    name : "Virat",
    age : 35
}

const job = {
    id : 101,
    role : "MERN Stack",
    salary : 85000
}

const emp = {...user, ...job}
console.log(emp)

const digits1 = [1,2,3,4,5]
const digits2 = [6,7,8]
const digits3 = [9,10]

const numbers = [...digits1,...digits2,...digits3]
console.log(numbers)