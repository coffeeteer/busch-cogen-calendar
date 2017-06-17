$(document).ready(function(){

	var events = [
		{id: 1, text: 'Travis G', start_date: '06/16/2017 16:00', end_date: '06/17/2017 00:00'},
		{id: 2, text: 'Glenn H', start_date: '06/16/2017 16:15', end_date: '06/17/2017 08:00'}
	];


	(function init() {
     scheduler.init('scheduler_here', new Date(), 'month'); // Starts with today's date

	    scheduler.parse(events, 'json');
    })();
    
}); //Document.ready