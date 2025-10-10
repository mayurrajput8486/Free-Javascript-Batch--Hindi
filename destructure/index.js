console.warn(`----- Array Destructuring------`);

const numbers = [10,20,30,40,50,60]
console.log(numbers);
console.log(numbers[4]);

const [a,b,c,d,e,f] = numbers;
console.log(a);
console.log(b);
console.log(c);

const colors = ['red','green','blue','orange','white','black']
console.log(colors);

const [c1,c2,,c4,c5,c6] = colors;
console.log(c4);


let x = 5
let y = 10

let xy = x
x = y
y = xy

console.log(x,y)

//semicolon is used to mark the end of statement in JS
let m = 50, n = 100;
[m,n] = [n,m]
console.log(m);
console.log(n);

//useState() - const [count, setCout] = useState(10)

console.warn(`---------- Object Destructuring-------`);
const user = {
    fname : 'Virat', 
    age : 35, 
    city : 'Pune'
}

const {fname, city, age} = user
console.log(fname);
console.log(city)
console.log(age);











