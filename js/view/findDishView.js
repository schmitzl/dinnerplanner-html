//FindDishView Object constructor
var FindDishView = function (container) {
    
    container.show();
    
    var createDishElement = function(name, description) {
        
        var html = '<img class="pos-absolute" src="images/' + name + '.jpg">';
        html +=  '<div class="pos-absolute">';
        html += '<h2 class="mealName">'+ name + '</h2>';
        html += '<span class="mealDescription">' + description + '</span>';
        html += '</div>';
    }
	
}
 