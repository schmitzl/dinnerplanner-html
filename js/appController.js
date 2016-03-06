$(function() {
    
    dinnerModel = new DinnerModel();
    
	$('.viewContainer').hide();
    
    //Create views and initialization
    sidebarView = new SidebarView();
    sidebarViewController = new SidebarViewController($('#sidebar'), dinnerModel, sidebarView);
    startViewController = new StartViewController($('#startView'));
    startViewController.addDinnerButtonAction(function() {
         startViewController.hideView();
         findDishViewController.showView();
         $('#sidebar').show();
        }
    );
    dishView = new DishView();
    dishViewController = new DishViewController($('#dishView'), dinnerModel, dishView);
    mealButtonAction = function(){
        findDishViewController.hideView();

        thisMeal = $(this);
        thisMealsId = thisMeal.find('.id').text();
        thisDish = dinnerModel.getDish(thisMealsId);    
        
        dishViewController.showView(thisDish, dinnerModel.getNumberOfGuests());
    };
    findDishView = new FindDishView();
    findDishViewController = new FindDishViewController($('#findDishView'), dinnerModel.getDishes(), dinnerModel, mealButtonAction, findDishView);
    
    dishViewController.addBackButtonAction(function(){
        findDishViewController.showView();
        dishViewController.hideView();
    });
    
    
    dinnerOverview = new DinnerOverview();
    dinnerOverviewController = new DinnerOverviewController($('#simpleOverview'), $('#printOverview'), dinnerModel, dinnerOverview);
    printButtonAction = function(){
        dinnerOverviewController.hideSimpleOverview();
        dinnerOverviewController.showPrintView();
    };
    dinnerOverviewController.addPrintButtonAction(printButtonAction);   
    sidebarViewController.addConfirmDinnerAction(function(){
        $('.viewContainer').hide();
        dinnerOverviewController.showSimpleOverview();
    });
    
    $('#confirmDinnerButton').prop('disabled', true);
    
    $('.nameCol').on('click', function(){
        $('.viewContainer').hide();
        $('#sidebar').show();
        dishViewController.showView(dinnerModel.getDishByName($(this).text()), dinnerModel.getNumberOfGuests());
    });
    
    startViewController.showView();
    
    $('#goBackAndEditDinnerButton').on( "click", function() {
         $('.viewContainer').hide();
         findDishViewController.showView();
    });
    
    
    
});
