const numbers = [ 1, 1918,  23, 123, 67, 42, 1925, 69, 1224,12,8765,654, 87, ];
const order = "asc";


function tri(numbers,order){
    if (order==="asc"){
        numbers.sort(function(a, b){return a-b});
    }
    
    if (order==="desc"){
        numbers.sort(function(a, b){return b-a});
    }

    console.log(numbers);
    return numbers;
}

tri(numbers,order);
