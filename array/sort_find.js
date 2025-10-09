const users = ["Virat","Rohit","Rishabh","Surya",]
//Hello Virat, Hello Rohit, Hello Rishabh...
const greetUsers = users.map((user)=>{
    return `Hello ${user}`
})

console.log(greetUsers)

//to iterate an array - forEach()
greetUsers.forEach((user)=>{
    console.log(user)
})

const students = [
    {name : "Virat", mark : 80},
    {name : "Rohit", mark : 65},
    {name : "Hardik", mark : 40},
    {name : "Krunal", mark : 38}
]
// I want to print passed student which will get equal and above 40 marks
const passedStu = students.filter((stu)=>{
    return stu.mark >= 40
})
console.log(passedStu)

console.warn(`----------- sort () --------- `)
const numbers = [7,4,8,0,1,9,2,6,5,3]
console.log(numbers)
//sort in ascending order - 0,1,2,3,4,5,6,7,8,9
//By default sort () method sort array in ascending order
numbers.sort()
console.log(numbers)
numbers.reverse()
console.log(numbers)

const alpha = ["d","b","e","a","c","f"]
console.log(alpha)
alpha.sort()
console.log(alpha)
alpha.reverse()
console.log(alpha)

console.warn(`------ sort() method with compare function`)
const num1 = [9,10,7,60,8,100]
console.log(num1)

//sort array in ascending order - x - y
num1.sort((x,y)=>{
    return x - y
})
console.log(num1)
/* 
    lowest number - x = 7
    7   -   9   =   -2
    7   -   10  =   -3
    7   -   7   =   0
    7   -   60  =   -53
    7   -   8   =   -1
    7   -   100 =   -93

    //  0   1   2   3   53  93
    //  7   8   9   10  60  100 

*/

/* 
if(a < b) then a - b is negative    --- a comes before b 
if (a === b) then a - b = 0         --- no change 
if (a > b) then a - b is positive   --- b comes before a
*/

//sort array in descedning order
num1.sort((x,y)=>{
    return y - x
})
console.log(num1)
/* 
if (b < a) then b - a = negative    --- b comes before a -- higher number print first
if (b === a ) then b - a = 0        --- no change
if (b > a) then b - a = positive    --- a comes before b 

*/
/* 
    100 -   9   = 91
    100 -   10  = 90
    100 -   7   = 93
    100 -   60  = 40
    100 -   8   = 92
    100 -   100 =   0

    sub_result  =   0   40  90  91  92  93
    arr_element =   100 60  10  9   8   7

*/

const movies = ["KGF","Avengers","Pushpa","Bahubali","Ironman","Hulk"]
console.log(movies)

movies.sort()
console.log(movies)

//print descending array
movies.sort((y,x)=>{
    //return y.localeCompare(x) //asce
    return x.localeCompare(y)
})
console.log(movies)

const products = [
    {pname : "mobile", model : "samsung A17", price : 35000},
    {pname : "mobile", model : "samsung M13", price : 15000},
    {pname : "mobile", model : "samsung S22", price : 45000},
    {pname : "mobile", model : "samsung S24", price : 55000},
    {pname : "mobile", model : "samsung A13", price : 10000},
    {pname : "mobile", model : "samsung S25", price : 65000},
    {pname : "mobile", model : "samsung Guru", price : 3000}
]
console.log(products)
//Low to High --- asc
products.sort((a,b)=>{
    return a.price - b.price
})
console.log(products)

//high to low
products.sort((a,b)=>{
    return b.price - a.price
})
console.log(products)


