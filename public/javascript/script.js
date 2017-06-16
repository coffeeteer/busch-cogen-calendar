$(document).ready(function(){
		
	// var date = scheduler.getState().date;
	// var mode = scheduler.getState().mode;
	// mode.date;



	$('#body').on(function init() {
		//scheduler.init('scheduler_here', new Date(), 'timeline'); // trying for today's date
    	scheduler.init('scheduler_here', new Date(2017,5,1),"month");
        scheduler.init('scheduler_here',new Date(2017,5,8),"month");

	    scheduler.templates.xml_date = function(value){ return new Date(value); };
	    scheduler.load("/data", "json");
    });
}); //Document.ready
