const preAssess = (loanAmout, balanceSheet) => {
    var profitOrLossSum = 0
    var assetSum = 0
    var month = 0
    for (let entry of balanceSheet) {
        profitOrLossSum += entry.profitOrLoss
        assetSum += entry.assetsValue
        if (month++ == 12) break
    }
    var preAssessmentVal = 20
    if (assetSum / month > loanAmout) preAssessmentVal = 100
    else if (profitOrLossSum > 0) preAssessmentVal = 60
    return { profitOrLossSum, preAssessmentVal }
}

module.exports = preAssess