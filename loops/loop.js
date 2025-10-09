console.warn(`------------- Loops in JavaScript --------------`)

document.write("<h3>Loops in JavaScript</h3>")
// variable declared   let count = 1
// condition check    50 <= 50
// increment --- count++  --> count = count + 1
// block of code executed 

// for (variable declaration;condition;inc++/dec--) {  block  of code      }

for(let count = 1; count <= 10;count++ ){
    document.write(`${count} : Learning JavaScript is Fun !!! <br>`)
}

//Print number 1 to 5
for(let count = 1; count <= 5; count++){
    document.write(`${count} <br>`)
}

//print 5 to 1
for(let count = 5; count >= 1; count--){
    document.write(`${count} <br>`)
}

//for loop and forEach()
const nums = [1,2,3,4,5]
//            0 1 2 3 4 
console.log('total number of item : ',nums.length)

for(let item = 0; item < nums.length; item++){
    console.log(`${item} : ${nums[item]}`)
}

/* nums.forEach((num)=>{
    console.log(num)
}) */
//forEach, map()

console.warn(`----------- while loop-----------`)

let a1 = 1             //variable declared
while(a1 <= 5){       // condition check
    console.log(a1);  // code execute
    a1++              // increment/decrement
}