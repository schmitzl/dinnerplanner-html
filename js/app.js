$(function() {
    
    dinnerModel = new DinnerModel();
    updateNumOfGuests();
    
	$('.viewContainer').hide();
    
    //Create views
    startView = new StartView($('#startView'));
    findDishView = new FindDishView($('#findDishView'), dinnerModel.getDishes(), dinnerModel);
    dishView = new DishView($('#dishView'));
    dinnerOverview = new DinnerOverview(dinnerModel);
        
    showStartView();
    
    $('#minusGuestButton').on( "click", function() {
        dinnerModel.setNumberOfGuests(dinnerModel.getNumberOfGuests() - 1);
        updateNumOfGuests();
        updateDishView(dinnerModel.getNumberOfGuests());
    });
    
    $('#plusGuestButton').on( "click", function() {
        dinnerModel.setNumberOfGuests(dinnerModel.getNumberOfGuests() + 1);
        updateNumOfGuests();
        updateDishView(dinnerModel.getNumberOfGuests());
    });
    
    
    $('#confirmDinnerButton').on( "click", function() {
         $('.viewContainer').hide();
         showSimpleDinnerOverview();
    });
    
    $('#goBackAndEditDinnerButton').on( "click", function() {
         $('.viewContainer').hide();
         showFindDishView();
    });
    
    

    
/*
    
    
    
    
    
    
    
    getDish = function (id) {
	  for(key in dishes){
			if(dishes[key].id == id) {
				return dishes[key];
			}
		}
	}
    
    
    
        
    });
    
*/

    
    
});


updateNumOfGuests = function(){
    $('.numberOfGuests').html(dinnerModel.getNumberOfGuests());
};