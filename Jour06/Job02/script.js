const body = document.body;
let bigSize = window.matchMedia('(max-width: 1920px)');
let mediumSize = window.matchMedia('(max-width: 1680px)');
let miniSize = window.matchMedia('(max-width: 1280px)');
document.bigSize = bigSize.matches;
document.mediumSize = mediumSize.matches;
document.miniSize = miniSize.matches;


addEventListener("resize", (event) => {
    if(miniSize.matches) {
        body.style.background = "#ffffff";
    } else if(mediumSize.matches){
        body.style.background = "#275fa0";
    }else if(bigSize.matches){
        body.style.background = "#ffca4b";
    }else{
        body.style.background = "#88c1d0";
    }
});



