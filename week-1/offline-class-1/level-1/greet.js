function greet(firstName, lastName){
    console.log("Hello - "+firstName+" "+lastName);
}

function greetByGender(firstName, lastName, gender){
    if(gender === "male")
        console.log("Hello - Mr."+firstName+" "+lastName);
    else 
    console.log("Hello - Ms."+firstName+" "+lastName);
}

greet("Surya", "Konduru");
greetByGender("Surya", "Konduru", "male");