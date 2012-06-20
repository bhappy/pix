function activate_modal(){  
    var window_width = $(window).width();  
    var window_height = $(window).height();  
    $('.modal_window').each(function(){  
        var modal_height = $(this).outerHeight();  
        var modal_width = $(this).outerWidth();  
        var top = (window_height-modal_height)/2;  
        var left = (window_width-modal_width)/2;  
        $(this).css({'top' : top , 'left' : left});        
    });  
    $('.activate_modal').click(function(){  
          //get the id of the modal window stored in the name of the activating element  
          var modal_id = $(this).attr('name');  
          show_modal(modal_id);    
    });  
    $('.close_modal').click(function(){  
        close_modal();    
    });      
}

$(document).keyup(function(e) {
    if (e.keyCode == 27) { close_modal(); }   // esc
});

//THE FUNCTIONS  
function close_modal(){  
    $('#mask').fadeOut(500);  
    $('.modal_window').fadeOut(500);    
}  
function show_modal(modal_id){  
    $('#mask').css({ 'display' : 'block', opacity : 0, 'z-index': 99});  
    $('#mask').fadeTo(500,0.8);  
    $('#'+modal_id).fadeIn(500); 
    $('#'+modal_id).css({'z-index': 100}); 
}
