$(function(){
    $(".draggable").draggable({
    containment:"boxdemo", revert:"invalid"
});
$(".droppable").droppable({
    tolerance:'fit',
    over: function(event, ui){
        $('.ui-draggable-dragging').addClass('hoverClass');
    },
    out:function(event, ui){
        $('.ui-draggable-dragging').removeClass('hoverClass');
    },
    drop:function(event, ui){
        $('.droppable').addClass('dropClass');
    }
});
});
