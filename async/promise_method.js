console.warn(`----------- Promise Method --------------`);
console.warn(`-----------Promise.All()------------------`);
//Runs multiple promises in parallel
//This method return an array if promises are settled
//Runs all promises in paraller, resolve only if all succeed, reject if any fail
const P1 = Promise.resolve('Promise Settled 1')
const P2 = Promise.resolve('Promise Settled 2')
const P3 = Promise.resolve('Promise Settled 3')

Promise.all([P1,P2,P3]).then((result)=>console.log('All Promise are Resolve Successfully', result)
).catch((error)=>{console.log('Error - ',error);
})

console.warn(`-----------Promise.allSettled()------------------`);
//Return all result - Success + Reject

const task1 = Promise.resolve('Task 1 Done')
const task2 = Promise.resolve('Task 2 done')
const task3 = Promise.reject('Task Failed')
const task4 = Promise.resolve('Task 3 Done')

Promise.allSettled([task1,task2,task3,task4]).then(response => console.log('Result - ', response)
)

const uploads = [
    /* {fileType: 'resume.pdf', status : 'fulfilled', value : 'Uploaded'},
    {fileType: 'image.jpg', status : 'fulfilled', value : 'Uploaded'},
    {fileType: 'video.mp4', status : 'failed', value : 'Failed'} */
    Promise.resolve('resume.pdf  -  Uploaded'),
    Promise.resolve('image.jpg  -  Uploaded'),
    Promise.reject('video.mp4  -  Failed'),
    Promise.resolve('logo.png  -  Uploaded')
]
/* Promise.allSettled(uploads).then(result=>{
    result.forEach((res,index)=>{
        if(res.status === 'fulfilled'){
            console.log(`- File ${index + 1}`, res.value);
        }else{
            console.log(`-File ${index + 1} failed`, res.reason);
        }
    })
}) */

Promise.allSettled(uploads).then(result=>{
    console.log('All File Uploaded', result)

    result.forEach((res,index)=>{
         if(res.status === 'fulfilled'){
            console.log(`- File ${index + 1}`, res.value);
        }else{
            console.log(`-File ${index + 1} failed`, res.reason);
        }
    })
})


console.warn(`-----------Promise.race()------------------`);
//TAKE THE RESULT OF FIRST FINISHED PROMISE
const fast = new Promise(resolve => setTimeout(()=>{
    resolve('Fast Promise Called')
},200))

const slow = new Promise(resolve => setTimeout(()=>{
    resolve('Slow Promise Called')
},500))

/* const a = Promise.resolve('Fast')
const b = Promise.resolve('Slow') */

Promise.race([fast,slow]).then(result => console.log('Winner',result)
).catch(error => console.log('Error',error))

console.warn(`----------- Promise.any()-------`);
//Return first successful promise
//never return reject promise
const a1 = Promise.reject('Failed')
const a2 = new Promise(resolve=> setTimeout(()=>{
    resolve('Success 1')
},1500))

const a3 = new Promise(resolve => setTimeout(()=>{
    resolve('Success 2')
},1000))

Promise.any([a1,a2,a3]).then(result=>console.log('First ',result)).catch(error=> console.log('All failed',error)
)
