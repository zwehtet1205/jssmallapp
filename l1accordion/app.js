//UI

const getacctitles = document.getElementsByClassName('acctitle');
const getacccontents = document.querySelectorAll('.accontent');

for(let x = 0; x< getacctitles.length; x++){
	// console.log(x); 

	getacctitles[x].addEventListener('click',function(e){
		// console.log(x);  // clicked element idx
		// console.log(getacccontents[x]);

		// console.log(e.target);
		// console.log(this);

		// e.target.classList.toggle('active');
		this.classList.toggle("active");

		const getcontent = this.nextElementSibling;
		// console.log(getcontent);
		// console.log(getcontent.scrollHeight+"px");
		
		if(getcontent.style.height){
			getcontent.style.height = null;  // beware can't set 0
		}else{
			getcontent.style.height = getcontent.scrollHeight+"px";
		}

	});

	if(getacccontents[x].classList.contains('active')){
		getacccontents[x].style.height = getacccontents[x].scrollHeight+"px";
	}
}
