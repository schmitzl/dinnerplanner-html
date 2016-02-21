//StartView Object constructor
var StartViewController = function (container) {
        
    this.addDinnerButtonAction = function(action){
        $('#createDinner-button').on( "click", action);
    };
    
    this.hideView = function(){
        container.hide();
    };
    
    this.showView = function() {
        container.show();
    };
    

}
 