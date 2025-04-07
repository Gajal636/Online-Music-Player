 
        
        var welcome=document.getElementById("welcome");
        var icon = document.getElementById("icon");
        icon.onclick=function(){
            // mySong.play();
          if(welcome.paused){
            welcome.play();
            icon.src="pause.png";
          }
          else{
            welcome.pause();
            icon.src="play.png";
          }
        }
        
    