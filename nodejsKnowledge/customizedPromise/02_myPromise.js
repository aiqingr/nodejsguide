/* 
    定义类的思路
        1.先把功能都分析清楚了，再动手
        2.写一点想一点，走一步看一步
*/
const PROMISE_STATE = {
    PENDING: 0,
    FULFILLED: 1,
    REJECTED: 2
}

class myPromise {
    //创建一个变量来存储Promise的结果
    #result
    // 创建一个变量来记录promise状态
    #state = PROMISE_STATE.PENDING // pending 0 fulfilled 1 rejected 2
    //创建一个变量来存储回调函数
    #callback
    constructor(executor){
        // 接收一个执行器作为参数
        executor(this.#resolve.bind(this), this.#reject.bind(this)) // 调用回调函数
    }
    //私有的resolve（）用来存储成功的数据
    // 放在原型里 
    //需要要executor给this.#resolve绑定this
    // this.#resolve.bind(this)
    #resolve(value) {
        // this => undefined
        console.log(this);
        if(this.#state !== PROMISE_STATE.PENDING) return

        this.#result = value
        this.#state = PROMISE_STATE.FULFILLED // 数据填充成功
        //当resolve执行的时候说明数据已经进入了，需要调用then的回调函数
        this.#callback && this.#callback(this.#result)
    }
    // 放在实例自身上 不需要要executor 加上bind
/*     #resolve = () => {
        console.log(this)
    } */
    //私有的reject（）用来存储拒绝的数据   
    #reject(reason) {

    }

    //添加一个方法来读取数据的then方法
    then(onFulfilled, onRejected) {
        if(this.#state === PROMISE_STATE.PENDING) {
            this.#callback = onFulfilled
        }
        if(this.#state === PROMISE_STATE.FULFILLED) {
            // 只能读取已经存储的数据不能读取异步的数据
            onFulfilled(this.#result)
        }
    }
}

const mp = new myPromise((resolve,reject)=> {
    setTimeout(()=>{
        resolve("sunwukong")
    }, 1000)
})

mp.then((result)=>{
    console.log(`result: ${result}`)
})