const express = require('express');
const app = express()
const ejs = require('ejs'); 
const router = require("./routes/reg.routes.js")

app.set('view engine', 'ejs')
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.use(router)

app.listen(3002, () => {
        console.log('running on 3002')
})