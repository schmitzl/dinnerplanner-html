//DishView Object constructor
var DishViewController = function (container, dinnerModel) {

    updateDishView = function(amountOfPeople) {
        dishViewElem = createDishViewElem(thisDish.name, thisDish.image, amountOfPeople, thisDish.ingredients, thisDish.description);
        $('#dishViewContent').html(dishViewElem);
        
        
        $('#confirmDishButton').on("click", function(){
            dinnerModel.addDishToMenu(thisDish.id);
            $('#pendingRow').hide();
            type = "";
            if(thisDish.type == "main dish")
                type = "main";
            else if (thisDish.type == "starter")
                type = "starter";
            else 
                type = "dessert";
            $('#' + type + 'NameCol').html(thisDish.name);
            $('#' + type + 'PriceCol').html(total);
            $('#' + type + 'Remove').show();
        });
    }
	    
    dinnerModel.attach(function(model, args){
        if(args == dinnerModel.NUM_OF_GUESTS_CHANGED) {
            updateDishView(dinnerModel.getNumberOfGuests());
        }
    });
    
    this.addBackButtonAction = function(action){
        $('#backToDishesButton').on("click", action);
    };
    
    var thisDish;
    var total;
    
    this.hideView = function(){
        container.hide();
    };
    
    this.showView = function(dish, amountOfPeople) {
        thisDish = dish;
        dishViewElem = createDishViewElem(dish.name, dish.image, amountOfPeople, dish.ingredients, dish.description);
        $('#dishViewContent').html(dishViewElem);
        $('#dishView').show();
        
       $('#confirmDishButton').on("click", function(){
            dinnerModel.addDishToMenu(thisDish.id);
            $('#pendingRow').hide();
            type = "";
            if(thisDish.type == "main dish")
                type = "main";
            else if (thisDish.type == "starter")
                type = "starter";
            else 
                type = "dessert";
            $('#' + type + 'NameCol').html(thisDish.name);
            $('#' + type + 'PriceCol').html(total);
            $('#' + type + 'Remove').show();
        });
    }
        
    

    var createDishViewElem = function(name, img, amountOfPeople, ingredients, preparation){
        var dishViewElem = '<div class="row">';
        dishViewElem += '<div class="col-lg-6">';
        dishViewElem += '<h2 class="dishName">' + name + '</h2>';
        dishViewElem += '<img class="dishPhoto" src="images/' + img + '" />';
        dishViewElem += '</div>';
        dishViewElem += '<div class="col-lg-6">';
        dishViewElem += '<h2>Ingredients for <span class="amountOfPeople">' + amountOfPeople + '</span> people</h2>'; 
        
        dishViewElem += '<table><tr><td colspan=4><hr></td></tr>';
        total = 0;
        for(var i = 0; i < ingredients.length; i++) {
            dishViewElem += '<tr>';
            dishViewElem += '<td><span class="amount">' + (ingredients[i].quantity * amountOfPeople) + '</span> <span class="measurement">' + ingredients[i].unit + '</span></td>';
            dishViewElem += '<td>' + ingredients[i].name + '</td>';
            dishViewElem += '<td>SEK</td>';
            price = (ingredients[i].price * amountOfPeople);
            dishViewElem += '<td>' + price + '</td>';
            total += price;
            dishViewElem += '</tr>';
        }
        dishViewElem += '<tr><td colspan=4><hr></td></tr></tr><tr><td><button id="confirmDishButton" type="button" class="btn btn-default">Confirm dish</button><td>';
        dishViewElem += '<td>SEK</td>';
        dishViewElem += '<td>' + total + '<td></tr>';
        dishViewElem += '</table>';
        dishViewElem += '</div>';
        dishViewElem += '</div>';
        dishViewElem += '<div class="row preparation">';
        dishViewElem += '<h2>Preparation</h2>';
        dishViewElem += '<div class="preparationText">' + preparation + '</div>';
        dishViewElem += '</div>';
        
        return dishViewElem;
    }
    
}
 