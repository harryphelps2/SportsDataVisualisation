
var data = [
  {
    "resource_state": 2,
    "name": "Morning Steady run ",
    "distance": 7980.8,
    "moving_time": 2585,
    "elapsed_time": 3309,
    "total_elevation_gain": 83.9,
    "type": "Run",
    "workout_type": 0,
    "id": 1546460528,
    "external_id": "3C3803DB-92E9-49B7-9878-22A97C1F1D99",
    "upload_id": 1663707352,
    "start_date": "2018-05-03T05:21:47Z",
    "start_date_local": "2018-05-03T06:21:47Z",
    "resource_state": 2,
},
    {"name": "Afternoon Run",
    "distance": 2095.4,
    "moving_time": 726,
    "elapsed_time": 938,
    "total_elevation_gain": 13,
    "type": "Run",
    "workout_type": 0,
    "id": 1545360418,
    "external_id": "8F1EB3A9-021B-48FA-8BCC-0B1CC0F4EE22",
    "upload_id": 1662591381,
    "start_date": "2018-05-02T16:33:11Z",
    "start_date_local": "2018-05-02T17:33:11Z",
    "resource_state": 2,
},
   {"name": "Morning Run",
    "distance": 2196,
    "moving_time": 726,
    "elapsed_time": 882,
    "total_elevation_gain": 37.7,
    "type": "Run",
    "workout_type": 0,
    "id": 1542082865,
    "external_id": "0F2824D2-4B5F-4AE0-9F44-46FB4739C40C",
    "upload_id": 1659225820,
    "start_date": "2018-05-01T05:52:31Z",
    "start_date_local": "2018-05-01T06:52:31Z",
    "resource_state": 2,
},
   {"name": "Fartlek ",
    "distance": 11406.5,
    "moving_time": 3200,
    "elapsed_time": 3771,
    "total_elevation_gain": 126.7,
    "type": "Run",
    "workout_type": 0,
    "id": 1541213329,
    "external_id": "B779C436-0092-4FBC-BA58-45F78B0BD06F",
    "upload_id": 1658343255,
    "start_date": "2018-04-30T16:18:15Z",
    "start_date_local": "2018-04-30T17:18:15Z",
    "resource_state": 2,
},
   {"name": "Cool down",
    "distance": 1756.5,
    "moving_time": 587,
    "elapsed_time": 587,
    "total_elevation_gain": 28,
    "type": "Run",
    "workout_type": 0,
    "id": 1536306050,
    "external_id": "garmin_push_2657395466",
    "upload_id": 1653281944,
    "start_date": "2018-04-28T08:14:35Z",
    "start_date_local": "2018-04-28T09:14:35Z",
},
    {"name": "Cool down",
    "distance": 1756.5,
    "moving_time": 587,
    "elapsed_time": 587,
    "total_elevation_gain": 28,
    "type": "Swim",
    "workout_type": 0,
    "id": 1536306050,
    "external_id": "garmin_push_2657395466",
    "upload_id": 1653281944,
    "start_date": "2018-04-28T08:14:35Z",
    "start_date_local": "2018-04-28T09:14:35Z",
     }];
///Users/fedtemp/Desktop/harryphelps/IFDmilestoneproject/static/js/graph.js
///Users/fedtemp/Desktop/harryphelps/IFDmilestoneproject/data/data.json
// queue()
// 	.defer(d3.json, "/data/data.json")
// 	.await(makeGraphs)
// console.log(data)

// d3.json("/static/data/data.json", function(data){
// 	console.log(data)
// }
// );

makeGraphs(data);

function makeGraphs(data) {
	var ndx = crossfilter(data);
	// console.log(ndx)

	var graph = show_sport_distribution(ndx);
	

	
	// console.log(data[3])
};

function show_sport_distribution(ndx){
	var typeDimension = ndx.dimension(dc.pluck("type"));
	var group = typeDimension.group();

	return	dc.barChart("#piechart")
		.width(400)
		.height(300)
		.margins({top :10, right: 50, bottom: 30, left: 50})
		.dimension(typeDimension)
		.group(group)
		.x(d3.scale.ordinal())
		.xUnits(dc.units.ordinal)
		.xAxisLabel("Sport")
		.yAxis().ticks(4);

		dc.renderAll();

}



// queue()
// 	.defer(d3.json, "data/data.json")
// 	.await(makeGraphs);

// function makeGraphs(error, sportsData){

// };

// function makeGraphs(error, sportsData) {
// 	var ndx = crossfilter(sportsData);

// 	show_sport_distribution(ndx);

// 	dc.renderAll;

// }

// function show_sport_distribution(ndx) {
// 	var dim = ndx.dimension(dc.pluck('type'))
// 	var group = dim.group();

// 	dc.barChart("#data")
// 		.width(400)
// 		.height(300)
// 		.dimension(dim)
// 		.group(group)
// }