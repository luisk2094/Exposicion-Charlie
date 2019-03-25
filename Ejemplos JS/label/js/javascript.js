
const tag = document.querySelector('p');

//listener
tag.addEventListener('click', function(){
    updateName();
});

//update name
function updateName() {
    let name = prompt('Enter a new name: ');
    if(!name){
        name = "Nothing written!";
    }
    tag.textContent = 'Player 1: ' + name;
}