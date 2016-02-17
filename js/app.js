$(function() {
    
    dinnerModel = new DinnerModel();
    updateNumOfGuests();
    
	$('.viewContainer').hide();
    
    //Create views
    startView = new StartView($('#startView'));
    findDishView = new FindDishView($('#findDishView'), dinnerModel.getDishes(), dinnerModel);
    dishView = new DishView($('#dishView'), dinnerModel);
    dinnerOverview = new DinnerOverview(dinnerModel);
        
    $('.remove').hide();
    
    showStartView();
    
    $('#minusGuestButton').on( "click", function() {    
        dinnerModel.setNumberOfGuests(dinnerModel.getNumberOfGuests() - 1);
        updateNumOfGuests();
        updateDishView(dinnerModel.getNumberOfGuests());
        
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
        
        if(menu.length == 0) {
            $('#pendingCol').html('Pending');
            $('#pendingPriceCol').html('0');
        }
    });
    
    $('#plusGuestButton').on( "click", function() {
        dinnerModel.setNumberOfGuests(dinnerModel.getNumberOfGuests() + 1);
        updateNumOfGuests();
        updateDishView(dinnerModel.getNumberOfGuests());
        
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
        
        if(menu.length == 0) {
            $('#pendingCol').html('Pending');
            $('#pendingPriceCol').html('0');
        }
    });
    
    
    $('#confirmDinnerButton').on( "click", function() {
         $('.viewContainer').hide();
         showSimpleDinnerOverview();
    });
    
    $('#goBackAndEditDinnerButton').on( "click", function() {
         $('.viewContainer').hide();
         showFindDishView();
    });
    
    
});


updateNumOfGuests = function(){
    $('.numberOfGuests').html(dinnerModel.getNumberOfGuests());
};