
//variables

var age     = 1;
var name    = "Jhon";
var names   = ["Rose", "July", "Chris", "Clark", "Susan", "Charlie", "Frank", "Jhon"];
let height  = 200;
const pi    = 3.14;

//listener
document.getElementById("btn-random").onclick = function() {

    // getRandom();
    // getNameArray();
    setName(getNameArray(getRandom()));
};

//show name
function setName(pName) {
    document.getElementById("message-user").innerHTML = pName;    
}

// get random number
function getRandom(){
    return Math.floor(Math.random() * 7);
}

function getNameArray(index){
    let names = ["Rose", "July", "Chris", "Clark", "Susan", "Charlie", "Frank", "Jhon"];
    return names[index];
}


// Esto es un comentario

/*
*   Esto es un comentario extenso
*   Esto es un comentario extenso
*   Esto es un comentario extenso
*/