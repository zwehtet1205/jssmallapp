// GET UI 
const getcurrentmonth = document.getElementById("curmonth");
const getcuryear = document.getElementById("curyear");
const getuimonths = document.getElementById("months");
const getuiyears = document.getElementById("years");
const getcaldays = document.getElementById("caldays");
const getmonthbtn = document.querySelector(".month-bnt");
const getyearbtn = document.querySelector(".year-btn");

const months = ["Jan","Feb","Mar","Apr","May","Jun","July","Aug","Sep","Oct","Nov","Dec"];
let startyear = 2020;
let endyear = 2030;

let month,year;

window.addEventListener("load",function(){

    // console.log("Hay i am working");

    let getday = new Date();
    month = getday.getMonth();
    year = getday.getFullYear();

    // console.log(getday);
    // console.log(month);
    // console.log(year);

    getcurrentmonth.textContent = months[month];
    getcuryear.textContent = year;

    initmonths();
    inityears();
    initdays();
});

function initmonths(){

    // console.log("I am month");

    getuimonths.innerHTML = '';

    for(let x = 0; x < months.length ; x++){
        // console.log(x);

        const newdiv = document.createElement('div');
        newdiv.textContent = months[x];
        newdiv.classList.add("dropdown-item");

        // newdiv.addEventListener("click",function(){
        //     // Method 1
        //     // console.log(x);
        //     // month = x;
        //     // getcurrentmonth.textContent = months[x];
        //     // initdays();

        //     // Method 2
        //     // console.log(this);
        //     month = months.indexOf(this.textContent);
        //     getcurrentmonth.textContent = months[month];
        //     initdays();

        // });

        newdiv.onclick = updatedays(x);

        // console.log(newdiv);
        getuimonths.appendChild(newdiv);
    }
}

function updatedays(idx){
    // console.log(idx);

    let selectmonth = idx;

    return function(){
        month = selectmonth;
        // console.log(month);

        getcurrentmonth.textContent = months[month];
        initdays();
    }

}

function inityears(){
    // console.log("I am year");
    getuiyears.innerHTML = '';
    
    for(let x = startyear; x <= endyear; x++){
        // console.log(x);

        const newdiv = document.createElement('div');
        newdiv.textContent = x;
        newdiv.classList.add("dropdown-item");

        // newdiv.addEventListener("click",function(){
        //     // method 1 
        //     // console.log(x);
        //     year = x;
        //     getcuryear.textContent = year;

        //     // method 2
        //     //  console.log(this);
        //     // year = this.textContent;
        //     // getcuryear.textContent = year;

        //     initdays();

        // });


        // newdiv.onclick = updateyears(x);

        // => Method 4 
        // newdiv.onclick = ()=>{
        //     // console.log(x); 
        //     year = x;
        //     getcuryear.textContent = year;
        //     initdays();
        // }

        // => Method 5
        newdiv.onclick = (function(){
           // console.log(x);

            let selectyear = x;

            return function(){
                year = selectyear;
                // console.log(year);

                getcuryear.textContent = year;
                initdays();
            }
        })();



        // console.log(newdiv);
        getuiyears.appendChild(newdiv);
    }
}

function updateyears(idx){
    // console.log(idx);

    let selectyear = idx;

    return function(){
        year = selectyear;
        // console.log(year);

        getcuryear.textContent = year;
        initdays();
    }

}

function initdays(){
    // console.log("I am day");
    getcaldays.innerHTML = '';

    let tmpdays = new Date(year,month,0);
        // console.log(tmpdays); // Sun Mar 31 2024 00:00:00 GMT+0630 (Myanmar Time)
    let getalldays = alldays(year,month);
        // console.log(getalldays); // 30 
    let getendday = tmpdays.getDay();
        // console.log(getendday); // 0 
        
    for(let x = 0; x <= getendday; x++){
        // console.log(x); // 0

        let newlabel = document.createElement('label');
        newlabel.className = "day blank";
        // console.log(newlabel); 
        
        getcaldays.appendChild(newlabel);

    }

    for(let y = 0; y < getalldays; y++){
        // console.log(y); // 0

        let newlabel = document.createElement('label');
        newlabel.textContent = y + 1;
        newlabel.classList.add("day");
        // console.log(newlabel); 
        
        getcaldays.appendChild(newlabel);

    }

 
}

function alldays(year,month){
    // console.log(year,month); // 2024 3 

    let curalldays = new Date(year,month+1,0);
    // console.log(curalldays); 
    curalldays = curalldays.getDate();
    // console.log(curalldays); 
    return curalldays;
}

// getmonthbtn.addEventListener("click",function(){
//     if(this.lastElementChild.classList.contains("show")){
//         this.lastElementChild.classList.remove("show");
//     } else {
//         this.lastElementChild.classList.add("show");
//     }
// });

getyearbtn.addEventListener("click",function(){
    if(this.lastElementChild.classList.contains("show")){
        this.lastElementChild.classList.remove("show");
    } else {
        this.lastElementChild.classList.add("show");
    }
});

// console.log(new Date());
                    // y   m d 
// console.log(new Date(2023,1,10));
// console.log(new Date(2023,0,0));
// console.log(new Date(2023,5,0));
// console.log(new Date(2023,1,30));


