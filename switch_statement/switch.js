console.warn(`---------- switch statement -------`)

let marks = 45
//let myMarks = true
// condition check
switch(true){
    case marks > 100 : console.log('Enter marks below 100 or equal to 100')
    break;
    case marks >= 90 : console.log('Grade A')
    break;
    case marks >= 80 : console.log('Grade B')
    break;
    case marks >= 60 : console.log('Grade C')
    break;
    case marks >= 40 : console.log('Grade Average') 
    break;
    case marks <  40 : console.log('Fail')
    break;
   
    default : console.log('Enter Valid Marks')
}

// Check day of the week
// Mon Tue Wed Thur Fri Sat Sun
// 1    2   3   4    5   6   7

//let day = prompt('Enter Day Number between 1 to 7')
let day = '4'
//prompt return string datatype
//string to integer we use parseInt()
switch(day){
    case '1' : console.log('Today is Monday')
    break;

    case '2' : console.log('Today is Tuesday')
    break;

    case '3' : console.log('Today is Wednesday')
    break;

    case '4' : console.log('Today is Thursday')
    break;

    case '5' : console.log('Today is Friday')
    break;

    case '6' : console.log('Today is Saturday')
    break;

    case '7' : console.log('Today is Sunday')
    break;

    default : console.log(`Enter Valid Days ranges from 1 to 7`)
}

//function based 
// Food Order Condition
// pizza - 250 Rs., Pasta - 199 Rs, Waffle : 254 Rs, Burger - 149 Rs, Rolls - 100 Rs, Idali - 50 Rs
const orderFood = (item) =>{
    let price;
    switch(item){
        case 'pizza' : price = 250 
        break;

        case 'pasta' : price = 199
        break;

        case 'waffle' : price = 254
        break;

        case 'burger' : price = 149
        break;

        case 'rolls' : price = 100
        break;

        case 'idli' : price = 50
        break;

        default : return `${item} Not Available`
    }
    return `You Ordered ${item} - Price : ${price} Rs.`
}
console.log(orderFood('burger'))
console.log(orderFood('noodles'))