const express = require("express")
const path = require("path")

const USERS = [
    {
        username: "admin",
        password: "123",
        nickname: "super admin"
    },
    {
        username: "sun",
        password: "123",
        nickname: "齐天大圣"
    }

]

const app = express()
app.use(express.static(path.resolve(__dirname, "public")))
app.use(express.urlencoded())

app.post("/login", (req, res) => {
    const username = req.body.username
    const password = req.body.password
    // method one
/*     for(const user of USERS) {
        console.log(user)
        if(user.username === username) {
            if(user.password === password) {
                res.send(`<h1>Welcome ${user.nickname}</h1>`)
                return 
            }
        }
    }

    res.send(`<h1>Username or password is wrong</h1>`) */
    // method two
    const loginUser = USERS.find(item => {
        return item.username === username && item.password === password
    })

    if(loginUser) {
        res.send(`<h1>Welcome ${loginUser.nickname}</h1>`)
    } else {
        res.send(`<h1>Username or password is wrong</h1>`)
    }
})

app.post("/register", (req, res) => {
    console.log("register")
    const {username, password, repa, nickname} = req.body
    const user = USERS.find(item => {
        return item.username === username || item.nickname === nickname
    })
    console.log(user)
    if(!user) {
        USERS.push({
            username,
            password,
            nickname
        })

        res.send("<h1>Congrat</h1>")
    } else {
        res.send("<h1>Failed</h1>")
    }

})

app.listen(3000, (req, res) => {
    console.log("Server running");
})