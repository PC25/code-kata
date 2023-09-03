const express = require('express')
const path = require('path')
const BalanceSheet = require('./models/balanceSheet')

const app = express()

app.use((req, res, next) => {
    BalanceSheet.fetch((sheet) => console.log(sheet))
    res.sendFile(path.join(__dirname, 'views', 'applicationForm.html'))
})

app.listen(3000)