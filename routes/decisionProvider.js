const express = require("express");
const router = express.Router();
const path = require("path");

router.post("/decision", (req, res, next) => {
    console.log(req.body);
    const preAssessmentValue = req.body.preAssessmentValue;
    console.log(preAssessmentValue);
    res.render("applicationOutcome", { accept: preAssessmentValue >= 60 });
});

module.exports = router;
