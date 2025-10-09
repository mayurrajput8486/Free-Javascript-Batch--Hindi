const validateForm = () => {
        document.querySelectorAll('.error').forEach((ele)=>ele.textContent = '')

        //to access form values or user input we have to store that value using variables
        //to access the user input from form field then we use value attribute
        // trim () is used to remove leading and tailing extra whitespaces
        const fullName = document.getElementById('fullname').value.trim();
        const email = document.getElementById('email').value.trim();
        const username = document.getElementById('username').value.trim();
        const password = document.getElementById('password').value.trim();
        const contact = document.getElementById('contact').value.trim();

        //Above entered data have to be validate by using regEx
        const fullNamePattern = /^[A-Za-z\s]+$/
        //A-Z - capital letters are accepted
        //a-z - lowercase letters are accepted
        //\s  - spaces are allowed
        const contactPattern = /^[6-9]{1}[0-9]{9}$/
        //mobile number - 10 digit
        //indian mobile number start with - 6,7,8,9
        //to provide limits - { }
        const usernamePattern = /^(?=.*[A-Z])(?=.*[!#$%&*.])(?=.*[\d])[a-zA-Z!#$%&*.\d]{6,10}$/
        //Username must start with Uppercase - [A-Z]
        // rest of the letters are in lowercase or use Uppercase - [a-zA-Z]
        // use at least one character(!,#,$,%,&,*) - (?=.*[!#$%&*.])
        // at least one digit [0-9] - (?=.*[0-9]) or (?=.*[\d])
        // username length 6 to 10 character  - {6,10}
        const passwordPattern = /^(?=.*[A-Z])(?=.*[\d])(?=.*[!@#$%&*_])[A-Za-z\d!@#$%&*_]{6,}$/
        //At least one uppercase - (?=.*[A-Z])
        //At least one digit - (?=.*[\d])
        //at least one sepcial character - (?=.*[!@#$%&*_])
        //length of password 6 to 10 - {6,10}
        //rest of all characters - [A-Za-z\d!@#$%&*_]

        const emailPattern = /^[^@]+@[^@]+\.[^@]+$/
        /* 
                ^ Matches the beginning of the string (or line if multiline)
                [^@] Match any character that is not in this set (i.e. not "@")
                + Match one or more of this
                @ Match "@" character
                [^@] Match any character that is not in this set
                + Match one or more
                \. Match "." (full stop) character (backslash escapes the full stop)
                [^@] Match any character that is not in this set
                + Match one or more
                $ Matches the end of the string (or line if multiline)
        */


        //validate form using above pattern 
        let isValidate = true
        //to check the regex pattern we use test() method

        if(!fullName || !fullNamePattern.test(fullName)){
                document.getElementById('fullnameError').textContent = 'Only Letters and spaces are allowed'
                isValidate = false
        }

        if(!email || !emailPattern.test(email)){
                document.getElementById('emailError').textContent = 'Enter Valid Email Address'
                isValidate = false
        }

        if(!username || !usernamePattern.test(username)){
                document.getElementById('usernameError').textContent = 'Username must start with uppercase, use at least one special character from (!,#,$,%,&,*,.), use at least one digit and username must be 6 to 10 digit long'
                isValidate = false
        }

        if(!password || !passwordPattern.test(password)){
                document.getElementById('passwordError').textContent = 'At least one uppercase, use at least one special character from (!,@,#,$,%,&,*,_), use at least one digit and password must be minimum 6 digit long'
                isValidate = false
        }

        if(!contact || !contactPattern.test(contact)){
                document.getElementById('contactError').textContent = 'Enter 10 digit number - Only Numbers are allowed'
                isValidate = false
        }

        if(isValidate){
                console.log(fullName);
                console.log(email);
                console.log(username);
                console.log(password);
                console.log(contact);  
                
                document.getElementById('userForm').reset()
        }
}


/* let greet = 'Hi'
console.log(greet.length)

let a = '        Hi        '
console.log(a.length)
console.log(a.trim().length) */
