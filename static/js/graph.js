queue()
	.defer(d3.json, "data/sportsData.json")
	.await(makeGraphs);
	
const earthCircumference = 40075000;
const earthRadius = 6378000;

function makeGraphs(error, sportsData) {
	
var ndx = crossfilter(sportsData);

run_type_pie_chart(ndx);
number_of_sports_over_time(ndx, sportsData);
average_cadence_against_average_speed(ndx);
total_distance(ndx);
percentage_round_world(ndx);
// total_elevation(ndx);

dc.renderAll();


}


function run_type_pie_chart(ndx){
    var type_dim = ndx.dimension(dc.pluck('commute'))
    var total_distance_by_type = type_dim.group().reduceSum(dc.pluck('distance'));

        dc.pieChart("#commutePieChart")
            .height(330)
            .radius(90)
            .transitionDuration(1500)
            .dimension(type_dim)
            .group(total_distance_by_type);
}

function number_of_sports_over_time(ndx, sportsData) {
    var parseDate = d3.time.format("%Y-%m-%dT%H:%M:%SZ").parse;
    sportsData.forEach(function(d){
        d.start_date = parseDate(d.start_date);
    })

    var date_dim = ndx.dimension(dc.pluck('start_date'));
    var total_distance_per_month = date_dim.group().reduceSum(dc.pluck('distance'));
    var minDate = date_dim.bottom(1)[0].start_date;
    var maxDate = date_dim.top(1)[0].start_date;

        dc.barChart("#numberOfSports")
            .width(1000)
            .height(300)
            .margins({top: 10, right: 50, bottom: 30, left: 50})
            .dimension(date_dim)
            .group(total_distance_per_month)
            .transitionDuration(500)
            .x(d3.time.scale().domain([minDate, maxDate]))
            .xAxisLabel("Month")
            .yAxisLabel("Distance / m")
            .yAxis().ticks(4);
};

function average_cadence_against_average_speed(ndx){
    var cadence_dim = ndx.dimension(dc.pluck('average_cadence'));
    
    var min_cadence = cadence_dim.bottom(1)[0].average_cadence;
    var max_cadence = cadence_dim.top(1)[0].average_cadence;


    var max_speed_dim = ndx.dimension(function(d) {
        return [d.average_cadence, d.max_speed];
    });

    var speed_group = max_speed_dim.group();

    dc.scatterPlot("#scatterPlot")
        .width(768)
        .height(480)
        .x(d3.scale.linear().domain([min_cadence, max_cadence]))
        .brushOn(false)
        .symbolSize(8)
        .clipPadding(10)
        .yAxisLabel("Average speed")
        .dimension(cadence_dim)
        .group(speed_group);
};

function print_filter(filter) {
    var f=eval(filter);
    if (typeof(f.length) != "undefined") {}else{}
    if (typeof(f.top) != "undefined") {f=f.top(Infinity);}else{}
    if (typeof(f.dimension) != "undefined") {f=f.dimension(function(d) { return "";}).top(Infinity);}else{}
    console.log(filter+"("+f.length+") = "+JSON.stringify(f).replace("[","[\n\t").replace(/}\,/g,"},\n\t").replace("]","\n]"));
}

function total_distance(ndx) {
    var distance_dim = ndx.dimension(function(d){
        return d.type
    });

    var totalDistance = distance_dim.group().reduceSum(function(d){
        return d.distance;
    });
  
    print_filter(totalDistance)
    console.log(totalDistance)

//need to get it to return a 

    dc.numberDisplay("#distanceRan")
        .formatNumber(d3.format(".1f"))
        .valueAccessor(function(d){
            return d.value / 1000
        })
        .group(totalDistance);
};


function percentage_round_world(ndx) {
    var distance_dim = ndx.dimension(function(d){
        return d.type
    });

    var totalDistance = distance_dim.group().reduceSum(function(d){
        return d.distance;
    });
  
    // print_filter(totalDistance)
    // console.log(totalDistance)

//need to get it to return a 

    dc.numberDisplay("#percentageRoundWorld")
        .formatNumber(d3.format(".2%"))
        .valueAccessor(function(d){
            return d.value / earthCircumference;
        })
        .group(totalDistance);
};

var apiKey = "AIzaSyB9XZkjWuLN5EpJoMqk9e5SVkCQc4-mC3k"

function initMap() {

var homeLat = 51.4;
var homeLong = -0.00098;
    var map = new google.maps.Map(document.getElementById('map'), {
      zoom: 3,
      center: {lat: homeLat, lng: homeLong},
      mapTypeId: 'terrain'
    });


totalDistance = 2609939;
var finishLat = homeLat - (totalDistance / earthRadius) * (180/Math.PI);

console.log(finishLat);



    var pathCoordinates = [
      {lat: homeLat, lng: homeLong},
      {lat: finishLat, lng: homeLong}
    ];
    var crowFliesPath = new google.maps.Polyline({
      path: pathCoordinates,
      geodesic: true,
      strokeColor: '#FF0000',
      strokeOpacity: 1.0,
      strokeWeight: 2
    });

    crowFliesPath.setMap(map);
    }

// function total_elevation(ndx) {
//     var type_dim = ndx.dimension(function(d){
//         return d.type
//     });

//     var totalElevation = type_dim.group().reduceSum(function(d){
//         return d.total_elevation_gain;
//     });
  
//   //returning NaN

//     print_filter(totalElevation)
//     console.log(totalElevation)

// //need to get it to return a 

//     dc.numberDisplay("#elevationGained")
//         .valueAccessor(function(d){
//             return d.value 
//         })
//         .group(totalElevation);
// };

   



