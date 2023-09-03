const express = require('express')
const router = express.Router()
const path = require('path')
const BalanceSheet = require('../models/balanceSheet')
router.use('/accounting', (req, res, next) => {
    console.log(req.body)
    const businessName = req.body.businessName
    const yearEstablished = req.body.yearEstablished
    const loanAmount = req.body.loanAmount
    const accountingProvider = req.body.accountingProvider
    const preAssessmentValue = 70       //util

    BalanceSheet.fetch((sheet) =>
        res.render('applicationReview', {
            businessName: businessName,
            yearEstablished: yearEstablished,
            loanAmount: loanAmount,
            accountingProvider: accountingProvider,
            preAssessmentValue: preAssessmentValue,
            balanceSheet: sheet
        })
    )
})

module.exports = router