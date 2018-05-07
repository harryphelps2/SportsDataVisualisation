queue()
	.defer(d3.json, "data/sportsData.json")
	.await(makeGraphs);
	
function makeGraphs(error, sportsData) {
	
var ndx = crossfilter(sportsData);

number_of_sports(ndx);

dc.renderAll();
}

function number_of_sports(ndx) {
    var name_dim = ndx.dimension(dc.pluck('type'));
    var total_activities_per_sport = name_dim.group();

    dc.barChart("#numberOfSports")
    .width(300)
    .height(150)
    .margins({top: 10, right: 50, bottom: 30, left: 50})
    .dimension(name_dim)
    .group(total_activities_per_sport)
    .transitionDuration(500)
    .x(d3.scale.ordinal())
    .xUnits(dc.units.ordinal)
    .xAxisLabel("Sports")
    .yAxis().ticks(4);
};