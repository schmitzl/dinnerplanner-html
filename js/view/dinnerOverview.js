


//DinnerOverview Object constructor
var DinnerOverview = function () {
    
    var initializeView = function(){
        fullMenu = getFullMenu();
        
        for(var i = 0; i < fullMenu.length; i++) {
            createSimpleOverviewElem();
        }
        
    };
    
    var createSimpleOverviewElem = function(name, price, img){
    
        elemHtml = "";
        elemHtml += '<div class="meal-row col-lg-4 col-md-4 col-sm-6 web">';
        elemHtml += '<img class="pos-absolute" src="images/' + img + '">';
        elemHtml += '<div class="pos-absolute">';
        elemHtml += '<h2 class="mealName">' + name + '</h2>';
        elemHtml += '<span class="mealPrice">' + price + ' SEK</span>';
        elemHtml += '</div>';
        elemHtml += '</div>';
        
        return elemHtml;
    };
    
    var createPrintOverviewElem = function(){
        
    };
    
    showSimpleDinnerOverview = function() {
        $('#simpleOverview').show();
    };
    
    showPrintDinnerOverview = function() {
        $('#printOverview').show();
    };
	
}
 