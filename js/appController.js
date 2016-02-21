$(function() {
    
    dinnerModel = new DinnerModel();
    
	$('.viewContainer').hide();
    
    //Create views and initialization
    sidebarViewController = new SidebarViewController($('#sidebar'), dinnerModel);
    startViewController = new StartViewController($('#startView'));
    startViewController.addDinnerButtonAction(function() {
         startViewController.hideView();
         findDishViewController.showView();
         $('#sidebar').show();
        }
    );
    dishViewController = new DishViewController($('#dishView'), dinnerModel);
    mealButtonAction = function(){
        findDishViewController.hideView();

        thisMeal = $(this);
        thisMealsId = thisMeal.find('.id').text();
        thisDish = dinnerModel.getDish(thisMealsId);    
        
        dishViewController.showView(thisDish, dinnerModel.getNumberOfGuests());
    };
    findDishViewController = new FindDishViewController($('#findDishView'), dinnerModel.getDishes(), dinnerModel, mealButtonAction);
    
    dishViewController.addBackButtonAction(function(){
        findDishViewController.showView();
        dishViewController.hideView();
    });
    dinnerOverviewController = new DinnerOverviewController($('#simpleOverview'), $('#printOverview'), dinnerModel);
    printButtonAction = function(){
        dinnerOverviewController.hideSimpleOverview();
        dinnerOverviewController.showPrintView();
    };
    dinnerOverviewController.addPrintButtonAction(printButtonAction);   
    sidebarViewController.addConfirmDinnerAction(function(){
        $('.viewContainer').hide();
        dinnerOverviewController.showSimpleOverview();
    });
    
    startViewController.showView();
    
    
    
    $('#goBackAndEditDinnerButton').on( "click", function() {
         $('.viewContainer').hide();
         findDishViewController.showView();
    });
    
    
});
