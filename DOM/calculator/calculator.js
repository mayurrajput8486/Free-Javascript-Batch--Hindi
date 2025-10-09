const show = (num) =>{
    document.querySelector('#result').value += num
}

const clearScreen = () =>{
    document.querySelector('#result').value = ''
}

const solveExpression = () =>{
    const myExpression = document.querySelector('#result').value
    document.querySelector('#result').value = eval(myExpression)
}

const clearLastEntry = () =>{
    const myExpression = document.querySelector('#result').value

    document.querySelector('#result').value = myExpression.slice(0,-1)
}

//slice (startIndexNum, endIndexNum) - 
//startIndexNum - include
//endIndexNum - exclude (previous index value use)
let str1 = "Welcome"
//          0123456
console.log(str1)
let result = str1.slice(0,3)
let result1 = str1.slice(3,7)
let result2 = str1.slice(0,0)
console.log(result)
console.log(result1)
console.log(result2)
