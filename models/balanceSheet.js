const path = require('path')
const fs = require('fs')

module.exports = class BalanceSheet {
    constructor(year, month, profitOrLoss, assetsValue) {
        this.year = year
        this.month = month
        this.profitOrLoss = profitOrLoss
        this.assetsValue = assetsValue
    }

    static fetch(cb) {
        const p = path.join(
            path.dirname(process.mainModule.filename),
            'data',
            'balanceSheet.json'
        )
        fs.readFile(p, (err, fileContent) => {
            if(err) {
                cb([])
            }
            cb(JSON.parse(fileContent))
        })
    }
}