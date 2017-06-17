$(document).ready(function(){

	var events = [
		{id: 1, text: 'Travis G', start_date: '2017/06/16 16:00', end_date: '2017/06/17 00:00'},
		{id: 2, text: 'Glenn H', start_date: '2017/06/16 16:15', end_date: '2017/06/17 08:00'}
	];

	// CREATE TABLE `events` (
	//   `id` int(11) NOT NULL AUTO_INCREMENT,
	//   `start_date` datetime NOT NULL,
	//   `end_date` datetime NOT NULL,
	//   `text` varchar(255) NOT NULL,
	//   PRIMARY KEY (`id`)
	// )

	(function init() {
		scheduler.config.xml_date='%Y-%m-%d %H:%i';

    	scheduler.init('scheduler_here', new Date(), 'month'); // Starts with today's date

	    scheduler.parse(events, 'json');
    })();
    
}); //Document.ready