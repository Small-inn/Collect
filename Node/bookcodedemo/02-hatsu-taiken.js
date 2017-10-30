var http = require('http');
var urls = ['www.baidu.com', 'www.taobao.com', 'www.jd.com'];

function fetchPage(url) {
    var start_time = new Date();
    http.get({host:url}),function(res){
        console.log('Got response from:' + url);
        console.log('Response took:',new Date() - start_time,'ms');
    }
}
for(var i = 0; i < urls.length; i++){
    fetchPage(urls[i]);
}