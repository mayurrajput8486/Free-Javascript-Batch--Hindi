console.warn(`------- Spread Operator ... -----`);
const arr1 = [1,2,3]
const arr2 = [4,5]
const array12 = [...arr1,...arr2]
console.log(array12);

const empInfo = {
    name : 'Virat Kohli',
    age : 36,
    role : 'MERN Stack Dev'
}

const empContact = {
    email : 'virat@gmail.com',
    tel : 7766778899
}

const empDetails = {...empInfo,...empContact}
console.log(empDetails);

console.warn(`--------- Deep and Shallow Copy --------`)

const product1 = {
    pname : 'Mobile',
    price : 55000
}
console.log('before - ',product1);

//actual reference copy
const product2 = product1
product2.price = 39999

console.log('product2 after -',product2);
console.log('product1 after -',product1);

//when i update the price of product2 then it automatically reflect in product1 price, it is not correct way to copy and object

console.warn(`------ shallow Copy using spread operator------`);
const myproduct1 = {
    pname : 'Mobile',
    price : 55000
}
console.log('before myproduct1 - ',myproduct1);

const discountProd = {...myproduct1}

discountProd.price = 39999

console.log('discountProd -',discountProd);

console.log('myproduct1 - ',myproduct1);

console.warn(`-----nested Object ---------`);

const myProd1 = {
    pname : 'Mobile',
    price : 55000,
    store : {
        street : 'Karve Nagar, Pune',
        pincode : 411052
    }
}

console.log('before',myProd1);

//const myProd2 = myProd1
const myProd2 = {...myProd1}
myProd2.price = 25000
myProd2.store.street = 'Nal Stop'

console.log('myProd2',myProd2);
console.log('myProd1',myProd1);

//In above example I am using nested object and want to change the store property value
//case 1 - I am assign myProd1 object to myProd2 object using assignment operator then both values are uopdated because of reference

//case 2 - Now i am using spread operator, and this time also both values of street property also change

//To overcome on this problem we use deep copy concept

console.warn(`-------- deep copy with structuredClone--------`);

const a = {
     pname : 'Mobile',
    price : 55000,
    store : {
        street : 'Karve Nagar, Pune',
        pincode : 411052
    }
}

console.log(a);

//const b = {...a}  //not work because of nested object
const b = structuredClone(a)
b.price = 25000
b.store.street = 'Kothrud'
console.log('b',b);
console.log('a',a);














