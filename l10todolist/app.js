//UI
const getform = document.getElementById('form');
const gettextbox = document.getElementById('textbox');
const getul = document.getElementById('list-group');

getform.addEventListener('submit',(e)=>{
    // console.log('hay');

    addnew();

    e.preventDefault();
});

const getlocaldbs = JSON.parse(localStorage.getItem('todos'));
// console.log(getlocaldbs); 

if(getlocaldbs){
    getlocaldbs.forEach(getlocaldb=>addnew(getlocaldb));
}

function addnew(todo){
    let todotext = gettextbox.value;
    // console.log(todotext);

    if(todo){
        todotext = todo.text;
    }

    if(todotext){

        let newli = document.createElement('li');

        if(todo && todo.done ){
            newli.classList.add('completed');
        }

        newli.appendChild(document.createTextNode(todotext));
        // console.log(newli);

        getul.appendChild(newli);

        gettextbox.value = '';
        gettextbox.focus();

        updatelocalstorage();

        newli.addEventListener('click',function(){
            newli.classList.toggle('completed');
            updatelocalstorage();
        });

        newli.addEventListener('contextmenu',(e)=>{
            // console.log('hello'); 
           

            newli.remove();
            
           
            e.preventDefault();

            updatelocalstorage();
        });
    }


}

function updatelocalstorage(){
    let getalllis = document.querySelectorAll('li');
    // console.log(getalllis); 

    const todos = [];
    getalllis.forEach(getallli=>{
        // console.log(getallli); 

        todos.push({
            text: getallli.textContent,
            done: getallli.classList.contains('completed')
        });

    });

    // console.log(todos);

    localStorage.setItem('todos',JSON.stringify(todos));
}

// 13TD 