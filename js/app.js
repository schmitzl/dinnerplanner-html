$(function() {
    
    dinnerModel = new DinnerModel();
    
	$('.viewContainer').hide();
    
    //Create views
    startView = new StartView($('#startView'));
    findDishView = new FindDishView($('#findDishView'), dinnerModel.getDishes(), dinnerModel);
    dishView = new DishView($('#dishView'));
        
    showStartView();
    
    
    $('#confirmDinnerButton').on( "click", function() {
         $('.viewContainer').hide();
         $('#dinnerOverView').show();
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