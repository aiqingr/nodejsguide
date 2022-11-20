/*
 * @Author: Tongyang Ni ntyaiqingr@gmail.com
 * @Date: 2022-11-06 18:02:22
 * @LastEditors: Tongyang Ni ntyaiqingr@gmail.com
 * @LastEditTime: 2022-11-06 18:03:50
 * @FilePath: /nodejsguide/nodejsKnowledge/03_express/routes/good.js
 * @Description: 
 * 
 * Copyright (c) 2022 by Tongyang Ni ntyaiqingr@gmail.com, All Rights Reserved. 
 */
const express = require("express")
const router = express.Router()

router.get("/list", (req, res) => {
    res.send("Goods list")
})

module.exports = router