/* 
    静态方法
        Promise.resolve()创建一个立刻完成的promise
        Promise.reject()创建一个立刻拒绝的promise
        Promise.all([...])同时返回多个promise的执行结果
            - 只要有一个报错,就返回错误
        Promise.allSettled([...])同时返回多个promise的执行结果（无论成功或者失败）
            1) {status: 'fulfilled', value: 3}
            2) {status: 'rejected', reason: 'hhaa'}
        Promise.race([...])返回执行最快的Promise不考虑对错
        Promise.any([...])返回执行最快的完成的promise


*/

Promise.resolve(10).then(r=>console.log(r));
// 相当于下面的代码（without then）
// new Promise((resolve, reject)=>{
//     resolve(10)
// })

Promise.reject(20).catch(r=>console.log(r));
// 相当于下面的代码（without catch）
// new Promise((resolve, reject)=>{
//     reject(20)
// })

function sum(a,b) {
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve(a+b)
        }, 1000)
    })
}
let [num1, num2, num3] = [sum(1,2), sum(2,3), sum(3,4)];
Promise.all([
    num1,
    num2,
    num3,
    // Promise.reject("haha")
]).then(r=>console.log(r))

Promise.allSettled([
    num1,
    num2,
    num3,
    // Promise.reject("hhaa")
]).then(r=>console.log(r))

Promise.race([
    num1,
    num2,
    num3,
    Promise.reject("hah")
]).then(r=>console.log(r)).catch(r=>console.log("cuowu"))

Promise.any([
    num1,
    num2,
    num3,
    Promise.reject("123"),
    Promise.reject("1234"),
    Promise.reject("1253")
]).then(r=>{console.log(r)})