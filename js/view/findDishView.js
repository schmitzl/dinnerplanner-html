var FindDishView = function() {    
    
    this.setHeadingBgOpaque = function(){
        
        var color = '#99D713';
        var rgbaCol = 'rgba(' + parseInt(color.slice(-6,-4),16)
        + ',' + parseInt(color.slice(-4,-2),16)
        + ',' + parseInt(color.slice(-2),16)
        +',1.0)';
        $('#header').css('background-color', rgbaCol)
    }
 
    this.createDishElements = function(dishes) {
        var allDishesHtml = "";
        
        for(var i = 0; i < dishes.length; i++) {
            if(i % 3 == 0)
                allDishesHtml += '<div class="row dishrow">';
            name = dishes[i].name;
            img = dishes[i].image;
            idElem = dishes[i].id;
            dishElem = this.createDishElement(name, img, idElem);
            allDishesHtml += dishElem;
            if(i % 3 == 2)
                allDishesHtml += '</div>';
        }
        $('#dishesContainer').html(allDishesHtml);
    }
    
    this.createDishElement = function(name, image, idElem) {
        
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