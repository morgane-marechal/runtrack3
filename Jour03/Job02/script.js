$(document).ready(() => {
     const arc = $('.arc');
     const puzzle = $('#puzzle');
     let endgame = $('#endgame');
     const mixpuzzle = $('#mix-puzzle');
     let orderString = "";

    $('#button').click(function() {
        const mixpuzzle = $('#mix-puzzle'); // Container
        const arc = mixpuzzle.children(); // All children
        for (var i = 1; i < arc.length; i++) {
              // Move random child to the end
              mixpuzzle.append(arc.eq(Math.floor(Math.random() * arc.length)));
        }
  });

  $('#arc1').on('click', () =>{
    $( "#arc1" ).appendTo( $( "#puzzle" ) );
    orderString+='1';
    checkVictory();
  })

  $('#arc2').on('click', () =>{
    $( "#arc2" ).appendTo( $( "#puzzle" ) );
    orderString+='2';
    console.log(orderString);
    checkVictory();
  })

  $('#arc3').on('click', () =>{
    $( "#arc3" ).appendTo( $( "#puzzle" ) );
    orderString+='3';
    console.log(orderString);
    checkVictory();
  })

  $('#arc4').on('click', () =>{
    $( "#arc4" ).appendTo( $( "#puzzle" ) );
    orderString+='4';
    console.log(orderString);
    checkVictory();
  })

  $('#arc5').on('click', () =>{
    $( "#arc5" ).appendTo( $( "#puzzle" ) );
    orderString+='5';
    console.log(orderString);
    checkVictory();
  })

  $('#arc6').on('click', () =>{
    $( "#arc6" ).appendTo( $( "#puzzle" ) );
    orderString+='6';
    console.log(orderString);
    checkVictory();
  })

  function checkVictory(){
    if(orderString.length===6){
        if(orderString==="123456"){
          $(endgame).html("Vous avez gagné");
        }else{
          $(endgame).html("Vous avez perdu");
        }
    }
  }

});



