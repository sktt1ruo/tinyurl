/**
 * Created by Malena on 2017/1/8.
 */
var express = require('express');
var router = express.Router();
var urlService = require('../services/urlService');

router.get("*", function (req, res) {
    var shortUrl = req.originalUrl.slice(1);
    var longUrl = urlService.getLongUrl(shortUrl);
    console.log(longUrl);
    if (longUrl) {
        res.redirect(longUrl);
    }
});

module.exports = router;