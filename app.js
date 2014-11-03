
var youtube = require('youtube-node');

youtube.setKey('AIzaSyB1OOSpTREs85WUMvIgJvLTZKye4BVsoFU');

youtube.search('World War z Trailer', 2, function(resultData) {
    console.log('resultData =' , resultData);
    console.log('resultData.items',  resultData.items );    
});


youtube.getById('HcwTxRuq-uk', function(result) {
    // console.log('result =' , result);
    // console.log('content details =' , result.contentDetails);    
});


