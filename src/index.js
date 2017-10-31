// nodejs里一个非常方便的客户端请求代理模块
var superagent = require('superagent-charset')(require('superagent'));
// 与jQuery类似的API,用于解析HTML
var cheerio = require('cheerio');

var fs = require('fs');
var path = require('path');
var main_url = 'http://bbs.qyer.com/thread-1404111-1.html';

// 辅助
var util = require('./util');

util.fetch.fetUrlDevice(main_url, function (res) {
    // console.log(res);

    var $ = cheerio.load(res);

    $('#imgid').find('.imgitem').each(function (idx, element) {
        $element = $(element)
        // $img = $element.find('img.main_img')
        // console.log($element)
        var url = $element.find('img.main_img').attr('src')
        // console.log(url);
    })
});