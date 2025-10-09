console.warn(`-------------getElementById---------------`)
//for extract the content of html element
const idEle1 = document.getElementById("content1")
console.log(idEle1)
//Print without tag - access the content
const contentByinnerText = document.getElementById("content1").innerText
console.log(contentByinnerText)

const contentByinnerHTML = document.getElementById("content1").innerHTML
console.log(contentByinnerHTML)

const contentBytextContent = document.getElementById("content1").textContent
console.log(contentBytextContent)

//set the new content 
document.getElementById("content1").innerText = "Welcome to JavaScript"

//set new html tag
document.getElementById("content1").innerHTML = "Welcome to DOM"

//document.getElementById("content1").textContent= "I am extract hidden content also"