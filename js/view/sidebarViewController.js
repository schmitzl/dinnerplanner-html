var SidebarViewController = function (container, dinnerModel) {

     $('.numberOfGuests').html(dinnerModel.getNumberOfGuests());
    
     updateMenuTable = function(){
        $('.numberOfGuests').html(dinnerModel.getNumberOfGuests());
                
        menu = dinnerModel.getFullMenu();
        for(var i = 0; i < menu.length; i++) {
            thisDish = menu[i][0];
            type = "";
            if(thisDish.type == "main dish")
                type = "main";
            else if (thisDish.type == "starter")
                type = "starter";
            else 
                type = "dessert";
            $('#' + type + 'PriceCol').html(menu[i][1]*dinnerModel.getNumberOfGuests());
        }
    };

    
    this.hideView = function(){
        container.hide();
    };
    
    this.showView = function() {
        container.show();
    };
    
    dinnerModel.attach(function(model, args){
        if(args == dinnerModel.NUM_OF_GUESTS_CHANGED) {
            updateMenuTable();   
        }
    });
    
    $('.remove').hide();
    $('.remove').on('click', function(){
        
        name = $(this).siblings('.nameCol').text();
        id = dinnerModel.getDishByName(name).id;
        dinnerModel.removeDishFromMenu(id);
        
        menu = dinnerModel.getFullMenu();
                 
        $(this).siblings().html('');
        $(this).hide();
        
        if(menu.length == 0) {
            $('#pendingRow').show();
        }
    });
    
    
    $('#minusGuestButton').on( "click", function() {    
        dinnerModel.setNumberOfGuests(dinnerModel.getNumberOfGuests() - 1);
    });
    
    $('#plusGuestButton').on( "click", function() {
        dinnerModel.setNumberOfGuests(dinnerModel.getNumberOfGuests() + 1);
    });
    
    this.addConfirmDinnerAction = function(action){
        $('#confirmDinnerButton').on( "click", action);
    };
    

}