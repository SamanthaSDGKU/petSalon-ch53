let pets =[];//empty array

let petSalon = {
    name:"The Fashion Pet",
    address:{
        street:"Palm Ave",
        zip:"22900"
    }
}

//creating the pets
let pet1={
    name:"Scooby",
    age:80,
    gender:"Male"
}
let pet2={
    name:"Scrappy",
    age:70,
    gander:"Male"
}
//push the obj into the array
pets.push(pet1,pet2);

function displayPetNames(){
    console.log(pets[0].name);
    console.log(pets[1].name);
    console.log(" We have: " + pets.length + " pets");
}

