// Get UI 
const languages = ["Nodejs","Reactjs","Vuejs","Laravel"];
const colors = ["red","skyblue","violet","yellow"];

const gettxtani = document.querySelector(".txtani");
const gettxtlights = document.querySelectorAll('.text-light');

// console.log(languages[0]); //Nodejs

// console.log(languages.indexOf("Reactjs")); //1
// console.log(languages.indexOf("laravel")); //-1
// console.log(languages.indexOf("Laravel")); //3

// console.log(colors[languages.indexOf("Reactjs")]); //skyblue
// console.log(colors[languages.indexOf("Vuejs")]); //violet

function* generator(){
	var idx = 0;

	while(true){
		yield idx++;

		if(idx > 3){
			idx = 0;
		}

	}
}

const genfun = generator();
// console.log(genfun.next().value); 
// console.log(genfun.next().value);
// console.log(genfun.next().value);
// console.log(genfun.next().value);
// console.log(genfun.next().value);
// console.log(genfun.next().value);

// console.log(languages[genfun.next().value]);
// console.log(languages[genfun.next().value]);
// console.log(languages[genfun.next().value]);
// console.log(languages[genfun.next().value]);
// console.log(languages[genfun.next().value]);
// console.log(languages[genfun.next().value]);

function showwords(word){
	
	let x = 0;

	gettxtani.innerHTML = '';
	gettxtani.classList.add(colors[languages.indexOf(word)]);

	// gettxtani.innerHTML = word;
	// gettxtani.innerHTML = word[0];
	// gettxtani.innerHTML += word[1];
	// gettxtani.innerHTML += word[2];

	let showinterval = setInterval(function(){
		if( x >= word.length){
			clearInterval(showinterval);
			deletewords();
		}else{
			gettxtani.innerHTML += word[x];
			x++;
		}
	},300);

}

function deletewords(){
	
	let getword = gettxtani.innerHTML;

	let getlastinx = getword.length-1;

	

	let delinterval = setInterval(function(){
		if( getlastinx >= 0){
			gettxtani.innerHTML = gettxtani.innerHTML.substring(0,gettxtani.innerHTML.length-1);
			getlastinx--;
		}else{
			// remove old color
			gettxtani.classList.remove(colors[languages.indexOf(getword)]);

			// get new word 
			showwords(languages[genfun.next().value]);
			clearInterval(delinterval);
			
		}
	},250);

}

showwords(languages[genfun.next().value]);

gettxtlights.forEach(function(gettxtlight){

	arrtexts = gettxtlight.textContent.split("");
	// console.log(arrtexts);

	gettxtlight.textContent = '';

	arrtexts.forEach(function(arrtext,idx){
		const newem = document.createElement('em');
		newem.textContent = arrtext;
		newem.style.animationDelay = `${idx * 0.1}s`;
		
		gettxtlight.append(newem);
		// console.log(newem);
	})
});