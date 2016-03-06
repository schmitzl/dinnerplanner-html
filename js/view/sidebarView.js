var SidebarView = function() {    
    
    this.updateMenu = function(menu, numOfGuests){
        $('.numberOfGuests').html(numOfGuests);
        if(menu.length > 0)
            $('#pendingRow').hide();
        for(var i = 0; i < menu.length; i++) {
            thisDish = menu[i][0];
            type = "";
            if(thisDish.type == "main dish")
                type = "main";
            else if (thisDish.type == "starter")
                type = "starter";
            else 
                type = "dessert";
            $('#' + type + 'NameCol').html(thisDish.name);
            $('#' + type + 'PriceCol').html(menu[i][1]*numOfGuests);
            $('#' + type + 'Remove').show();
        }
    };

   
}





