/**
 * Created by Malena on 2017/1/8.
 */
var express = require('express');
var router = express.Router();
var urlService = require('../services/urlService');
var path = require('path');

router.get("*", function (req, res) {
    var shortUrl = req.originalUrl.slice(1);
    var longUrl = urlService.getLongUrl(shortUrl);
    console.log(longUrl);
    if (longUrl) {
        res.redirect(longUrl);
    } else {
        res.sendFile("404.html", {root: path.join(__dirname, '../public/views/')});
    }
});

module.exports = router;