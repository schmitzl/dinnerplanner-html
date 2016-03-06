var SidebarViewController = function (container, dinnerModel, sidebarView) {

    updateMenuTable = function(){
        sidebarView.updateMenu(dinnerModel.getFullMenu(), dinnerModel.getNumberOfGuests());
    };

    
    
    dinnerModel.attach(function(model, args){
        updateMenuTable(); 
        if(args == dinnerModel.MENU_CHANGED) {
            if(model.getFullMenu().length == 0)
                $('#confirmDinnerButton').prop('disabled', true);
            else {
                $('#confirmDinnerButton').prop('disabled', false);
            }
        }
    });
    
    
     $('.numberOfGuests').html(dinnerModel.getNumberOfGuests());
    
     
    this.hideView = function(){
        container.hide();
    };
    
    this.showView = function() {
        container.show();
    };
    
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