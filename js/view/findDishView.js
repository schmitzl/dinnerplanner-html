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
        
        var color = '#99D713';
        var rgbaCol = 'rgba(' + parseInt(color.slice(-6,-4),16)
        + ',' + parseInt(color.slice(-4,-2),16)
        + ',' + parseInt(color.slice(-2),16)
        +',1.0)';
        $('#header').css('background-color', rgbaCol)
        
        $('#sidebar').show();
        
        container.show();
        createDishElements();
    }
    
    createDishElements = function() {
        var allDishesHtml = "";
        
        for(var i = 0; i < dishes.length; i++) {
            if(i % 3 == 0)
                allDishesHtml += '<div class="row dishrow">';
            name = dishes[i].name;
            img = dishes[i].image;
            idElem = dishes[i].id;
            dishElem = createDishElement(name, img, idElem);
            allDishesHtml += dishElem;
            if(i % 3 == 2)
                allDishesHtml += '</div>';
        }
        $('#dishesContainer').html(allDishesHtml);
        
        $('.meal-elem').on('click', function(){
    
            $('#findDishView').hide(); 

            thisMeal = $(this);
            thisMealsId = thisMeal.find('.id').text();
            thisDish = dinnerModel.getDish(thisMealsId);
                                    
            showDishView(thisDish, dinnerModel.getNumberOfGuests());
        });
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
 