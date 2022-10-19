// 开启一个定时器
// 定时器的作用就是间隔一段时间后，将函数放入到任务队列中

// setTimeout(()=>{
//     console.log(1)
// },0)

/* 
    Promise的执行原理
        - Promise在执行，then就相当于给Promise了回调函数
            当Promise的状态从pending变成fulfilled时，
                then的回调函数会被放到任务队列中
*/
// Promise.resolve(1).then(()=>{
//     console.log(2);
//     setTimeout(()=>{
//         console.log(4)
//     },20);
//     console.log(5)
// })
// console.log(3)

/* 
    JS是单线程，他的运行是基于event loop事件循环机制
    - 调用栈
        - 栈
            栈是一种数据结构，后进先出
        - 调用栈中，放的是要执行的代码
    -任务队列
        - 队列
            队列是一种数据结构，先进先出
        - 任务队列中，放的是要执行的代码
        - 当调用栈中的代码执行完毕后，队列中的代码才会按照顺序依次进入到栈中执行
        - 在JS中任务队列有两种
            - 宏任务队列 （大部分代码都去宏任务队列去排队）
            - 微任务队列 （Promise的回调函数（then，catch，finally））

        -整个流程
            1)执行调用栈的代码
            2）执行微任务队列中所有的任务
            3）执行宏任务队列中的任务
*/


/* 
    queueMicrotask()用来向微任务队列中添加一个任务

*/
setTimeout(()=>{
    Promise.resolve(1).then(()=>{
        console.log(3)
    })
},0)

Promise.resolve(5).then(()=>{
    console.log(6)
})

queueMicrotask(()=>{
    console.log(1)
})

console.log(2)
// 11 -> 77 -> 33 -> 55 -> 22 -> 66- >44

console.log(11)

setTimeout(()=>console.log(22))

Promise.resolve().then(()=>console.log(33))

Promise.resolve().then(()=> setTimeout(()=>console.log(44)))

Promise.resolve().then(()=>console.log(55))

setTimeout(()=>console.log(66))

console.log(77)



