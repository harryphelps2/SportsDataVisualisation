// var xhr = new XMLHttpRequest();

// xhr.onreadystatechange = function() {
// 	if (this.readyState == 4 && this.status == 200) {
// 		document.getElementById("data").innerHTML = this.responseText;
// 	}
// };

// xhr.open("GET", "https://www.strava.com/oauth/authorize");

// xhr.send();






var Strava = require('strava-v3');
const strava_access_token = {
"access_token": "c8fc071884e0be21ca467a952dca90d1f065394a"
}

Strava.athlete.listActivities(strava_access_token, function(err,payload,limits) {
    //do something with your payload, track rate limits 

    console.log(JSON.stringify(payload))
});

// console.log(JSON.stringify(Strava.activities));




// var strava = require('strava-v3');
// // var defaultClient = StravaApiV3.ApiClient.instance;

// //var api = new strava.ActivitiesApi()

// //api.getLoggedInAthleteActivities({"accessToken" : "c8fc071884e0be21ca467a952dca90d1f065394a"}, opts, callback);

// //Configure OAuth2 access token for authorization: strava_oauth
// // var strava_oauth = defaultClient.authentications['strava_oauth'];
// // strava_oauth.accessToken = "c8fc071884e0be21ca467a952dca90d1f065394a"

// // var api = new StravaApiV3.ActivitiesApi()

// var opts = { 
//   'before': 56, // {Integer} An epoch timestamp to use for filtering activities that have taken place before a certain time.
//   'after': 56, // {Integer} An epoch timestamp to use for filtering activities that have taken place after a certain time.
//   'page': 56, // {Integer} Page number.
//   'perPage': 56 // {Integer} Number of items per page. Defaults to 30.
// };

// var callback = function(error, data, response) {
//   if (error) {
//     console.error(error);
//   } else {
//     console.log('API called successfully. Returned data: ' + data);
//   }
// };
// strava.athlete.listActivities({"accessToken" : "c8fc071884e0be21ca467a952dca90d1f065394a"},opts, callback);





