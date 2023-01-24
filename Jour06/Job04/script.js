const body = document.body;
const menu =document.getElementsByClassName("menu");
let miniSize = window.matchMedia('(max-width: 768px)');


document.miniSize = miniSize.matches;


addEventListener("resize", (event) => {
    if(miniSize.matches) {
        body.style.background = "pink";
    }else{
        body.style.background = "#ffffff"
    }
});
