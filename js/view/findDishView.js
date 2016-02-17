//FindDishView Object constructor
var FindDishView = function (container, dishes, dinnerModel) {
        
    $('#starter-dropdown').on('click', function(){
        dishes = dinnerModel.getAllDishes("starter");
        createDishElements();
    });
    $('#main-dish-dropdown').on('click', function(){
        dishes = dinnerModel.getAllDishes("main dish");
        createDishElements();
    });
    $('#dessert-dropdown').on('click', function(){
        dishes = dinnerModel.getAllDishes("dessert");
        createDishElements();
    });
    
    
    
    showFindDishView = function() {
        $('#sidebar').show();
        
        container.show();
        createDishElements();
        
        $('.meal-elem').on('click', function(){
    
            $('#findDishView').hide(); 

            thisMeal = $(this);
            thisMealsId = thisMeal.find('.id').text();
            thisDish = dinnerModel.getDish(thisMealsId);
                                    
            showDishView(thisDish, dinnerModel.getNumberOfGuests());
        });
    }
    
    createDishElements = function() {
        var allDishesHtml = "";
        
        for(var i = 0; i < dishes.length; i++) {
            name = dishes[i].name;
            img = dishes[i].image;
            idElem = dishes[i].id;
            dishElem = createDishElement(name, img, idElem);
            allDishesHtml += dishElem;
        }
        $('#dishesContainer').html(allDishesHtml);
    }
    
    var createDishElement = function(name, image, idElem) {
        
        var html = '<div class="meal-elem col-lg-4 col-md-4 col-sm-6 web">';
        html += '<img class="pos-absolute" src="images/' + image + '">';
        html +=  '<div class="pos-absolute">';
        html += '<h2 class="mealName">'+ name + '</h2>';
        html += '<span class="id invisible">' + idElem + '<span>'
        html += '</div>';
        html += '</div>';
            
        return html;
    }
    
	
}
 