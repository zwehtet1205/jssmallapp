// UI 
const getmodal = document.querySelector(".modal");
const getmodalimg = document.querySelector(".modal-img");
const getcaption = document.querySelector(".caption");
const getbtnclose = document.querySelector(".btn-close");

function shownow(e){
    // console.log(e.target.src);

    getmodalimg.src = e.target.src;
    getcaption.textContent = e.target.alt;

    getmodal.style.display = "block";

    
}

getbtnclose.onclick = function(){
    getmodal.style.display = "none";
};

document.addEventListener('click',function(e){
    if(e.target===getmodal){
        getmodal.style.display = "none";
    }
})
