console.warn(`----------- getElementById-------------`)


document.getElementById("block1").style.padding = "10px"

//agar aap ko dynamic changes karane hai toh hum sab se pahale function create karenge

const changeColor = () =>{
    document.getElementById("block1").style.color = "yellow"
}

const bgMode = () =>{
    document.getElementById("block1").style.backgroundColor = "black"
}

const increaseSize = () =>{
    document.getElementById("block1").style.fontSize = "25px"
}

const mixedStyle = () =>{
    document.getElementById("block1").style.cssText = "background-color : orange; color : blue; font-size : 25px; font-weight : bold"
}

const changeContent = () =>{
    document.getElementById("block1").textContent = "Hello Everyone...."
}

const changeTextwithTag = () =>{
    document.getElementById("block1").innerHTML = "<h1>Welcome to DOM</h1>"
}
