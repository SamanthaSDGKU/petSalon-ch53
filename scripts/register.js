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
    gender:"Male",
    breed:"Dane",
    service:"Grooming"
}
let pet2={
    name:"Scrappy",
    age:70,
    gender:"Male",
    breed:"Mixed",
    service:"Vaccines"
}
let pet3={
    name:"Speedy",
    age:80,
    gender:"Male",
    breed:"Dane",
    service:"Grooming"
}
let pet4={
    name:"Tweety",
    age:80,
    gender:"Male",
    breed:"Dane",
    service:"Grooming"
}

//push the obj into the array
pets.push(pet1,pet2,pet3,pet4);

function displayPetNames(){
    for(let i=0;i<4;i++){
        document.getElementById("petList").innerHTML+=`<li> ${pets[i].name} </li>`;
    }
    document.getElementById("petList").innerHTML+= "We have: " + pets.length + " pets";
}

