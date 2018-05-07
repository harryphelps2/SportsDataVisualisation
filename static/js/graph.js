queue()
	.defer(d3.json, "data/sportsData.json")
	.await(makeGraphs);
	
function makeGraphs(error, sportsData) {
	
var ndx = crossfilter(sportsData);

number_of_sports(ndx);
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

function number_of_sports(ndx) {
    var type_dim = ndx.dimension(dc.pluck('type'));
    var total_activities_per_sport = type_dim.group();

        dc.barChart("#numberOfSports")
        .width(300)
        .height(150)
        .margins({top: 10, right: 50, bottom: 30, left: 50})
        .dimension(type_dim)
        .group(total_activities_per_sport)
        .transitionDuration(500)
        .x(d3.scale.ordinal())
        .xUnits(dc.units.ordinal)
        .xAxisLabel("Sports")
        .yAxis().ticks(4);
};