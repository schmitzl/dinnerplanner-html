//DinnerOverview Object constructor
var DinnerOverviewController = function (containerOverview, containerPrintView, dinnerModel, dinnerOverview) {
    
    dinnerModel.attach(function(model, args){
        if(args == dinnerModel.NUM_OF_GUESTS_CHANGED) {
            dinnerOverview.createPrintView(dinnerModel.getFullMenu());
            dinnerOverview.createSimpleView(dinnerModel.getFullMenu(), dinnerModel.getNumberOfGuests());
        }
    });
    
    
    this.showSimpleOverview = function() {
        dinnerOverview.createSimpleView(dinnerModel.getFullMenu(), dinnerModel.getNumberOfGuests());
        $('#myDinnerBar').show();
        containerOverview.show();
    }
    
    this.hideSimpleOverview = function(){
        containerOverview.hide();
    };
    
    this.showPrintView = function() {
        dinnerOverview.createPrintView(dinnerModel.getFullMenu());
        $('#myDinnerBar').show();
        containerPrintView.show();
    }
    
    this.hidePrintView = function(){
        containerPrintView.hide();
    };
    
    this.addPrintButtonAction = function(action){
        $('#printButton').on( "click", action);
    };
    
	
}
 