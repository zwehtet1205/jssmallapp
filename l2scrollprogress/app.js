//UI 

const getprogressbar = document.getElementById("progress-bar");

window.onscroll =  function(){
	// console.log('Hay');

	scrollpoint();
};

function scrollpoint(){
	// console.log("hay");

	let getscrolltop = document.documentElement.scrollTop;
	// console.log(getscrolltop); 

	let getclientheight = document.documentElement.clientHeight;
	// console.log(getclientheight);

	let getscrollheight = document.documentElement.scrollHeight;
	// console.log(getscrollheight);

	let calheight = getscrollheight - getclientheight;
	// console.log(calheight); 

	// let getfinal = Math.floor(getscrolltop * 100 / calheight);
	// console.log(getfinal); 

	let getfinal = Math.floor((getscrolltop/calheight)*100);
	// console.log(getfinal);

	getprogressbar.style.width = `${getfinal}%`;




};

function printme(){
	// console.log("Hay");

	window.print();
}