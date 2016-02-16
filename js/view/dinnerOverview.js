//DinnerOverview Object constructor
var DinnerOverview = function (dinnerModel) {
    
    var fullMenu = Array();
    
    var initializeView = function(){
        fullMenu = dinnerModel.getFullMenu();
    }
    
    $('#printButton').on( "click", function() {
         $('#simpleOverview').hide();
         showPrintDinnerOverview();
    });
    
    
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
    }
    
    var createPrintOverviewElem = function(img, name, description){
        
        elemHtml = "";
        elemHtml += '<div class="meal-row col-lg-4 col-md-4 col-sm-6 web">';
        elemHtml += '<img class="pos-absolute" src="images/' + img + '">';
        elemHtml += '</div>';
        elemHtml += '<div class="meal-row col-lg-4 col-md-4 col-sm-6 web">';
        elemHtml += '<h2 class="mealName">' + name + '</h2>';
        elemHtml += '</div>';
        elemHtml += '<div class="meal-row col-lg-4 col-md-4 col-sm-6 web">';
        elemHtml += '<h4>Preparation</h4>';
        elemHtml += '<span class="preparationDescription">' + description + '</span>';
        elemHtml += '</div>';
        
        return elemHtml;
    }
    
    showSimpleDinnerOverview = function() {
        
        initializeView();
        
        menuHtml = "";
        total = 0;
        
        for(var i = 0; i < fullMenu.length; i++) {
            price = 0;
            for(var j = 0; j < fullMenu[i].ingredients.length; j++) {
                price += fullMenu[i].ingredients[j].price * dinnerModel.getNumberOfGuests();
            }
            total += price;
            html = createSimpleOverviewElem(fullMenu[i].name, price, fullMenu[i].image);
            menuHtml += html; 
        }
                
        
        $('#simpleOverviewContainer').html(menuHtml);
        
        $('#myDinnerBar').show();
        $('#simpleOverview').show();
    }
    
    showPrintDinnerOverview = function() {
       
        menuHtml = "";
        
        for(var i = 0; i < fullMenu.length; i++) {
            html = createPrintOverviewElem(fullMenu[i].image, fullMenu[i].name, fullMenu[i].description);
            menuHtml += html; 
        }
        
        $('#printOverviewContainer').html(menuHtml);
        
        $('#printOverview').show();
    }
	
}
 