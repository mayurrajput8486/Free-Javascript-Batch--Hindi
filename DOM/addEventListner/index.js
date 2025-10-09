/* let h2Element = document.getElementById('h2Ele')
console.log(h2Element)

h2Element.addEventListener('click',()=>{
    h2Element.innerText = 'Hi, I am Virat Kohli'
}) */

const passwordCheckBox = document.getElementById('showpassword')
const passwordInput = document.getElementById('password')

console.log(passwordCheckBox)
console.log(passwordInput)

passwordCheckBox.addEventListener('click', ()=>{
    passwordInput.type = passwordCheckBox.checked ? 'text' : 'password'
})


