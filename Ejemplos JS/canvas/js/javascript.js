
var canvas      = document.getElementById('canvas');
var para        = document.querySelector('p');
var ctx         = canvas.getContext('2d');
var textarea    = document.getElementById('code');
var reset       = document.getElementById('reset');
var edit        = document.getElementById('edit');
var code        = textarea.value;

window.addEventListener('load', function(){
    drawCanvas();
});

//listener
reset.addEventListener('click', function() {
    textarea.value = code; 
    drawCanvas();
});

textarea.addEventListener('input', function(){
    drawCanvas();
});

textarea.onkeydown = function(e){
    
    if (e.keyCode === 9) {
        e.preventDefault();
        insertAtCaret('\t');
    }

    if (e.keyCode === 27) {
        textarea.blur();
    }
};

function drawCanvas() {

    try {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        eval(textarea.value);
        para.textContent = 'The rectangle is ' + x + 'px wide and ' + y + 'px high.';
    } catch(err){

    }
}

function insertAtCaret(text) {

    var scrollPos = textarea.scrollTop;
    var caretPos = textarea.selectionStart;

    var front = (textarea.value).substring(0, caretPos);
    var back = (textarea.value).substring(textarea.selectionEnd, textarea.value.length);
    textarea.value = front + text + back;
    caretPos = caretPos + text.length;

    textarea.selectionStart = caretPos;
    textarea.selectionEnd = caretPos;

    textarea.focus();
    textarea.scrollTop = scrollPos;

}