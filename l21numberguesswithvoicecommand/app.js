// UI

const minnum = document.querySelector(".minnumber"),
	maxnum = document.querySelector('.maxnumber'),
	getinput = document.querySelector('#guessnumber'),
	getbtn = document.querySelector('#btn');
	message1 = document.querySelector('.message1');
	message2 = document.querySelector('.message2');
	getgameform = document.getElementById('gameform');

const getmicbtn = document.getElementById("mic-btn");
const getvocctn = document.getElementById("voice-container");


const min = 1,
	max = 5,
	winningnum = 5;
	// winningnum = randomnum(min,max);

let gameleft = 5;

minnum.textContent = min;
maxnum.innerText = max;

window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

let getrec = new window.SpeechRecognition;

getmicbtn.addEventListener("click",function(){
	getrec.start();

	getrec.addEventListener("result",(e)=>talking(e));
});

function talking(ele){
	// console.log(ele);

	// console.log(ele.results[0][0].transcript);

	const micresult = ele.results[0][0].transcript;

	console.log(micresult);

	micmessage(micresult);

	getnumber(micresult);

}

function micmessage(msg){
	getvocctn.innerHTML = `<span> Did you say !!! ${msg}</span>`;
}

function getnumber(msg){
	const getnum = +msg;
	// console.log(getnum);
	// console.log(typeof getnum);

	console.log("abcd");

	if(Number.isNaN(getnum)){
		getvocctn.innerHTML = `<div>This is not a valid number.</div>`;
		return false;
	}

	console.log("efg");

	getinput.value = getnum;

	getrec.stop();

	
}

getbtn.addEventListener('click',function(e){
	// let guess = Number(getinput.value);
	// let guess = +getInput.value;
	let guess = parseInt(getinput.value);

	// console.log(guess);
	// console.log(typeof guess);

	if( guess < min || guess > max || isNaN(guess)){

		// message2.innerText = `Please enter number between ${min} to ${max}`;
		sentmessage2(`Please enter number between ${min} to ${max}`,"red")
	}

	if(guess === winningnum){

		//Gameover won

		//disabled getinput
		// getinput.disabled = true;

		//getinput border color to green
		// getinput.style.borderColor = "green";

		//message1
		// sentmessage1(`${winningnum} is correct! You Won`,"green");
		
		//play again ?
		// getbtn.value = "Play Again";

		gameover(true,`${winningnum} is correct! You Won`);


	}else{
		//Gameover LOse

		gameleft--;

		if(gameleft === 0){

			//Gameover lost

			//disabled getinput
			// getinput.disabled = true;

			//getinput border color to red
			// getinput.style.borderColor = "red";

			//message1
			// message1.innerText = `Game Over, You Lost, The correct number is ${winningnum}`;
			// message1.style.color = "red";

			// sentmessage1(`Game Over, You Lost, The correct number is ${winningnum}`,"red");

			//play again ?
			// getbtn.value = "Play Again";

			gameover(false,`Game Over, You Lost, The correct number is ${winningnum}`);

		}else{

			// Continue Game

			//getinput border color to red
			getinput.style.borderColor = "red";

			//message1
			// message1.innerText = `${guess} is not correct!, ${gameleft} guess left.`;
			// message1.style.color = "blue";

			sentmessage1(`${guess} is not correct!, ${gameleft} guess left.`,"blue")

		

			// clear getinput old value
			getinput.value = "";

			//auto focus getinput
			getinput.focus();

			document.body.classList.add('tryagain');



		}


	}



	e.preventDefault();


});

function sentmessage1(msg,color){
	message1.textContent = msg;
	message1.style.color = color;
}

function sentmessage2(msg,color){
	message2.textContent = msg;
	message2.style.color = color;


	setTimeout(function(){
		message2.textContent = "";
	},2000);
}



function gameover(won,msg){

	let color;


	won === true? color = "green" : color = "red";


	//disabled getinput
	getinput.disabled = true;

	//getinput border color to red
	getinput.style.borderColor = color;

	//message1
	sentmessage1(msg,color);

	//play again ?
	getbtn.value = "Play Again";

	getbtn.classList.add('playagain');


	if(won === true ){
		document.body.classList.add('win');
	}else{
		document.body.classList.add('lose');
	}

}

getgameform.addEventListener('mousedown',function(e){
	// if(e.target.classList.contains('playagain'))
	if(e.target.className === "btn playagain"){
		// console.log("i am working");

		window.location.reload();
	}
});

function randomnum(min,max){
	let getrdm = Math.floor(Math.random()*(max-min)+min);

	return getrdm;
}

console.log(winningnum);

// 3VC 