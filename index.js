const player=videojs.getPlayer(document.getElementsByTagName('video-js')[0].id);
player.ready(()=>{
  var pip= document.getElementsByClassName("vjs-picture-in-picture-control");
  if(pip[0] && pip[0].offsetParent){
    pip[0].remove();
  }
});

