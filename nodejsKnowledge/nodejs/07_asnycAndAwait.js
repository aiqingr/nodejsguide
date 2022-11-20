/*
 * @Author: Tongyang Ni ntyaiqingr@gmail.com
 * @Date: 2022-10-18 20:37:30
 * @LastEditors: Tongyang Ni ntyaiqingr@gmail.com
 * @LastEditTime: 2022-11-11 09:13:18
 * @FilePath: /nodejsguide/nodejsKnowledge/nodejs/07_asnycAndAwait.js
 * @Description: 
 * 
 * Copyright (c) 2022 by Tongyang Ni ntyaiqingr@gmail.com, All Rights Reserved. 
 */
/* 
    通过async可以快速的创建异步函数
        异步函数的返回值会自动封装到一个Promise中返回

    在async声明的异步函数中可以使用await关键字来调用异步函数
*/
// function fn() {
//     return Promise.resolve(10)
// }

// async function fn1() {
//     return 10
// }

// fn().then(r => console.log(r))

// console.log(fn1())

function sum(a,b) {
    return new Promise(resolve => {
        setTimeout(()=>{
            resolve(a+b)
        },1000)
    })
}
/* 
    Promise解决了异步回调中回调函数的问题
    虽然通过链式调用解决了回调地狱，但是链式调用太多以后还是不好看很混乱
    想以同步的方式去调用异步的代码
*/
function fn3() {
    sum(1,2)
        .then(r => sum(r,3))
        .then(r => sum(r,4))
        .then(r => console.log("r",r))     
}

async function fn4() {
    // 当我们通过await去调用异步函数的时候，他会暂停代码的运行
    // 直到异步代码执行有结果时，才会将结果返回
    // await只能用于async声明的异步函数中，或者es模块的顶级作用域
    // await阻塞的只有异步函数内部中的代码，不会影响外部代码
    // 通过await调用异步代码时，需要通过try catch来处理异常
    try{
        let result = await sum(1,2)
        result = await sum(result,3)
        console.log('result', result)
        console.log("我应该是第三行")
    }catch(e) {
        console.log('e', e)
    }

}

// fn3()
fn4()

console.log("我应该是第一行")
// 如果async声明的函数中没有写await，那么它的里面就会依次执行
async function fn5() {
    console.log(1)
    console.log(2)
    console.log(3)
}
// fn5 就和fn6 相当
function fn6() {
    return new Promise(resolve => {
        console.log(11)
        console.log(22)
        console.log(33)
        resolve()
    })
}
fn5()
fn6()
console.log(4)
/* 
    当我们使用await调用函数以后 当前函数后面的所有代码
    会在当前函数执行完毕以后，被放入到微任务队列中

*/
async function fn7() {
    console.log("a")
    await console.log("b")
    console.log("c")
}

fn7()
console.log("d");

(async () => {
    await console.log("haha")
})()