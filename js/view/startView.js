//StartView Object constructor
var StartView = function (container) {
    
    $('#createDinner-button').on( "click", function() {
         $('#startView').hide();
         showFindDishView();
         $('#sidebar').show();
    });
    
    showStartView = function() {
        container.show();
    };
    
	
}
 