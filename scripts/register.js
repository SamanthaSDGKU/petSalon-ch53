let pets =[];//empty array
//object literal
let petSalon = {
    name:"The Fashion Pet",
    address:{
        street:"Palm Ave",
        zip:"22900"
    }
}
//object constructor
function Pet(name,age,gender,breed,service){
    this.name=name;
    this.age=age;
    this.gender=gender;
    this.breed=breed;
    this.service=service;
}

//register function 
function register(){
    let inputName=document.getElementById("txtName").value;
    let inputAge=document.getElementById("txtAge").value;
    let inputGender=document.getElementById("txtGender").value;
    let inputBreed=document.getElementById("txtBreed").value;
    let inputService=document.getElementById("txtService").value;

    console.log(inputName,inputAge,inputGender,inputBreed,inputService);
    // create the obj
    let newPet = new Pet(inputName,inputAge,inputGender,inputBreed,inputService);
    //push the obj to the array
    pets.push(newPet);
    //clear an input: document.getElementById("txtName").value="";
    //display the obj on the console
    console.log(pets);
}


function init(){
    //execution code should be inside of this function 
    let pet1 = new Pet("Scooby",99,"Male","Dane","Grooming");//creating an obj
    //create two more pets
    let pet2 = new Pet("Scrappy",98,"Male","Mixed","Vaccines");
    pets.push(pet1,pet2);
}

window.onload=init;//wait to render the HTML
