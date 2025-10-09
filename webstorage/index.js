console.warn(`----------- Local Storage --------`)
//to store data in local storage we use setItem() method and it accept key:value pair

localStorage.setItem("username","changeXpert")
//if same property is set in local storage then the value that property will update
localStorage.setItem("username","mayurrajput")
localStorage.setItem("password","Rajput@123")
localStorage.setItem("contact",7719090215)

//to get the values from local storage use getItem()

const myUsername = localStorage.getItem("username")
const myPassword = localStorage.getItem('password')
const myContact = localStorage.getItem("contact")
console.log('username -',myUsername);
console.log('password -',myPassword);
console.log('contact -',myContact);


//to remove any key from local storage usemethod removeItem()
localStorage.removeItem("contact")

//to check total number of key:value pair use length
let totalData = localStorage.length
console.log(totalData);

//to clear all keys we use clear()
localStorage.clear()

//We want to store one object in local storage

const userProfile = {
    username : "mayurRajput",
    password : 'mayurRaj#12',
    theme : 'Dark',
    lang : 'English'
}
console.log(userProfile);

//use setItem method to store data in local storage
localStorage.setItem("userData",userProfile)

//Convert above object into string using method JSON.stringify() method

const user = JSON.stringify(userProfile)
console.log(user);

localStorage.setItem("userinfo",user)

const data = localStorage.getItem('userinfo')
document.write(data)

//If you dont want to print data in JSON format then use JSON.parse() method 
const myInfo = JSON.parse(localStorage.getItem("userinfo"))
console.log(myInfo);


//Try Session storage method 
/* 
    to store data       setItem()
    to get data         getItem()
    to remove data      removeItem()
    to clear all data   clear()
    to check total key  length

*/
sessionStorage.setItem("username","changeXpert")




