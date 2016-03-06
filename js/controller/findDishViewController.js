//FindDishView Object constructor
var FindDishViewController = function (container, dishes, dinnerModel, mealButtonAction, findDishView) {
   
    this.showView = function() {
        
        findDishView.setHeadingBgOpaque();
        
        $('#sidebar').show();
        
        container.show();
        findDishView.createDishElements(dinnerModel.getDishes());
        $('.meal-elem').on('click', mealButtonAction);
    }
    
    this.hideView = function() {
        container.hide();
    };
    
    
    dinnerModel.attach(function(model, args){
        
    });
        
    $('#starter-dropdown').on('click', function(){
        dishes = [];
        dishes = $.merge(dishes, dinnerModel.getAllDishes("starter", $('#searchInput').val()));
        findDishView.createDishElements(dishes);
        $('.meal-elem').on('click', mealButtonAction);
    });
    
    $('#main-dish-dropdown').on('click', function(){
        dishes = [];
        dishes = $.merge(dishes, dinnerModel.getAllDishes("main dish", $('#searchInput').val()));
        findDishView.createDishElements(dishes);
        $('.meal-elem').on('click', mealButtonAction);
    });
    
    $('#dessert-dropdown').on('click', function(){
        dishes = [];
        dishes = $.merge(dishes, dinnerModel.getAllDishes("dessert", $('#searchInput').val()));
        findDishView.createDishElements(dishes);
        $('.meal-elem').on('click', mealButtonAction);
    });
    
    $('#searchButton').on('click', function(){
        dishes = [];
        dishes = $.merge(dishes, dinnerModel.getAllDishes("starter", $('#searchInput').val()));
        dishes = $.merge(dishes, dinnerModel.getAllDishes("main dish", $('#searchInput').val()));
        dishes = $.merge(dishes, dinnerModel.getAllDishes("dessert", $('#searchInput').val()));
        findDishView.createDishElements(dishes);
        $('.meal-elem').on('click', mealButtonAction);
    });
    
	
}
 