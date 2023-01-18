
let textarea=document.querySelector("textarea")
let keylog = document.getElementById("keylogger");
let test = document.getElementById("test");
let button = document.getElementById("button");
//let message = "";

/*let element = document.activeElement.tagName;
textarea.innerHTML=element;
let textfocus=false;


//donner focus à textarea quand on click dessus
keylog.addEventListener('click', event => {
textareafocus();
});



function textareafocus(){
    document.getElementById("keylogger").focus();
    console.log("focus sur textarea");
    return textfocus=true;
}
keylog.addEventListener('click', event => {
    textareafocus();
    });

    function textareafocus(){
        let element = document.activeElement.tagName;
        textarea.innerHTML=element;
    }
*/



document.addEventListener('keydown', addLetter);
keylog.addEventListener('keydown', addLetter);

function addLetter(e){

    //if(textfocus === false){
        keylog.innerHTML += ` ${e.key}`;
   // }else{
     //   keylog.innerHTML += `  ${e.key}`;
    //}
    

}



