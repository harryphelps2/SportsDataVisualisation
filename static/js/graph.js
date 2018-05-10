queue()
	.defer(d3.json, "data/sportsData.json")
	.await(makeGraphs);
	
function makeGraphs(error, sportsData) {
	
var ndx = crossfilter(sportsData);

number_of_sports_over_time(ndx, sportsData);
run_type_pie_chart(ndx);

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
        console.log(typeof(d.start_date))
        //2016-12-28T18:12:35Z
    })

    var date_dim = ndx.dimension(dc.pluck('start_date'));
    var total_distance_per_month = date_dim.group().reduceSum(dc.pluck('distance'));
    var minDate = date_dim.bottom(1)[0].start_date;
    console.log(minDate)
    var maxDate = date_dim.top(1)[0].start_date;

        dc.lineChart("#numberOfSports")
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