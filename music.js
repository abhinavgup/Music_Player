var background_image=document.getElementById('back');

var audio=document.querySelector('audio');
var main_card=document.getElementById('car');
var image=document.getElementById('img');
var play_pause=document.getElementById('play');
var forward=document.getElementById('forward');
var backward=document.getElementById('backward');
var start_time=document.querySelector('.initial-time');
var final_time=document.querySelector('.final-time');
var artist=document.getElementById('fi');
var song1=document.getElementById('se');
var progressbar=document.getElementById('slider');


var songs=['./assets/music/Tum_Hi.mp3','./assets/music/Numb.mp3','./assets/music/Duniya.mp3','./assets/music/Tera_ban.mp3','./assets/music/Galliyan.mp3'];
var images=['./assets/images/ashiqui.jpg','./assets/images/linkinpark.jpg','./assets/images/duniya.jpg','./assets/images/kabir.jpg','./assets/images/galiya.jpg'];
var artists=['Arijit Singh','Linkin park','Akhil','Tulsi Kumar','Ankit Tiwari'];
var playlist=['Tum Hi Ho','Numb','Duniya','Tera Ban Jaunga','Galiyan'];



let play=true;

function playpause(){
    audio=document.querySelector('audio');
    play_pause=document.querySelector('#play');
    image=document.getElementById('img');

if(play==true){


play_pause.src='./assets/icons/pause_icon.png'
image.style.transform="scale(1.02)";
audio.play();
play=false;


}
else{
    
    play_pause.src='./assets/icons/play_icon.png'
     image.style.transform="scale(1)";
     audio.pause();
     play=true;
}

}
audio=document.querySelector('audio');
audio.addEventListener('ended', function(){
    nexsong();
});



songIndex=0;

function nextsong(){

audio=document.querySelector('audio');

artist=document.getElementById('fi');
song1=document.getElementById('se');
background_image=document.getElementById('back');
var main_card=document.getElementById('car');
image=document.getElementById('img');

songIndex++;


if(songIndex>4){
    songIndex=0;
    main_card.style.position='relative';
    //  main_card.style.top='-20px';
    //  main_card.style.left='480px';
}



audio.src=songs[songIndex];
image.src=images[songIndex];
artist.innerHTML=artists[songIndex];
song1.innerHTML=playlist[songIndex];
background_image.src=images[songIndex];

if(songIndex>0){
    main_card.style.position='relative';
    // main_card.style.top='-770px';
}
playpause();
play=true;  

}

function previoussong(){



    audio=document.querySelector('audio');

    artist=document.getElementById('fi');
    song1=document.getElementById('se');
    background_image=document.getElementById('back');
    var main_card=document.getElementById('car');
    image=document.getElementById('img');
    
    songIndex--;
    
    
    if(songIndex<0){
        songIndex=4;
        // main_card.style.position='relative';
        // main_card.style.top='-770px'
        
    }
    
    
    
    audio.src=songs[songIndex];
    image.src=images[songIndex];
    artist.innerHTML=artists[songIndex];
    song1.innerHTML=playlist[songIndex];
    background_image.src=images[songIndex];
    
   
    playpause();
    play=true;  

}


function  update(){

progressbar=document.getElementById('slider');
audio=document.querySelector('audio');

progressbar.max=audio.duration
progressbar.value=audio.currentTime;
start_time=document.querySelector('.initial-time');
final_time=document.querySelector('.final-time');

start_time.innerHTML=(time(Math.floor(audio.currentTime)));


if(final_time.innerHTML==="Nan:Nan"){

    final_time.innerHTML="0:00";
}
else{
    final_time.innerHTML=(time(Math.floor(audio.duration)))
}

}


setInterval(update,700);



function time(seconds){

 var min=Math.floor(seconds/60);
 var sec=Math.floor(seconds-(min*60));   

if (sec < 10){ 
        sec  = `0${sec}`;
    };

 return `${min}:${sec}` ;


}




function change(){

audio.currentTime=progressbar.value;

}
