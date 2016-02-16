//StartView Object constructor
var StartView = function (container) {
    
    $('#createDinner-button').on( "click", function() {
         $('#startView').hide();
         showFindDishView();
         $('#sidebar-wrapper').show();
    });
    
    showStartView = function() {
        container.show();
    };
    
	
}
 