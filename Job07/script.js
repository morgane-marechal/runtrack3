const date1 = new Date(2020, 00, 02);

function jourtravaille(date1){

    const options = {weekday: "long", year: "numeric", month: "long", day: "numeric"};
    const day1 = date1.getDay();
    const month1 = date1.getMonth();
    const annee=date1.getYear()+1900;
    const daymonth = date1.getDate();

    //traduire date en français
    const jour = (new Intl.DateTimeFormat('fr-FR', options).format(date1));
    
    //faire un tableau des jours fériés
    var jourFerie=[
        "2020/0/1",
        "2020/3/13",
        "2020/4/1",
        "2020/4/8",
        "2020/4/21",
        "2020/5/1",
        "2020/6/14",
        "2020/7/15",
        "2020/10/1",
        "2020/10/11",
        "2020/11/25"
    ]

 
   const slashDate1=annee+"/"+month1+"/"+daymonth;
   console.log(slashDate1);

    if(jourFerie.includes(slashDate1)){
        console.log(jour+" est un jour férié");


    }else if((day1==0)||(day1==6)) {
        console.log( "Le "+jour+" est un week-end");
     }else {
             console.log("Le "+jour +" est un jour travaillé");
    }

}

jourtravaille(date1);
