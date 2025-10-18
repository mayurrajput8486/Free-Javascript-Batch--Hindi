console.warn(`----------- Prototype ----------`);

const student = {
    name : 'Virat',
    city : 'Pune',
    greet : function (){
        console.log('Hello ' + student.name)
        console.log('Hello ' + this.name)
    }
}
console.log(student);
student.greet();
console.log(Object.getPrototypeOf(student));

const stu1 = student
console.log(stu1)

//Using Constructor functions
//To initialize object we use constructor
function Person(name,city,age){
    this.name = name
    this.city = city
    this.age = age
}

//Add method using prototype
Person.prototype.callHello = function (){
    console.log(`I am ${this.name}, I am from ${this.city} and I am  ${this.age} years old `)
}

const p1 = new Person('Virat','Pune',36)
const p2 = new Person('Rohit','Mumbai',38)
p1.callHello()
p2.callHello()


console.warn(`------------ class in JavaScript ---------------`);

class Employees{
    //to initialize the object we use constructor () { }
    constructor (name,city,age) {
        this.name = name
        this.age = age
        this.city = city
    }

    //to create method
    introduce(){
        console.log(`Hello Everyone, I am ${this.name}, I am from ${this.city} and I am ${this.age} years old`);
    }
}

class Abc extends Employees{
    constructor (name,city,age) {
        super(name,city,age)
        this.name = name
        this.age = age
        this.city = city
    }
    //override introduce() 
    introduce(){
        console.log(`Hello Everyone, I am ${this.name}, I am from ${this.city} and I am ${this.age} years old`);
    }
}

const emp1 = new Employees('Mayur Rajput', 'Shegaon', 30)
const emp2 = new Abc('Virat','Delhi',35)
emp1.introduce()
emp2.introduce()


