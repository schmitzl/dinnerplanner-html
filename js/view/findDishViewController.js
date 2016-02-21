//FindDishView Object constructor
var FindDishViewController = function (container, dishes, dinnerModel, mealButtonAction) {
   
    this.showView = function() {
        
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
    
    this.hideView = function() {
        container.hide();
    };
    
    
    dinnerModel.attach(function(model, args){
        
    });
        
    $('#starter-dropdown').on('click', function(){
        dishes = [];
        dishes = $.merge(dishes, dinnerModel.getAllDishes("starter", $('#searchInput').val()));
        createDishElements();
    });
    
    $('#main-dish-dropdown').on('click', function(){
        dishes = [];
        dishes = $.merge(dishes, dinnerModel.getAllDishes("main dish", $('#searchInput').val()));
        createDishElements();
    });
    
    $('#dessert-dropdown').on('click', function(){
        dishes = [];
        dishes = $.merge(dishes, dinnerModel.getAllDishes("dessert", $('#searchInput').val()));
        createDishElements();
    });
    
    $('#searchButton').on('click', function(){
        dishes = [];
        dishes = $.merge(dishes, dinnerModel.getAllDishes("starter", $('#searchInput').val()));
        dishes = $.merge(dishes, dinnerModel.getAllDishes("main dish", $('#searchInput').val()));
        dishes = $.merge(dishes, dinnerModel.getAllDishes("dessert", $('#searchInput').val()));
        createDishElements();
    });
    
    
    
    
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
                
        $('.meal-elem').on('click', mealButtonAction);

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
 