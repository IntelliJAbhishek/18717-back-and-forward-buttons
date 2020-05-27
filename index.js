videojs.registerPlugin('errorHandler', function() {
  var myPlayer = this;
  myPlayer.on('error',()=>{
        window.ReactNativeWebView.postMessage(JSON.stringify({type:'error'})) 
  });
})

