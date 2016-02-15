$(function() {

	$('.viewContainer').hide();
    
    //Create views
    var startView = new StartView($('#startView'));
    //var selectDishView = new SelectDishView($('#findDishView'));
    
    startView.showView();
    
    
});