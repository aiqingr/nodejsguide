function sum(a,b) {
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve(a+b)
        }, 1000)
    })
}
// 这种写法要promise干嘛。。。
sum(1,2).then(result=>{
    sum(result,3).then(result=>{
        sum(result,4).then(result=>{
            console.log(result);
        })
    })
})

/* 
    promise中的
    then(return new Promise())
    catch
    - 这三个方法都会返回一个新的promise
        promise会存储promise中的返回值
    finally
        -finally里的返回值，不会存储在新的promise中

*/

const p2 = new Promise((resolve,reject)=>{
    resolve("haha");
})
// PromiseResult == undefined 因为then里传入的是一个callback fn
// 如果给console.log（p3）外setTimeout promiseResult == Greedy
const p3 = p2.then(result=>{
    console.log('result', result);
    return "Greedy";
})
setTimeout(() => {
    console.log(p3)
}, 1000);
console.log(p3)


const newSum = (a, b) => {
    return new Promise((resolve, reject)=>{
        resolve(a+b)
    })
}

newSum(1,2)
    .then(result => result + 3)
    .then(result => result + 4)
    .then(result => result + 5)
    .then(result => console.log('result1', result))

// console.log('newSumP1', newSumP1)

const p4 = new Promise((resolve, reject) => {
    console.log("P4 is running");
    reject("see you on Monday");
})
/* 
    Promise的链式调用，
    后面的方法调用的是上一步的结果，如果上一步的执行结果不是当前我们想要的结果，则跳过当前的结果
    当promise出现异常， 但是整个调用链中并没有出现catch，或者第一个then中没有出现第二个参数，则异常会向外抛出
*/
p4
    .then(result => {
            console.log(`First then: ${result}`);
            return "asd";
        }
    )
    // .catch(reason => console.log(`First catch ${reason}`))
    .then(result => console.log(`Second then ${result}`), reason=> {
        console.log(`reason is ${reason}`);
        console.log("error");
    })

