// nodejs里一个非常方便的客户端请求代理模块
var superagent = require('superagent-charset')(require('superagent'));

function fetUrl(url, callback) {
    superagent
        .get(url)
        .timeout({
            response: 10000,
            deadline: 100000
        })
        .end(function (err,res) {
            if(err){
                console.error(err)
            }
            callback(res);
        })
}


var phantomjs = require('phantomjs-prebuilt')
var webdriverio = require('webdriverio')
var wdOpts = { desiredCapabilities: { browserName: 'phantomjs' } }

function getTimeDiff (bTime) {
    return (Date.now() - bTime)/1000;
}

function fetUrlDevice (url, callback) {
    var beginTime = 0;

    phantomjs.run('--webdriver=4444').then(program => {
        beginTime = Date.now();

        webdriverio.remote(wdOpts).init()
        .url(url)
        .getHTML('.bbs_detail_item').then(res => {
            console.log(getTimeDiff(beginTime))
        })
    })      
}
 
module.exports = {
    fetUrl,
    fetUrlDevice
}