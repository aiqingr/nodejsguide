/*
 * @Author: Tongyang Ni ntyaiqingr@gmail.com
 * @Date: 2022-11-06 18:09:01
 * @LastEditors: Tongyang Ni ntyaiqingr@gmail.com
 * @LastEditTime: 2022-11-06 22:23:49
 * @FilePath: /nodejsguide/nodejsKnowledge/03_express/routes/students.js
 * @Description: 
 * 
 * Copyright (c) 2022 by Tongyang Ni ntyaiqingr@gmail.com, All Rights Reserved. 
 */
const express = require("express")
const router = express.Router()
let STUDENTS_ARR = require("../data/students.json")
const fs = require("fs/promises")
const path = require("path")
const cookieParser = require("cookie-parser")

router.use(cookieParser())
    
router.get("/list", (req, res) => {
    console.log("req==============>", req)
    console.log(req.cookies.username);
    if(req.cookies) {
        res.render("students", {stus: STUDENTS_ARR})
    } else {
        res.redirect("/")
    }
})

router.post("/add", (req, res, next)=> {
    const id = STUDENTS_ARR.at(-1)?STUDENTS_ARR.at(-1).id + 1 : 1
    const newUser = {
        id,
        name: req.body.name,
        age: +req.body.age,
        gender: req.body.gender,
        address: req.body.address
    }
    STUDENTS_ARR.push(newUser)
    console.log(STUDENTS_ARR)
    // 调用next 交给后续的路由
    next()
})

router.get("/delete", (req, res, next) => {
    const id = +req.query.id
    console.log(id)
    STUDENTS_ARR = STUDENTS_ARR.filter((stu)=> stu.id !== id)
    next()
})

router.get("/update", (req, res)=> {
    const id = +req.query.id
    const updatedStu = STUDENTS_ARR.find(item => item.id === id)
    res.render("updates", {stu: updatedStu})
})

router.post("/update-student", (req, res, next) => {
    const {id, name, age, gender, address} = req.body
    const user = STUDENTS_ARR.find(item => item.id == id)
    user.name = name
    user.age = +age
    user.gender = gender
    user.address = address
    next()
})
router.use((req, res)=> {
    fs.writeFile(
        path.resolve(__dirname, "../data/students.json"), 
        JSON.stringify(STUDENTS_ARR)
    ).then(()=> {
        res.redirect("/students/list")
    })
    .catch((err)=>{
        console.log("err",err)
    })
})
module.exports = router