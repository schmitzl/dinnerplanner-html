//DishView Object constructor
var DishViewController = function (container, dinnerModel, dishView) {
    
    var thisDish;
    var total;
    
    this.showView = function(dish, amountOfPeople) {
        thisDish = dish;
        dishView.update(dish.name, dish.image, amountOfPeople, dish.ingredients, dish.description);
        $('#dishView').show();
        
       $('#confirmDishButton').on("click", function(){
            dinnerModel.addDishToMenu(thisDish.id);
        });
    }
    
    updateDishView = function(amountOfPeople) {
        dishView.update(thisDish.name, thisDish.image, amountOfPeople, thisDish.ingredients, thisDish.description);
    
        $('#confirmDishButton').on("click", function(){
            dinnerModel.addDishToMenu(thisDish.id);
        })
    }
        
    
	    
    dinnerModel.attach(function(model, args){
        if(args == dinnerModel.NUM_OF_GUESTS_CHANGED) {
            updateDishView(dinnerModel.getNumberOfGuests());
        }
    });
    
    this.addBackButtonAction = function(action){
        $('#backToDishesButton').on("click", action);
    };
    
    this.hideView = function(){
        container.hide();
    };
    
}
 