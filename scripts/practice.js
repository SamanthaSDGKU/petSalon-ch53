var globalVariable = "I am in global scope";

function myFunction(){
    var localVariable = "I am in local scope";
    //this fn can access to the globalVariable
    console.log(globalVariable);
    if(true){
        var blockVariable = "I am in a block scope";
        //this is limited to the block(for, if)
        console.log(blockVariable);
    }
    //this is limited to the fn
    console.log(localVariable);
}

myFunction();

//name,age,gender
let student1 = {
    name:"Kit",
    age:25,
    gender:"Female",
    address:{
        street:"Ave Palm",
        zip:"29800"
    },
    hobbies:["listen music","play nintendo","complete FSDI assignments"]
}

console.log(student1);

//create an object (with 5 properties/attributes)