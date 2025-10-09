console.warn(`------------ Task 1 ---------`)
// Iterate the product list
const prodList = ["Mobile", "Television", "Fridge", "AC","Play Station", "Laptop"]
//                    0          1           2       3         4          5
console.log(prodList)

//for....of loop ---- access values
for(let product of prodList){
    console.log(product)
}

//for(){}    ----- access indexValue
for(let product = 0; product < prodList.length; product++){
    //                   0   <  6    true
    //                   1   <  6    true
    //                   2   <  6    true
    //                   6   <  6    false
    //console.log(product)
    console.log(prodList[product])
    //            array[indexValue]
}

console.warn(`--------- Task 2 ---------`)
// Search user name
const users = ["Virat", "Rohit", "MSD", "Surya", "Jaspreet", "Yuvraj", "Gautam", "Sachin"]

let searchName = "Rohit"
let found = false

for(let u = 0; u < users.length; u++){
    if(users[u] === searchName){
        found = true;
        console.log(`${searchName} login Successfully....`)
        break;
    }
}
if(!found){
    console.log(`${searchName} first sign up to login`)
}

console.warn(`------------- Task 3 ------------`)
//Array of Object
const cartItem = [
    {veg : "Noodles", amount : 150},   //0
    {nonVeg : "Biryaani", amount : 300}, //1
    {dessert : "Waffle", amount : 255}, //2
]
let totalAmount = 0
for(let item = 0; item < cartItem.length; item++){
    totalAmount += cartItem[item].amount
    //cartItem[item]   --- hold the entire object 
    //totalAmount = 0 + 150
    //            = 150 + 300
    //            = 450 + 250
    //            = 700 + 100 = 800
}

let taxes = totalAmount + (18/100)* totalAmount

console.log(`Your cart Value after taxes- Rs. ${taxes} `)


console.warn(`------------- task 4 (square pattern) -----------`)
/* 
    *****
    *****
    *****
    *****
*/
//outer loop - for row
//inner loop - for star
for(let row = 0; row <= 4; row++){
    let rowHoldStar = ""
    for(let star = 0; star <= 4; star++){
        rowHoldStar+= "*"
    }
    document.write(`${rowHoldStar}<br>`)

}

for(let row = 0; row <= 4; row++){
    let rowHoldStar = ""
    for(let star = 0; star <= row; star++){
        rowHoldStar+= "*"
    }
    document.write(`${rowHoldStar}<br>`)

}





