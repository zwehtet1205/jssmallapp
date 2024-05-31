//UI
const getbox = document.querySelector(".box");
const getbtns = document.querySelector(".btns");
const getboxtitle = document.getElementById("boxtitle");

getbox.addEventListener("click",function(e){
	// console.log("hay");

	// getbtns.classList.toggle("show"); 
	getbtns.classList.add("show");

	// console.log(e.target);

	smallmenu(e.target);
});

getbox.addEventListener("dblclick",function(){
	getbtns.classList.remove("show");
});

function smallmenu(ele){
	// console.log(ele);

	if(ele.classList.contains("btn-icon")){
		// console.log("yes");

		const geturl = ele.getAttribute("data-links");

		// console.log(geturl);

		window.location.href = geturl;

	} else if(ele.classList.contains("icn")){
		const geturl = ele.parentElement.getAttribute("data-links");
		// console.log(geturl);
		window.location.href = geturl;
	}else{
		// console.log("no");
	}
}

dragme(getbox);

function dragme(box){

	let getcx,getcy,setcx,setcy;

	if(getboxtitle){
		getboxtitle.onmousedown = mousedown;
	}

	// console.log("I am dragme function");

	function mousedown(e){
		// console.log("I am mousedown function");
		getcx = e.clientX;
		getcy = e.clientY;
		// console.log("step 1 ", getcx, getcy);

		document.onmousemove = dragnow;
		document.onmouseup = stopdrag;

		getbtns.classList.remove("show");
	}
	function dragnow(e){
		// console.log("I am dragnow function");

		setcx = getcx - e.clientX;
		setcy = getcy - e.clientY;

		// console.log("step 2 = ",setcx,setcy);

		getcx = e.clientX; // reset & overwrite clientX again new position moved element's location
		getcy = e.clientY ;// reset & overwrite clientY again new position moved element's location

		const btnleft = box.offsetLeft;
		const btntop = box.offsetTop;

		// console.log(btnleft,btntop);
		// console.log(btnleft-setcx,btntop-setcy);

		box.style.left = (btnleft-setcx) + "px";
		box.style.top = (btntop-setcy) + "px";

	}
	function stopdrag(){
		// console.log("I am stopdrag function");

		document.onmousemove = null;
		document.onmouseup = null;
	}
}

