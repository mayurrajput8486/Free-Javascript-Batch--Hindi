const togglePassword = () =>{
    let passwordInput = document.querySelector('#password')

    let eyeicons = document.querySelector('#eyeicon')

    if(passwordInput.type === 'password'){
        passwordInput.type = 'text'
        eyeicons.src='openeye.png'
    }else{
        passwordInput.type= 'password'
        eyeicons.src = 'closeeye.png'
    }
}