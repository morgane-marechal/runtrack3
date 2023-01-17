const cita = document.getElementById("citation").innerHTML;
button = document.getElementById("button");
//console.log(cita);

button.addEventListener('click', event => {
	citation();
});

function citation(){
    console.log(cita);
}