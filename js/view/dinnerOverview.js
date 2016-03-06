var DinnerOverview = function() {    
    
    this.createPrintView = function(fullMenu) {
        menuHtml = "";
            
        for(var i = 0; i < fullMenu.length; i++) {
            html = this.createPrintOverviewElem(fullMenu[i][0].image, fullMenu[i][0].name, fullMenu[i][0].description);
            menuHtml += html; 
        }
        
        $('#printOverviewContainer').html(menuHtml);

    }
    
    this.createPrintOverviewElem = function(img, name, description){
        elemHtml = '<div class="meal-row col-lg-4 col-md-4 col-sm-6 web">';
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
    
    
    this.createSimpleView = function(fullMenu, numOfGuests) {
        menuHtml = "";
        
        for(var i = 0; i < fullMenu.length; i++) {
            html = this.createSimpleOverviewElem(fullMenu[i][0].name, fullMenu[i][1]*numOfGuests, fullMenu[i][0].image);
            menuHtml += html; 
        }
               
        
        $('#simpleOverviewContainer').html(menuHtml);
    }
   
    this.createSimpleOverviewElem = function(name, price, img){
        elemHtml = '<div class="meal-row col-lg-4 col-md-4 col-sm-6 web">';
        elemHtml += '<img class="pos-absolute" src="images/' + img + '">';
        elemHtml += '<div class="pos-absolute">';
        elemHtml += '<h2 class="mealName">' + name + '</h2>';
        elemHtml += '<div class="mealPrice">' + price + ' SEK</div>';
        elemHtml += '</div>';
        elemHtml += '</div>';
        
        return elemHtml;
    }

   
}