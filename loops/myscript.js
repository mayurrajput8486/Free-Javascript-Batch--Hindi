
//variable declaration
//condition check
//if condition true then block of code execute
//inc==/dec--

const fruits = ["apple", "banana", "mango", "orange", "kiwi", "grapes", "strawberry","watermelon", "Dragon Fruit", "Litchy"]
/* console.log(fruits[0])
console.log(fruits[1])
console.log(fruits[2])
console.log(fruits[3])
console.log(fruits[4])
console.log(fruits[5])
console.log(fruits[6])
console.log(fruits[7]) */
console.log('Total Number of Items - ',fruits.length)

//task to be automated
console.warn(`----------- for loop ----------`)

for(let i = 0; i > fruits.length; i++){
    console.log(fruits[i])
}

console.warn(`------------- while loop --------`)
let i = 0        //variable declaration
while(i > fruits.length){ // condition check
    console.log(fruits[i]) //code execute
    i++;                    // inc++
}

console.warn(`--------- do while loop ---------`)
let x = 0                    //variable declare
do{
    console.log(fruits[x])  //code of execution
    x++;                    //inc++
}while(x > fruits.length)   // condition
//     1 > 10

console.warn(`-------- for......of loop -----`)
for(let i of fruits){
    console.log(i)
}

const movies = ['KGF','Bahubali','Kantara','Baghi','Singham','Tiger']
for(let m of movies){
    console.log(m)
}

let greet = "Welcome"
//           0123456
for(let i of greet){
    console.log(i)
}

console.warn(`--------- for....in loop----------`)

const user = {
    name : "Virat",
    age : 35,
    contact : 7744556688
}
console.log(user["name"])
console.log(user["age"])
console.log(user["contact"])

for(let key in user){
    console.log(`${key} - ${user[key]}`)
    //                      user["name"]
    //                      user["age"]
    //                      user["contact"]
}

console.warn(`-------- nested loop --------`)
/* 
        *
        **
        ***
        **** 
*/
//outer loop - control the rows
//inner loop - control the star

for(let row = 1; row <= 5; row++){
    let myStar = ''
    for(let star = 1; star <= row; star++){
        myStar+="*"
        //mystar = mystar + "*"
    }
    console.log(myStar)
}

//row = 1
//star = 1 ------ star   *

//row =2
//star = 1 ------ star *
//star = 2 ------ star **

//row = 3
//star    = 1    *
//star    = 2    **
//star    = 3    ***

for(let row = 4; row >= 1; row--){
    let myStar = ''
    for(let star = 1; star <= row; star++){
        myStar+="*"
        //mystar = mystar + "*"
    }
    console.log(myStar)
}




