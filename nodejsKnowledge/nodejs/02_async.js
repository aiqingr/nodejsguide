/*
    Nodejs
    -运行在服务器端的js
    -用来编写服务器
    -特点：
        1）单线程，异步，非阻塞
        2）统一的API
    进程和线程
        - 进程（厂房）
            - 程序的运行环境
        - 线程（工人）
            - 线程是实际进行运算的东西

    同步
        - 通常情况代码都是自上而下一行一行执行的
        - 前面的代码不执行后面的代码也不会执行
        - 同步的代码执行会出现阻塞的情况

    解决同步的问题
        - java python
            - 通过多线程来解决
        - nodejs
            - 同步异步的方式来解决

    异步
        - 一段代码的执行不会影响到其他的程序
        - 异步的问题：
            异步的代码无法通过return来设置返回值
        - 特点：
            1.不会阻塞其他代码的执行
            2.需要通过回调函数来返回结果
        - 基于回调函数的异步带来的问题
            1.代码的可读性差
            2.可调试性差
        - 解决问题：
            - 需要一个东西，可以代替回调函数来给我们返回结果
            - Promise的产生
                - Promise是一个可以用来存储数据的对象
                    Promise存储数据的方式比较特殊
                    这种特殊的方式使得Promise可以用来存储异步调用的数据
*/

/* 
    function sum(a, b) {
        setTimeout(()=>{
            return a + b;
        },10000)
    } 
*/

function sum(a, b, cb) {
    const begin = Date.now();
    setTimeout(()=>{
        cb(a+b);
    },1000)
}

console.log("11111")
const result = sum(123, 123, (result)=>{
    console.log(result);
});
// 回调地狱
sum(1, 2, (result) => {
    sum(result, 3, (result) => {
        console.log(result);
    })
})
console.log("22222");
