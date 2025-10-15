

console.warn(`----------- length --------`);
//Return the total number of character present in string
const str1 = 'JavaScript'
//            0123456789
console.log('Total Length -', str1.length);
console.log('5th character - ', str1[4]);
console.log('Good Morning'.length);

console.warn(`----------- toUpperCase() and toLowerCase() --------`);

const str2 = 'JAvaSCRipt iS AmAzInG !!!'
console.log(str2);

console.log('toUpperCase - ',str2.toUpperCase());
console.log('toLowerCase - ',str2.toLowerCase());

let fruit = 'LeMON'

if(fruit.toLowerCase() === 'orange'  || fruit.toLowerCase() === 'lemon'){
    console.log('Good Source of Vitamin C');   
}else{
    console.log('Not vitamin C source'); 
}

console.warn(`----------- charAt(index) --------`);
//return the character 
const str3 = 'JavaScript'
//            0123456789
console.log('Character At - ',str3.charAt(0))
console.log('Character At - ',str3.charAt(10))

console.warn(`----------- split () --------`);
//join()  - Convert array into string 

const arr1 = ['Welcome','to','JavaScript']
console.log(arr1);
const result1 = arr1.join(" ")
console.log(result1, typeof result1);

//split() - Convert String into array
const str4 = 'Welcome to JavaScript'
console.log(str4);

const result2 = str4.split()
console.log(result2);

const result3 = str4.split("")
console.log(result3);

const result4 = str4.split(" ")
console.log(result4);

console.warn(`----------- Create a Function for making first Character of World Capital---`);

function capitalize (str) {
    let result = str.split(" ").map((word)=>{
        return word.charAt(0).toUpperCase() + word.toLowerCase().slice(1)
    }).join(" ")
    return console.log(result);
    
}
capitalize('weLCome tO jaVAScrIPT')
capitalize('learNING javaSCRIPT iS fUN !!!')


function A (str) {
    let result = str.split(" ")
    //console.log(result);
    let myArray = []

    result.forEach((word)=>{
        let capitalFirst = word.charAt(0).toUpperCase() + word.toLowerCase().slice(1)
        //console.log(capitalFirst);
        myArray.push(capitalFirst)
    })

    return console.log(myArray.join(" "))
    
}
A('learNING javaSCRIPT iS fUN !!!')

console.warn(`----------- indexOf --------`);
//indexOf - Return the index number of the first occurence 
//if string not match then it return -1

const str6 = 'JavaScript is Fun, JavaScript is Awesome'
//            0123456789
console.log('return the index pos -',str6.indexOf('is'));

console.log('return the index pos -',str6.indexOf('Fun'));

console.log('return the index pos -',str6.indexOf('javascript'));

console.warn(`-----------lastIndexOf --------`);
//return the index position of last occurance
//if string not match then it return -1
const str7 = 'JavaScript is Fun, JavaScript is Awesome'

console.log('return the index pos -',str7.lastIndexOf('is'));

console.log('return the index pos -',str6.indexOf('javascript'));

console.warn(`-------- trim () -------`);
//trim () - remove both end extra spaces(whitespaces)
//trimStart() - remove starting space
//trimEnd () - remove ending space
const str8 = 'Hi'
console.log('Total Length - ', str8.length);

const str9 = '    Hi '
console.log('Total Length - ', str9.length);
console.log('Total Length - ', str9.trim().length);

console.log(str8);
console.log(str9);
console.log(str9.trim());

console.warn(`-------- concat () --------`);
const x = 'hello'
const y = 'everyone'
const z = '...'
console.log((x + ' ').concat(y,z));



console.warn(`--------- slice (start,end) --------`);
//Extract the subString for original string and return a new string
const str10 = 'JavaScript'
console.log('slice - ', str10.slice(4,10));
console.log('slice - ', str10.slice(0,4))
console.log('slice - ', str10.slice(4)) //remove character
console.log('slice - ', str10.slice(-6)) //

console.warn(`--------- subString () --------`)
//This method not support negative value
const str11 = 'JavaScript'
console.log('subString - ', str10.substring(4,10));
console.log('subString - ', str10.substring(0,4));
console.log('subString - ', str10.substring(4));
console.log('subString - ', str10.substring(-6));


console.warn(`------ replace () --------`);
//Replace the first occuarence of a substring with another string
const str12 = 'JavaScript is Fun !!!'
console.log(str12);
console.log(str12.replace('Fun','Amazing'));

console.warn(`------ replaceAll () --------`);
const str13 = 'JavaScript is Fun, JavaScript is Easy !!!'

console.log(str13);
console.log(str13.replace('JavaScript','Python'));
console.log(str13.replaceAll('JavaScript','Python'))

console.warn(`------includes()------------`);
//Check if a string contain a given substring and it return true or false

const str14 = 'JavaScript is awesome !!!'
console.log(str14);
//console.log(str14.includes('Awesome'));
if(str14.includes('Awesome'.toLowerCase())){
    console.log('Substring Find')
}else{
    console.log('Not Found !!!');
}

const email = 'mayurrajput@gmail.com'
console.log('domain avail - ',email.includes('@gmail.com'))



console.warn(`------charCodeAt()-----------`);
//This method returns a Unicode value ASCII code of the character at a specific index number
const str15 = 'A'
console.log('A - ASCII - ', str15.charCodeAt(0));

const str16 = 'a'
console.log('a ASCII code -', str16.charCodeAt(0));




console.warn(`---padStart() and padEnd()
--------`);
//This method add padding (character) to the start of the string until it reaches the desired length

let month = '9'
console.log('Month - ',month.padStart(2,'0'))

let contact = '7719090215'
console.log('Add 91 prefix - ', contact.padStart(12,'91'));

let mydebit = '1234'
console.log('Masking First 12 digit - ', mydebit.padStart(16,'*'))

//This method add padding (character) to the end of the string until it reaches the desired length

const load = 'loading'
console.log('Add 3 dots - ', load.padEnd(10,'.'));


console.warn(`------repeat ()-----------`);
//This method return a new string containing the original string repeated with specified number of character

const x1 = 'Hi'
console.log((x1 + ' ').repeat(3));

const x2 = '*'
console.log(x2.repeat(10));

console.warn(`------ masking email-----------`);
const myemail = 'mayurrajput10@gmail.com'
//                        user@domain
//ma***********@gmail.com
//const myemail = 'mr.mayur@gmail.com'

const positionOfat = myemail.indexOf('@')
console.log('position of @ - ',positionOfat);
//before @
const user = myemail.substring(0,positionOfat)
console.log('user - ',user); 
//after @
const domain = myemail.substring(positionOfat)
console.log('domain - ', domain);


let maskEmail = user.substring(0,2) + '*'.repeat(user.length - 2) + domain
console.log(maskEmail);

























