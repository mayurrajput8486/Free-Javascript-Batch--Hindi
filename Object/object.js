console.warn(`------- Object Literal Method -------`)

const student = {
    rollno : 101,
    first_name : "Apurva",
    last_name : "Rajput",
    contact : 7744556633
}

console.log(student)
console.log(`
    Full Name : ${student.first_name} ${student.last_name}
    Contact : ${student.contact}
    `)

console.warn(`---- Modify the Object Properties -----`)
console.warn(`------ ADD Property ------`)

student.email = "apurva@gmail.com"
student.address = "Karve Nagar, Pune"
student.pincode = 411052
console.log(student)

console.warn(`-------- DELETE Property------`)
// remove property
// delete objName.propName
delete student.pincode
delete student.email
console.log(student)

console.warn(`------ UPDATE Property ------`)
console.log(student)

student.first_name = "Mayur"
student.address = "Hinjewadi Phase 2 , Pune"
console.log(student)

