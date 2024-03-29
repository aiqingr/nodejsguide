/* 
    核心模块是node中自带的模块，可以在node中直接使用
    window是浏览器自带的宿主对象，node中没有
    global是node的全局对象作用类似于window
    ES标准下，全局对象的标准名是globalThis

    核心模块
        - process
            表示当前node的进程
            通过该对象可以获得进程的信息，或者对进程做各种操作
            如何使用：
                1）process是一个全局变量（如何获取对象）
                2）有哪些属性和对象
                    - process.exit（）结束当前进程 终止这个node
                    - process.nextTick()
                    将函数放入tick队列中
                    调用栈 --> tick队列 --> 微任务队列 --> 宏任务队列
                    tick队列中的代码，会在下一次事件循环之前执行
                    会在微任务以及宏任务队列之前执行
*/  

// console.log(globalThis)
// console.log(process)

// console.log(111)
// console.log(123)
// process.exit(0)
// console.log(321) // not showed

setTimeout(()=>{
    console.log(1) // 宏任务队列
})

queueMicrotask(()=>{
    console.log(2) // 微任务队列
})
process.nextTick(()=>{
    console.log(3)  //tick队列
})
console.log(4) // 调用栈