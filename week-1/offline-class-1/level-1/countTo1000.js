function count(num){
    var sum = 0;
    for(var i=0;i<num;i++){
        sum = sum + i;
    }
    console.log("Sum from 0 to "+num+" is - "+sum);
}

count(1000);