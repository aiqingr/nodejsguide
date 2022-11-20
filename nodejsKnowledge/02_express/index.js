const express = require("express")
const path = require("path")
const fs = require("fs/promises")
let STUDENTS = require("./data/students.json")

let name = "baigujing"
const app = express()
// 将ejs设置为默认的模版引擎
app.set("view engine", "ejs")
app.set("views", path.resolve(__dirname, "views"))
app.use(express.static(path.resolve(__dirname, "public")))
app.use(express.urlencoded())

app.get("/students", (req, res) => {
    /* 
        希望用户在访问students路由的时候 可以给用户返回一个显示有学生信息的网页
        html页面属于静态页面 创建娜娜的时候什么样子 用户看到的就是样子
        不会自动跟随服务器中的数据变化而变化

        有一种东西他长得像是个网页 但是它里边可以潜入变量
        这个东西在node中被称为模版

        在node中有很多模版引擎 都各具特色 ejs
        使用模版引擎的步骤：
        1 安装
        2 配置
        注意 模版引擎需要被express渲染后才能使用

        res.render() 用来渲染一个模版引擎 并将其返回浏览器
        可以将一个对象作为render的第二个参数传递 这样在模版中可以访问到这个对象
    */
    res.render("students", {stus: STUDENTS})
})

app.get("/set_name", (req, res)=> {
    name = req.query.name
    res.send("Changed successfully")
})

app.post("/student_add", (req, res)=> {
    // 获取用户信息
    const id = STUDENTS.at(-1)?STUDENTS.at(-1).id + 1 : 1
    const newUser = {
        id,
        name: req.body.name,
        age: +req.body.age,
        gender: req.body.gender,
        address: req.body.address
    }
    // 验证用户信息 省略

    // 将用户加入到数组中
    STUDENTS.push(newUser)
    console.log(STUDENTS)
    fs.writeFile(
        path.resolve(__dirname, "./data/students.json"), 
        JSON.stringify(STUDENTS)
    ).then(()=> {
        res.redirect("/students")
    })
    .catch((err)=>{
        console.log(err)
    })
    //直接在添加的路由中渲染ejs 会面临表单重复提交的问题
    // res.render("students", {stus: STUDENTS})
    // res.send("new user added")
})
/* 
    删除
        - 点击删除链接后 删除当前数据
        - 点击 删除 --》 删除id 为n的学生
        - 流程
            1. 点击删除链接
            2. 向路由发送请求 写一个新的路由
            3.  路由怎么写
                1） 获取学生的id
                2） 删除id为n的学生
                3） 将新的数组写入文件
                4） 重新定向到学生列表页面
*/
app.get("/delete", (req, res) => {
    const id = +req.query.id
    console.log(id)
    STUDENTS = STUDENTS.filter((stu)=> stu.id !== id)
    fs.writeFile(
        path.resolve(__dirname, "./data/students.json"), 
        JSON.stringify(STUDENTS)
    ).then(()=> {
        res.redirect("/students")
    })
    .catch((err)=>{
        console.log(err)
    })
})
/* 
    修改
        - 点击修改链接后，显示一个表单，表单中应该有要修改学生的信息
            用户对学生信息修改 修改后点击按钮提交表单
        - 流程
            1 点击修改的学生链接
            2 跳转到一个路由
                这个路由会返回一个页面 页面中有一表单 表单中应该显示学生的各种信息
            3 用户填写表单 单击按钮提交到一个新的路由
*/

app.get("/update", (req, res)=> {
    const id = +req.query.id
    const updatedStu = STUDENTS.find(item => item.id === id)
    console.log(updatedStu)
    res.render("updates", {stu: updatedStu})
})

app.post("/update-student", (req, res) => {
    //获取id
    const {id, name, age, gender, address} = req.body
    console.log(id,name,age,gender,address)
    const user = STUDENTS.find(item => item.id == id)
    console.log(user)
    user.name = name
    user.age = +age
    user.gender = gender
    user.address = address
    fs.writeFile(
        path.resolve(__dirname, "./data/students.json"), 
        JSON.stringify(STUDENTS)
    ).then(()=> {
        res.redirect("/students")
    })
    .catch((err)=>{
        console.log(err)
    })
})
app.listen(3000, () => {
    console.log("running")
})