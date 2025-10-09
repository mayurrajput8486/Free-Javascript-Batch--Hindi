console.warn(`-------- sync operations -----`);

console.log('Start');
console.log(1)
console.log(2)
if (true) {
    console.log('I am true');
}
function checkData(num) {
    if (num > 0) {
        console.log('Number is +ve');
    } else {
        console.log('Number is -ve');
    }
}
checkData(10)

function greet(fname, lname) {
    console.log(`Good Morning ${fname} ${lname}`);
}
greet('Virat', 'Kohli')
console.log(3);
console.log(4);
console.log('End');

console.warn(`-----------async operation using async function---------`);

console.log('Start');
console.log(1)
console.log(2)
if (true) {
    console.log('I am true');
}
async function checkData(num) {
    if (num > 0) {
        console.log('Number is +ve');
    } else {
        console.log('Number is -ve');
    }
}
checkData(10)

async function greet(fname, lname) {
    console.log(`Good Morning ${fname} ${lname}`);
}
greet('Virat', 'Kohli')
console.log(3);
console.log(4);
console.log('End');

console.warn(`-----------async operation using setTimeout() ---------`);

console.log('Start');
console.log(1)
console.log(2)

//1sec - 1000ms
setTimeout(() => {
    if (true) {
        console.log('I am true');
    }
},3000)

setTimeout((num)=>{
    if (num > 0) {
        console.log('Number is +ve');
    } else {
        console.log('Number is -ve');
    }
},5000,10)

setTimeout((fname,lname)=>{
    console.log(`Good Morning ${fname} ${lname}`);
},7000,'Virat','Kohli')

console.log(3);
console.log(4);
console.log('End');


