//UI 
let gettablinks = document.getElementsByClassName('tablinks'),
    gettabpannels = document.getElementsByClassName('tab-pannel'),
    getbtnclose = document.querySelectorAll('.btn-close');

    // console.log(gettablinks);
    // console.log(gettablinks[0]);

    // console.log(gettabpannels);

    let tabpanels = Array.from(gettabpannels);
    // console.log(tabpanels);

    function gettab(evn,link){
        // console.log(evn.target);
        // console.log(evn.currentTarget);
        // console.log(link);

        // Remove All active 
        for(let x = 0 ; x < gettablinks.length; x++){
            // console.log(x); // 0 to 3 

            gettablinks[x].className = gettablinks[0].className.replace(' active','');

            // hide tabpanel by btn-close 

            getbtnclose[x].addEventListener('click',function(){
                this.parentElement.style.display = "none";
            });
        }

        // Add active 
        evn.target.classList.add('active');

        // Hide All Panel
        tabpanels.forEach(function(tabpanel){
            tabpanel.style.display = "none";
        });

        // Show single Panel
        document.getElementById(link).style.display = "block";
    }

    document.getElementById('autoclick').click();

   




  