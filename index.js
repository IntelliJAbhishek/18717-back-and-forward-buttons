var pip= document.getElementsByClassName("vjs-picture-in-picture-control")[0].remove();
if(pip[0] && pip[0].offsetParent){
  pip[0].remove();
}
