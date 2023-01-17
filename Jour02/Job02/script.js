let cita = document.getElementById("citation");
let button = document.getElementById("button");
let hide = true;
//console.log(cita);

button.addEventListener('click', event => {
	showhide();
});

function showhide(){
    if(hide===true){
        cita.innerHTML= "L'important n'est pas la chute, mais l'atterrissage"
        hide = false;
    }else if (hide === false){
        cita.innerHTML= ""
        hide = true;
    }
    
}