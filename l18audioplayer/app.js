// get UI 

const getaudioscreen =  document.getElementById('audioscreen');
const playbtn = document.getElementById('play'),
    prevbtn = document.getElementById('prev'),
    nextbtn = document.getElementById('next'),
    stopbtn = document.getElementById('stop');
const getprogress = document.getElementById('progress'),
    getprogressbar = document.getElementById('progress-bar');
const getvolprogress = document.getElementById('volumeprogress');
const getdisplaytime = document.getElementById('displaytime');

const audios = ['sample1','sample2','sample3'];

let curridx = 0;
// console.log(audios[curridx]);

// loadaudio(audios[curridx]);

function loadaudio(audio){
    getaudioscreen.src = `./source/${audio}.mp3`;
}

function playaudio(){

    loadaudio(audios[curridx]);
    playbtn.querySelector('i.fas').classList.remove('fa-play');
    playbtn.querySelector('i.fas').classList.add('fa-pause');
    
    getaudioscreen.play(); // default function
}

function pauseaudio(){
  
    playbtn.querySelector('i.fas').classList.add('fa-play');
    playbtn.querySelector('i.fas').classList.remove('fa-pause');
    
    getaudioscreen.pause(); // default function  
}

function playandpauseaudio(){

    // paused // default keywork for audio/video
    if(getaudioscreen.paused){
        playaudio();
    } else {
        pauseaudio();
    }

}

function nextaudio(){
    curridx++;
    if(curridx>audios.length-1){
        curridx = 0;
    }

    loadaudio(audios[curridx]);
    playaudio();

}

function prevaudio(){
    curridx++;
    if(curridx>audios.length-1){
        curridx = 0;
    }

    loadaudio(audios[curridx]);
    playaudio();

}

function updateprogress(e){
    const {duration} = e.target;
    const {currentTime} = e.target;

    if(currentTime === 0) {
        getprogressbar.style.width = "0";
    }else{
        const progresspercent = (currentTime/duration)*100;

        getprogressbar.style.width = `${progresspercent}%`;
    }

    const mins = Math.floor((duration-currentTime)/60);
    const secs = Math.floor((duration-currentTime)%60);

    const minutevalue = mins.toString().padStart(2,'0');
    const secondvalue = secs.toString().padStart(2,'0');

    getdisplaytime.innerText = `${minutevalue}:${secondvalue}`;

}



function stopaudio(){
    getaudioscreen.currentTime = 0;
    getprogressbar.style.width = "0%";

    pauseaudio();
}

function volumecontrol(){
    // console.log(getvolprogress.value);
    // console.log(getaudioscreen.volume);

    // volume // default key from audio/video
    getaudioscreen.volume = getvolprogress.value/100;

    // 1 is default(100%)
    // 0.5 half volume (50%)
    // 0 mute (0%)
}


function progressaudioclick(e){
    const width = this.clientWidth;
    // console.log(width);

    const clickx= e.offsetX;
    // console.log(clickx);

    const getduration = getaudioscreen.duration;
    // console.log(getduration);

    getaudioscreen.currentTime = (clickx/width) * getduration ;
    // console.log(getaudioscreen.currentTime);
}

getaudioscreen.addEventListener('timeupdate',updateprogress);
// getaudioscreen.addEventListener('play',playaudio);
// getaudioscreen.addEventListener('pause',pauseaudio);

playbtn.addEventListener('click',playandpauseaudio);
nextbtn.addEventListener('click',nextaudio);
prevbtn.addEventListener('click',prevaudio);
stopbtn.addEventListener('click',stopaudio);
getvolprogress.addEventListener('change',volumecontrol);
getprogress.addEventListener('click',progressaudioclick);



// 29AD 

