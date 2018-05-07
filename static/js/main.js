var Strava = require('strava-v3');
var data;
const strava_access_token = {
"access_token": "c8fc071884e0be21ca467a952dca90d1f065394a"
};

var fs = require('fs');

function fetchAllActivities(opts, hasEntries) {
	if (!hasEntries) return;

	Strava.athlete.listActivities(opts, function(err,payload,limits) {
	    //do something with your payload, track rate limits 

	    //data = JSON.stringify(payload)
	    outputData = JSON.stringify(payload, null, 2);
	    var stillHasEntries = outputData.length > 0;
	    // console.log(Payload);
	    fs.appendFile("data.json", outputData, function(err) {
	    	if(err) {
	    		return console.log(err);
	    	}
	    	console.log(opts.pageNumber)
	    	opts.page = opts.page + 1;
	    	fetchAllActivities(opts, stillHasEntries);
	    });

	});
}



var pageNumber = 0;

var opts = {
	'access_token': "c8fc071884e0be21ca467a952dca90d1f065394a",
	// 'before' : 1525086849,
	//'after': 1420070400,
	'page': pageNumber,
	'perPage': 200
};


fetchAllActivities(opts, true);