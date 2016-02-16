//DishView Object constructor
var DishView = function (container) {
    
    showDishView = function(dish, amountOfPeople) {
        dishViewElem = createDishViewElem(dish.name, dish.image, amountOfPeople, dish.ingredients, dish.description);
        $('#dishView').html(dishViewElem);
        $('#dishView').show();
        
        $('#backToDishesButton').on("click", function(){
            $('#dishView').hide();
            showFindDishView();
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
        dishViewElem += '<table>';
        for(var i = 0; i < ingredients.length; i++) {
            dishViewElem += '<tr>';
            dishViewElem += '<td><span class="amount">' + ingredients[i].quantity + '</span> <span class="measurement">' + ingredients[i].unit + '</span></td>';
            dishViewElem += '<td>' + ingredients[i].name + '</td>';
            dishViewElem += '<td>SEK</td>';
            dishViewElem += '<td>' + ingredients[i].price + '</td>';
            dishViewElem += '</tr>';
        }
        dishViewElem += '</table>';
        dishViewElem += '</div>';
        dishViewElem += '</div>';
        dishViewElem += '<div class="row preparation">';
        dishViewElem += '<h2>Preparation</h2>';
        dishViewElem += '<div class="preparationText">' + preparation + '</div>';
        dishViewElem += '</div>';
        dishViewElem += '<div class="row backButton">';
        dishViewElem += '<button id="backToDishesButton" type="button" class="btn btn-default">back</button>';
        dishViewElem += '</div>';
        
        return dishViewElem;
    }
    
}
 