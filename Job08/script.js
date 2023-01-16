
function primnumber(num1, num2){
    count1 = 0;
    for(let i= 1; i <= num1; i++){
        if(num1%i==0){
            count1++;
        }
    }

    count2 = 0;
    for(let j= 1; j <= num2; j++){
        if(num2%j==0){
            count2++;
        }
    }
    // console.log(count1);
    // console.log(count2);
    if((count1>2)||(count2>2)){
        return false;
    }else{
        total= num1 + num2;
        console.log(total);
        return total
    }
}
let num1 = 5;
let num2 = 3;
primnumber(num1,num2);
