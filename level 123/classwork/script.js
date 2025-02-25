let task1 = new Promise((resolve)=>{
    setTimeout(()=>resolve("task 1 complete"),2000)

})
task1.then((res)=>console.log(res))

let task2 = new Promise((resolve,reject)=>{
    reject("failed")
})
task2.catch((res)=>console.log(res))

let task3 = new Promise((resolve)=>{
    resolve(5)
})
task3
.then((dub)=>dub*2)
.then((res)=>console.log(res))
