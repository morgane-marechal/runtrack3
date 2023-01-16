var annee = 365;

function bisextil(annee){
    if(annee == 366){
        console.log("C'est une année bisextile.");
        return true;
    }else if(annee == 365){
        console.log("Cette année n'est pas bisextile.");
        return false;
    };
}

bisextil(annee);