
//document.querySelector('#body').style.backgroundColor = 'yellow'

/* const darkMode = () =>{
    document.querySelector('#body').style.backgroundColor = 'black'
}

const lightMode = () =>{
    document.querySelector('#body').style.backgroundColor = 'white'
}

const greyMode = () =>{
    document.querySelector('#body').style.backgroundColor = 'grey'
}

const navyMode = () =>{
    document.querySelector('#body').style.backgroundColor = 'navy'
}

const blueMode = () =>{
    document.querySelector('#body').style.backgroundColor = 'lightblue'
} */

const bgMode = (color) =>{
    document.querySelector('#body').style.backgroundColor = color
    let cards = document.querySelectorAll('.card')

    if(color === 'black' || color === 'navy'){
        document.querySelector('#container').style.color = 'white'
        cards.forEach((card)=>{
            card.style.backgroundColor = 'orange'
        })
    }else{
        document.querySelector('#container').style.color = 'black'
        cards.forEach((card)=>{
            card.style.backgroundColor = 'black'
        })
    }
}