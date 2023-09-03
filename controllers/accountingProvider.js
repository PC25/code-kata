const express = require('express')
const router = express.Router()
const path = require('path')
const BalanceSheet = require('../models/balanceSheet')
const preAssess = require('../util/preAssessmentUtil')

router.use('/accounting', (req, res, next) => {
    const businessName = req.body.businessName
    const yearEstablished = req.body.yearEstablished
    const loanAmount = req.body.loanAmount
    const accountingProvider = req.body.accountingProvider

    BalanceSheet.fetch((sheet) => {
        const preAssessmentResult = preAssess(loanAmount, sheet)
        res.render('applicationReview', {
            businessName: businessName,
            yearEstablished: yearEstablished,
            loanAmount: loanAmount,
            accountingProvider: accountingProvider,
            preAssessmentValue: preAssessmentResult.preAssessmentVal,
            profitOrLossSum: preAssessmentResult.profitOrLossSum
        })
    })
})

module.exports = router