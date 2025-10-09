console.warn(`---------- Array Methods-----------`)

console.warn(`---------- pop () ---------`)
const movies = ["KGF", "Avengers", "Bahubali", "Vash","Singham", "pushpa"]
console.log(movies)
movies.pop()
console.log(movies)

console.warn(`---------- shift () ---------`)
const players = ['Yuvraj','Virat','Rohit','Surya','Hardik','MSD']
console.log(players)
players.shift()
console.log(players)

console.warn(`---------- unshift () ---------`)
const iplPlayer = ['Virat','Rohit']
console.log(iplPlayer)
iplPlayer.unshift("Surya")
iplPlayer.unshift("hardik","rishabh")
console.log(iplPlayer)

console.warn(`---------- splice () - Remove ---------`)

const color = ["red","orange","navy","aliceblue","green","black","blue"]
console.log(color)
color.splice(3,1)
console.log(color)

const cartItem = ["Milk", "Panner", "Paratha","Icecream","coffee", "Curd"]
console.log(cartItem)

//remove paneer and coffee
cartItem.splice(1,1)
cartItem.splice(3,1)
console.log(cartItem)

console.warn(`---------- splice () - Replace ---------`)

const fruits = ["mango","orange","cherry","banana","pineapple","kiwi"]
console.log(fruits)

//fruits.splice(1)   -- remove all element except mango

//fruits.splice(1,4) -- remove orange, cherry, banana, pineapple

//fruits.splice(1, fruits.length) // (1,7)

//["mango","orange","cherry","grapes","pineapple"]
fruits.splice(3,1,"grapes")


console.warn(`--------- splice (Start, 0, newElement) - Add element `)
const stu = ["Ganesh", "Asmita", "Vikas", "Mayur", "Apurva"]
console.log(stu)
//["Ganesh", "Asmita","Vijay","Vikas", "Mayur", "Apurva"]
stu.splice(2,0,"Vijay","Virat","Aarti")
console.log(stu)

console.warn(`-------- reverse () ---------`)
const numbers = [10,60,30,70,5]
console.log(numbers)
numbers.reverse()
console.log(numbers)

const fname = ["MS", "Virat","Laxman","Gautam","Rohit"]
console.log(fname)
fname.reverse()
console.log(fname)

console.warn(`--------- join ()---------`)
const greet = ["JavaScript", "Is", "Fun", "!!!"]
console.log(greet)
//JavaScript is Fun !!!
const message1 = greet.join()
console.log(message1)
const message2 = greet.join('')
console.log(message2)
const message3 = greet.join(' ')
console.log(message3)
const message4 = greet.join('-')
console.log(message4)

const imagePath = ['desktop','images','user.jpg']
const validPath = imagePath.join('/')
console.log(validPath)