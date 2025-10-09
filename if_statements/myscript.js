console.warn(`--------- Grading System --------`)


//100 - 90 ---> Grade A
//90  - 80 ---> Grade B
//80  - 60 ---> Grade C
//60  - 40 ---> Grade Average
//less than 40 ---> Fail
// Enter marks between 0 to 100 or Invalid Marks
//Named Function 
function gradeSys (marks) {
    if(marks >= 90 && marks <= 100 ){
       return 'Grade A'
    }else if(marks >= 80 && marks < 90){
        return 'Grade B'
    }else if(marks >= 60 && marks < 80){
        return 'Grade C'
    }else if(marks >= 40 && marks < 60 ){
        return 'Grade Average'
    }else if(marks < 40){
        return 'Fail'
    }else{
        return 'Enter Valid Marks'
    }
}

console.log(gradeSys(80))
console.log(gradeSys(75))
console.log(gradeSys(25))
console.log(gradeSys(101))

let num1 = -2
if(num1 === 0) console.log('Number is 0')
else if (num1 > 0) console.log('Number is +')
else console.log('Number is -')

//Discount 
// amount is more than 5000 get 30% discount
// amount more than    3000 get 15% discount
// amount more than    1000 get 5%  discount
// amount less than    1000 no discount

// arrow function
const dMart = (price) =>{
   let discount;
   //let discount = 30
   if(price >= 5000){
        discount = 30
   }else if(price >= 3000){
        discount = 15
   }else if(price >= 1000){
        discount = 10
   }else{
        discount = 0
   }
   let finalPrice = price - discount/100*price
   return `After ${discount} % discount, Your Final Bill is ${finalPrice}. Thank You Visit Again !!!`
}
console.log(dMart(7000))
console.log(dMart(4000))
console.log(dMart(2000))
console.log(dMart(700))




