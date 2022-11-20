/* 
    异步调用比需要通过回调函数来返回数据
        - 当我们进行一些复杂的调用的时候， 会出现回调地狱
    
    问题：
        异步必须通过回调函数来返回结果，回调函数一多就很痛苦
    
    Promise
        - Promise可以帮助我们解决异步中的回调函数的问题
        - Promise就是一个用来存储数据的容器
            他拥有着一套特殊的存储数据的方式
            这个方式使得它里面可以存储异步调用的结果
*/

// 创建Promise
// 创建Promise时，构造函数中需要一个函数作为参数
// Promise构造函数的回调函数，他会在创建Promise时调用，调用时会有两个参数传进去
const promise = new Promise((resolve, reject)=>{
    // resolve和reject是两个函数，通过这两个函数可以向Promise中存储数据
    // resolve在执行正常时存储数据，reject在执行错误的时候存储数据
    // 通过函数来向Promise添加数据，好处就是可以用来添加异步调用的数据
    /* 
    setTimeout(()=>{
        resolve("haha");
    },2000)
    */
    resolve("123");
})
/* 
    console.log(promise)
    结果是undefined
*/
/*  
    setTimeout(()=>{
        console.log(promise);
    }, 3000) 
    结果是haha
*/

/* 
    从Promise中读取数据
        - 可以通过Promise的实例方法then来读取Promise中存储的数据
        - then需要两个回调函数作为参数，回调函数用来获取Promise中的数据
            通过resolve中存储的数据，会调用第一个函数返回
            可以在第一个回调函数中编写处理数据的代码
            通过reject存储的数据或者出现异常的时候，会调用第二个函数返回
            可以在第二个回调中编写处理异常的代码
*/
promise.then((result)=>{
    console.log("resolve", result)
},(result)=>{
    console.log("Rejected", result)
})


const promise2 = new Promise((resolve, reject) => {
    setTimeout(()=>{
        resolve("haha")
    }, 1000);
})

/* 
    Promise中维护了两个隐藏的属性
        promiseResult
            - 用来存储数据
        promiseState
            - 记录promise的状态（三种状态）
            1）fulfilled（完成）通过resolve存储数据时
            2）rejected（拒绝，出错了）通过reject存储数据时
            3）pending （进行中）
            state只可以修改一次，修改以后永远不会改变

    流程：
        当Promise创建时，promiseState初始值是pending
            当通过resolve存储数据时，promiseState变成fulfilled（完成）
                promiseResult变成存储的数据
            当通过reject存储数据时或出错的时候，promiseState变成rejected（拒绝）
                promiseResult变成存储的数据或异常对象

        当我们通过then读取数据的时候，相当于为promise设置了回调函数
            如果promiseState变成了fulfilled，则调用then的第一个回调函数来返回数据
            如果promiseState变成了rejected，则调用then的第二个回调函数来返回数据
*/

/* 
    catch()方法和then类似，但是只需要一个回调函数作为参数
        catch中的回调函数只会在promise被拒绝的时候才会调用
        catch相当于then(null, ()=>{})
        catch就是专门处理promise异常的一个方法
*/

/* 
    finally()
        无论是正常存储数据还是出现异常，finally总是会执行
        但是finally的回调函数并不会接受数据
        finally()一般用与编写一些无论promise成功与否都要执行的代码
*/

promise2.then((result)=>{
    console.log("resovle", result);
},(result)=>{
    console.log(`rejected ${result}`);
})

promise2.catch((result)=>{
    console.log(`catch result ${result}`);
})

promise2.finally(()=>{
    console.log("always here")
})
console.log("111111")