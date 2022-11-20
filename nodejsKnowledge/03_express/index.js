const express = require("express")
const path = require("path")
const userRouter = require("./routes/users")
const goodRouter = require("./routes/goods")
const studentRouter = require("./routes/students")
const cookieParser = require("cookie-parser")

const app = express()
app.set("view engine", "ejs")
app.set("views", path.resolve(__dirname, "views"))
app.use(express.static(path.resolve(__dirname, "public")))
app.use(express.urlencoded())
app.use("/users", userRouter)
app.use("/goods", goodRouter)
app.use("/students", studentRouter)
app.use(cookieParser())
app.get("/", (req, res) => {
    res.render("login")
})

app.get("/get-cookie", (req, res) => {
    // 给客户端发一个cookie
    res.cookie("username", "admin")
    res.send("Cookie sent")
})

app.get("/hello", (req, res) => {
    /* 
        需要安装中间件来使得express可以解析cookie
        1. 安装 cookie-parser
        2. 引入 const cookieParser = require("cookie-parser")
        3. 设置中间件 app.use(cookieParser())
    */
    console.log(req.cookies)
    res.send("hello route")
})

// app.use((req, res)=> {
//     res.status(404).send("I don't have this page")
// })
app.post("/login", (req, res) => {
    /* 
        我们这个登陆形同虚设
        HTTP 协议本身是一个无状态的协议
            服务器无法区别请求是否发自同一个客户端

        cookie
            cookie是HTTP协议中用来解决无状态问题的技术
            cookie本质就是一个头
                服务器以响应头的形式将cookie发送给客户端
                客户端收到以后会将其存储 并在下次向服务器发送请求的时候将其传回
                这样服务器就可以根据cookie来识别客户端了
    */
    const {username, password} = req.body
    if(username === "admin" && password === "123") {
        res.cookie("username", username)
        res.redirect("/students/list")
    } else {
        res.send("failed")
    }
})
app.listen(3000, () => {
    console.log("running")
})