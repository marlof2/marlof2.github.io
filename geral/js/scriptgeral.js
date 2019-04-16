
$(window).scroll(function(){
    
    var top = $(document).scrollTop();    
    var menu = $('#menu_nav');    
    
    if( top > 5 ){
        menu.addClass('menu-fix');    
    }else{
        menu.removeClass('menu-fix');         
    }
    
    
});

