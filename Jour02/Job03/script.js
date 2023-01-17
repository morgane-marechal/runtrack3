let count = document.getElementById("compteur");
let button = document.getElementById("button");
let addcount=0;
document.getElementById("compteur").innerHTML=addcount

button.addEventListener('click', event => {
	addone();
});

function addone(){
    addcount ++;
    document.getElementById("compteur").innerHTML = addcount;
}