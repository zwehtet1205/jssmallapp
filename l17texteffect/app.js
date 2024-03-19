// Get UI 
const languages = ["Nodejs","Reactjs","Vueja","Laravel"];
const colors = ["red","skyblue","violet","yellow"];

const gettxtani = document.querySelector(".textani");

// console.log(languages[0]); //Nodejs

// console.log(languages.indexOf("Reactjs")); //1
// console.log(languages.indexOf("laravel")); //-1
// console.log(languages.indexOf("Laravel")); //3

// console.log(colors[languages.indexOf("Reactjs")]); //skyblue
// console.log(colors[languages.indexOf("Vuejs")]); //violet

function* genfun(){
	var idx = 0;

	while(true){
		yield idx++;

		if(idx > 3){
			idx = 0;
		}

	}
}

const testnumber = genfun();
// console.log(testnumber.next().value); 
// console.log(testnumber.next().value);
// console.log(testnumber.next().value);
// console.log(testnumber.next().value);
// console.log(testnumber.next().value);
// console.log(testnumber.next().value);

// console.log(languages[testnumber.next().value]);
// console.log(languages[testnumber.next().value]);
// console.log(languages[testnumber.next().value]);
// console.log(languages[testnumber.next().value]);
// console.log(languages[testnumber.next().value]);
// console.log(languages[testnumber.next().value]);

function showwords(word){
	if(x >= word.length){

	}

	

}

