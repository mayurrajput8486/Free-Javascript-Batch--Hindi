console.warn(`----------------- getElementById ----------------------------`)

const a1 = document.getElementById("content1")
const a2 = document.getElementById("content1")
console.log(a1);
console.log(a2);


const updateStyle = () =>{
    document.getElementById("content1").style.cssText = 'background-color : black; color : yellow; padding : 20px'
}

console.warn(`----------------- getElementsByClassName --------------------`)

let b1 = document.getElementsByClassName('text1')
console.log(b1)

let b2 = document.getElementsByClassName("text1")[0]
console.log(b2)

let b3 = document.getElementsByClassName('text1')[1]
console.log(b3)

let b4 = document.getElementsByClassName('text1')[2]
console.log(b4)

console.warn(`------------------ getElementsByTagName ---------------------`)

let tagName = document.getElementsByTagName("div")
console.log(tagName)

let h3Tag = document.getElementsByTagName("h3")
console.log(h3Tag);

let divEle1 = document.getElementsByTagName("div")[3]
console.log(divEle1);

console.warn(`------------------ getElementsByName ---------------------`)

let x1 = document.getElementsByName("full_name")
console.log(x1)
let x2 = document.getElementsByName("gender")
console.log(x2)

console.warn(`------------------ querySelector ---------------------`)
let divEle = document.querySelector("div")
console.log(divEle)

let id1Ele = document.querySelector("#id1")
console.log(id1Ele)

let classEle = document.querySelector(".main1")
console.log(classEle);

console.warn(`------------------ querySelectorAll ---------------------`)

let m1 = document.querySelectorAll("#id2")
console.log(m1)


let m2 = document.querySelectorAll(".main1")
console.log(m2)

let m3 = document.querySelectorAll("div")
console.log(m3)


