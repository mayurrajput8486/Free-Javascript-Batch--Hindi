console.warn(`-------- Create Promise in JS --------`);

/* let myPromise = new Promise((resolve,reject)=>{
    let result = false
    if(result){
        resolve('Operation successful')
    }else{
        reject('Operation Reject')
    }
})
console.log(myPromise);

console.warn(`------- how to use .then(), .catch(), .finally()--------`);

myPromise.then((result)=>{
    console.log("Resolved -", result);
}).catch((error)=>{
    console.log("Reject -", error);
}).finally(()=>{
    console.log('Promise Finished either reject or fullfiled');
}) */


console.warn(`------ fetch API using fetch ()---------`);


//JSON - JavaScript Object Notation
//This is a lighweight format to transfer data from client to server.
/* let myData = fetch('https://jsonplaceholder.typicode.com/posts/1')

myData.then(response => response.json())
.then(data => console.log('Post - ', data))
.catch(error => console.log('Error', error)).finally(()=>console.log('Data Get')
)

console.log(1);
console.log('Hello'); */

console.warn(`---------- async and await ----`);

/* async function fetchData () {
    try{
        let myData = await fetch('https://jsonplaceholder.typicode.com/posts/1')

        let result = await myData.json()
        console.log(result)
    }catch(error){
        console.log('Error',error);
    }
}
fetchData() */


const getUserDetails = async() =>{
    let response = await fetch('https://jsonplaceholder.typicode.com/users')
    let result = await response.json()
    console.table(result);
    
}
getUserDetails()




