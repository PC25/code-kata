const express = require("express");
const router = express.Router();
const path = require("path");

router.post("/decision", (req, res, next) => {
    const preAssessmentValue = req.body.preAssessmentValue.slice(0, -1);
    const accept = preAssessmentValue > 60
    res.render("applicationOutcome", { accept: accept });
});

module.exports = router;
