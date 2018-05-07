queue()
	.defer(d3.json, "data/sportsData.json")
	.await(makeGraphs);
	
function makeGraphs(error, sportsData) {
	
var ndx = crossfilter(sportsData);

var name_dim = ndx.dimension(dc.pluck('type'));
var total_spend_per_person = name_dim.group();

dc.barChart("#chart-here")
    .width(300)
    .height(150)
    .margins({top: 10, right: 50, bottom: 30, left: 50})
    .dimension(name_dim)
    .group(total_spend_per_person)
    .transitionDuration(500)
    .x(d3.scale.ordinal())
    .xUnits(dc.units.ordinal)
    .xAxisLabel("Sports")
    .yAxis().ticks(4);

dc.renderAll();

}