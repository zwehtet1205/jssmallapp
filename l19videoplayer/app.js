// get UI 

const getcontainer = document.querySelector(".container");
const getvideoscreen =  document.getElementById('videoscreen');
const playbtn = document.getElementById('play'),
    prevbtn = document.getElementById('prev'),
    nextbtn = document.getElementById('next'),
    stopbtn = document.getElementById('stop');
const getprogress = document.getElementById('progress'),
    getprogressbar = document.getElementById('progress-bar');
const getdisplaytime = document.getElementById('displaytime');
const gettitle = document.getElementById('title');

const getopenfullscreen = document.getElementById("openfullscreen");
const getclosefullscreen = document.getElementById("closefullscreen");

const videos = ["samplevideo1","samplevideo2"];

let curridx = 0;

loadvideo(videos[curridx]);

function loadvideo(video){
    getvideoscreen.src = `./source/${video}.mp4`;
    gettitle.textContent = video;
}

function playvideo(){
    playbtn.querySelector("i.fas").classList.remove("fa-play");
    playbtn.querySelector("i.fas").classList.add("fa-pause");

    getvideoscreen.play();
}

function pausevideo(){  
    playbtn.querySelector("i.fas").classList.remove("fa-pause");
    playbtn.querySelector("i.fas").classList.add("fa-play");

    getvideoscreen.pause();
}

function playpausevideo(){
    if(getvideoscreen.paused){
        playvideo();
    } else {
        pausevideo();
    }
}

function nextvideo(){
    curridx += 1;

    if(curridx > videos.length-1){
        curridx = 0;
    }

    loadvideo(videos[curridx]);
    playvideo();
}

function previousvideo(){
    curridx -= 1;

    if(curridx < 0){
        curridx = videos.length-1;
    }

    loadvideo(videos[curridx]);
    playvideo();
}

function stopvideo(){
    getvideoscreen.currentTime = 0;
    pausevideo();
}

function updateprogress(e){

    // const currentTime = e.target.currentTime;
    // const duration = e.target.currentTime;
    // console.log(currentTime,duration);

    // const {currentTime} = e.target;
    // const {duration} = e.target;
    // console.log(currentTime,duration);

    // const {currentTime,duration} = e.target;
    // console.log(currentTime,duration);

    const [currentTime,duration] = [e.target.currentTime,e.srcElement.duration];
    // console.log(currentTime,duration);

    if(getvideoscreen.currentTime === 0){
        getprogressbar.style.width = "0%";
    } else {
        const progresspercent = (currentTime/duration) * 100;

        getprogressbar.style.width = `${progresspercent}%`;
    }

    let getmins = Math.floor(getvideoscreen.currentTime/60);
    let getsecs = Math.floor(getvideoscreen.currentTime%60);

    // if(getmins < 10 ){
    //     // getmins = "0"+ getmins;
    //     getmins = "0"+ String(getmins);
    // }

    // if(getsecs < 10 ){
    //     // getsecs = "0"+ getsecs;
    //     getsecs = "0"+ String(getsecs);
    // }

    const minutevalue = getmins.toString().padStart(2,"0");
    const secoundvalue = getsecs.toString().padStart(2,"0");
    // console.log(minutevalue,secoundvalue);

    getdisplaytime.innerText = `${minutevalue}:${secoundvalue}`;

}

function setprogress(e){
    const getclientwidth = e.target.clientWidth;
    const getclickx = e.offsetX;
    const duration = getvideoscreen.duration;

    getvideoscreen.currentTime = (getclickx/getclientwidth) * duration;

}

function openfullscreen(){
    if(getcontainer.requestFullscreen){
        getcontainer.requestFullscreen(); //standard
    } else if(getcontainer.mozRequestFullscreen){
        getcontainer.mozRequestFullscreen(); // fire-fox
    } else if(getcontainer.webkitRequestFullscreen){
        getcontainer.webkitRequestFullscreen(); // chrome,safari,opera
    } else if(getcontainer.msRequestFullscreen){
        getcontainer.msRequestFullscreen(); // ie , edge
    }  

    getopenfullscreen.style.display = "none";
    getclosefullscreen.style.display = "inline-block";
}

function closefullscreen(){
    if(document.exitFullscreen){
        document.exitFullscreen(); //standard
    } else if(document.mozCancelFullscreen){
        document.mozCancelFullscreen(); // fire-fox
    } else if(document.webkitExitFullscreen){
        document.webkitExitFullscreen(); // chrome,safari,opera
    } else if(document.msExitFullscreen){
        document.msExitFullscreen(); // ie , edge
    }  

    getclosefullscreen.style.display = "none";
    getopenfullscreen.style.display = "inline-block";
}



getvideoscreen.addEventListener("timeupdate",updateprogress);
getvideoscreen.addEventListener("ended",nextvideo);
playbtn.addEventListener("click",playpausevideo);
nextbtn.addEventListener("click",nextvideo);
prevbtn.addEventListener("click",previousvideo);
stopbtn.addEventListener("click",stopvideo);
getprogress.addEventListener("click",setprogress);

getopenfullscreen.addEventListener("click",openfullscreen);
getclosefullscreen.addEventListener("click",closefullscreen);

// 5VD 