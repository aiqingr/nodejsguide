const express = require("express")
const path = require("path")

const app = express()

app.use(express.static(path.resolve(__dirname, "public")))
app.use(express.urlencoded())

app.get("/login", (req, res)=> {
    if(req.query.username === "admin" && req.query.password === "123") {
        res.send("<h1>Login Successful<h1>")
    } else {
        res.send("<h1>Failed</h1>")
    }
})

// get 请求发送参数的第二种方式
// /hello/:id 表示当前用户访问 /hello/xxx时就会触发
// 在路径中 以冒号命名的部分我们称作param 在get请求它可以被解析为请求参数
// param传参一般不会传递特别复杂的参数
app.get("/hello/:id", (req, res)=> {

    // 可以通过req.params属性来获取这些参数
    console.log(req.params)
    res.send("<h1>This is a new Router</h1>")
})

app.post("/login", (req, res) => {
    // 通过req.body来获取post请求的参数
    // 默认情况下 express不会自动解析请求体 需要通过中间件为其增加功能
    console.log(req.body) // 没有引入中间件前 返回undefined
    const username = req.body.username
    const password = req.body.password
    if(username === "admin" && password === "123") {
        res.send("<h1>Received post request<h1>")
    } else {
        res.send("<h1>failed<h1>")
    }
})

app.listen(3000, ()=> {
    console.log("Server started")
})
