console.warn(`------- Built In Method --------`)

const empDetails = { }

const employee = {
    name : "Virat Kohli",
    age : 35,
    role : "React Developer",
}

const empContact = {
    contact : 7744556633,
    email : "vk18@gmail.com",
    city : "Delhi"
}

const empSalary = {
    salary : 85000
}

const empDept = {
    dept : "MERN Stack"
}

// Object.keys(objName) - Returns an array of keys
console.log(Object.keys(employee))

//Object.values(objName) - Returns an array of values
console.log(Object.values(employee))

//Object.entries(Objname) - Return an array of key:value pair
console.log(Object.entries(employee))
console.log(employee.valueOf())

// Object.assign(targetObject, SourceObject)
console.log(Object.assign(empDetails, employee, empContact, empDept, empSalary))

console.log(empDetails)

//hasOwnProperty ("propertyName") - return a boolean expression

const isPresent = empDetails.hasOwnProperty("dept")
console.log(`Property is present - ${isPresent}`)

console.warn(`------------Object.freeze ()--------`)
//Object.freeze(objName)
/*
1. This method freeze the object that means we never change the value of properties.
2. We can not add or remove property in the object 

*/

const student = {
    rollno : 101,
    name : "Virat Kohli",
    marks : 95,
    grade : "A+"
}

console.log(student)
//Add new Property
//student.city = "Delhi"

//Update the value
//student.marks = 98

//delete property
//delete student.rollno

//Object.freeze(student)

//Add new property     -- not possible
student.city = "Delhi"

//Update the value
student.marks = 98

//delete property
delete student.rollno

console.log(student)

console.warn(`------- Object.seal ()-------`)
//Using this method we can modify or change the value or property but we can not add or remove any property

const user = {
    username : "viratK",
    password : "VK18"
}

console.log(user)

Object.seal(user)

//Add new property    -- not add
user.email = "vk18@gmail.com"

//Remove property     -- not remove
delete user.password

//Update property value
user.username = "ViratKohli"

console.log(user)


//Stringify ()
console.warn(`------------ Stringify () --------------------------`)
console.log(user)
console.log(JSON.stringify(user))
//JavaScript Object Notation - REST API

//JSON.parse(objName) ---> Convert JSON String into JavaScript Object
//console.log(JSON.parse(user))


//Action        Object.freeze(objName)            Object.seal(ObjName)
/* 
NEW PROP ADD       NO                                     NO
REMOVE PROP        NO                                     NO
UPDATE VALUE       NO                                    YES        

*/

/* 
            food application  
            Client                      Backend                     Database(mongodb, mysql, postgresql)
            Register Form ----->        Collect User Input  ----->  [{},{},{},{},{},{},{}]  
          email, password, contact      [
                                            {email : "vk@gmail.com", password : "vk@123", contact : 7744556633},
                                            {email : "rs@gmail.com", password : "rs@123", contact : 8844556633},
                                            {email : "ms@gmail.com", password : "ms@123", contact : 8888556633}
                                        ]                  
*/



