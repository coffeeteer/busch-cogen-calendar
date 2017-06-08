$(document).ready(function(){
	// YUI().use(
	//   'aui-scheduler',
	//   function(Y) {
	//     var events = [
	//       {
	//         content: 'Travis G',
	//         startDate: new Date(2017, 5, 5, 8 ),
	//         endDate: new Date(2017, 5, 5, 4 )
	//       },
	//       {
	//       	content: 'Lenny S',
	//       	startDate: new Date(2017, 5, 5, 8),
	//       	endDate: new Date(2017, 5, 5, 4)
	//       }
	//     ];

	//     var agendaView = new Y.SchedulerAgendaView();
	//     var dayView = new Y.SchedulerDayView();
	//     var weekView = new Y.SchedulerWeekView();
	//     var monthView = new Y.SchedulerMonthView();

	//     new Y.Scheduler(
	//       {
	//         activeView: monthView,
	//         boundingBox: '#myScheduler',
	//         date: Date.now(),
	//         items: events,
	//         render: true,
	//         views: [dayView, weekView, monthView, agendaView]
	//       }
	//     );
	//   }
	// );

var calendar = $("#calendar").calendar(
		{
			tmpl_path: "/tmpls/",
			events_source: function () { return []; }
		});
}); 
