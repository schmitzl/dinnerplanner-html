//DinnerOverview Object constructor
var DinnerOverviewController = function (containerOverview, containerPrintView, dinnerModel) {
    
    dinnerModel.attach(function(model, args){
        if(args == dinnerModel.NUM_OF_GUESTS_CHANGED) {
            updateDishView(dinnerModel.getNumberOfGuests());
        }
    });
    
    
    this.showSimpleOverview = function() {
        
        initializeView();
        
        menuHtml = "";
        total = dinnerModel.getTotalMenuPrice();
        
        for(var i = 0; i < fullMenu.length; i++) {
            html = createSimpleOverviewElem(fullMenu[i][0].name, fullMenu[i][1]*dinnerModel.getNumberOfGuests(), fullMenu[i][0].image);
            menuHtml += html; 
        }
                
        $('#simpleOverviewContainer').html(menuHtml);
        
        $('#myDinnerBar').show();
        containerOverview.show();
    }
    
    this.hideSimpleOverview = function(){
        containerOverview.hide();
    };
    
    this.showPrintView = function() {
       
        menuHtml = "";
        
        for(var i = 0; i < fullMenu.length; i++) {
            html = createPrintOverviewElem(fullMenu[i][0].image, fullMenu[i][0].name, fullMenu[i][0].description);
            menuHtml += html; 
        }
        
        $('#printOverviewContainer').html(menuHtml);
        containerPrintView.show();
    }
    
    this.hidePrintView = function(){
        containerPrintView.hide();
    };
    
    
    dinnerModel.attach(function(model, args){
        
    });
    
    var fullMenu = Array();
    
    var initializeView = function(){
        fullMenu = dinnerModel.getFullMenu();
    }
    
    this.addPrintButtonAction = function(action){
        $('#printButton').on( "click", action);
    };
    
    
    var createSimpleOverviewElem = function(name, price, img){
    
        elemHtml = "";
        elemHtml += '<div class="meal-row col-lg-4 col-md-4 col-sm-6 web">';
        elemHtml += '<img class="pos-absolute" src="images/' + img + '">';
        elemHtml += '<div class="pos-absolute">';
        elemHtml += '<h2 class="mealName">' + name + '</h2>';
        elemHtml += '<div class="mealPrice">' + price + ' SEK</div>';
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
        elemHtml += '</div><br>';
        
        return elemHtml;
    }
    
    
	
}
 