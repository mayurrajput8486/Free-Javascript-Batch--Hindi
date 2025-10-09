console.warn(`----------- map () -------------`)

const num1 = [1,2,3,4,5,6,7,8,9,10]
console.log(num1)
//result - [1,4,9,16,25,36,49,64,81,100]
//map () method return new array
//for new array we have to declared one variable
const sq1 = num1.map(function (num){
    return num * num
})
console.log(sq1)

let num2 = [10,20,30,40,50]
// [1,2,3,4,5]
console.log(num2)
const result1 = num2.map((num)=>{
    return num / 10
})
console.log(result1)
/* ----------------------------------------------------------------------------------------- */
const users = [
    {id : 101, name : "Virat Kohli", city : "Delhi"},
    {id : 102, name : "Rohit Sharma", city : "Mumbai"},
    {id : 103, name : "Rishabh Pant", city : "Delhi"},
    {id : 104, name : "Hanrdik Pandya", city : "Mumbai"}
]

const userName = users.map((user)=>{
    return user.name
})
console.log(userName)

const userCity = users.map((user)=>{
    return user.city
})
console.log(userCity)


/* ------------------------------------------------------------------------------------- */
const orderDate = ["2025-09-01", "2025-09-02","2025-08-31"]
// 
const dateFormat = orderDate.map((abc)=>{
    return new Date(abc).toDateString()
})
console.log(dateFormat)


/* const today = new Date()
const currentdate = new Date().toDateString()
const localDate = new Date().toLocaleDateString()
const LocalcurrentTime = new Date().toLocaleTimeString()
const currentTime = new Date().toTimeString()
console.log(today)
console.log(currentdate)
console.log(localDate)
console.log(LocalcurrentTime)
console.log(currentTime) */
/* const a1 = new Date("2025-09-01").toDateString()
console.log(a1) */


/* ------------------------------------------------------------------------------------------- */

//Add new Property in array of object
const products = [
    {pid : 10101, pname : "Laptop", price : 50000},
    {pid : 10102, pname : "ac", price : 30000},
    {pid : 10103, pname : "tv", price : 40000},
    {pid : 10104, pname : "mobile", price : 20000}
]
//ptax : 
const withTaxProducts = products.map((product)=>{
    return product.price + product.price*0.18
})
console.log(withTaxProducts)

const updateProductsPrice = products.map((product)=>({
    ...product,
    priceWithTax : product.price*1.18
}))
console.log(updateProductsPrice)

console.warn(`---------- filter Method -----------`)
const num3 = [1,2,3,4,5,6,7,8,9,10]
console.log(num3)

const evenArray = num3.filter((num)=>{
    return num % 2 === 0
})
console.log(evenArray)

const oddArray = num3.filter((num)=>{
    return num % 2 !== 0
})
console.log(oddArray)

const ages = [20,34,14,19,17,18,33,25,8,2,50]
console.log(ages)

const eligibleAge = ages.filter((age)=>{
    return age >= 18
})
console.log(eligibleAge)

const myStore = [
    {pid : 10101, pname : "Laptop", price : 50000, inStock : true},
    {pid : 10102, pname : "ac", price : 30000, inStock : false},
    {pid : 10103, pname : "tv", price : 40000, inStock : true},
    {pid : 10104, pname : "mobile", price : 20000, inStock : true}
]

//Out of stock
const outOfStock = myStore.filter((product)=>{
    //return product.inStock //inStock
    //return product.inStock == false
    return !product.inStock
})
console.log(outOfStock)
//! - logical Not 
let a = true
console.log(!a)
