const express = require('express')
const path = require('path')
const bodyParser = require('body-parser')

const BalanceSheet = require('./models/balanceSheet')
const accountingRoute = require('./controllers/accountingProvider')
const decisionRoute = require('./controllers/decisionProvider')
const app = express()
app.set('view engine', 'ejs')
app.set('views', 'views')

app.use(express.static(path.join(__dirname, 'public')))

app.use(bodyParser.urlencoded({ extended: false }))

app.use(accountingRoute)
app.use(decisionRoute)

app.use((req, res, next) => {
    res.sendFile(path.join(__dirname, 'views', 'applicationForm.html'))
})

app.listen(3000)