const express = require('express')
const router = express.Router()
const urlcontroller= require('../controller/urlcontroller')

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})






router.post('/url/shorten',urlcontroller.urlShortener)
router.get('/:urlCode',urlcontroller.getUrl)

module.exports = router