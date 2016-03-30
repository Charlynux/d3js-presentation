var datas = [655, 150, 200, 75, 800];

var width = height = 500;
var radius = width / 2;

var color = d3.scale.category10();

var pie = d3.layout.pie().sort(null);

var arc = d3.svg.arc()
                  .outerRadius(radius)
                  .innerRadius(radius - 50);

var svg = d3.select('.container')
.append('svg')
  .attr({
    width: width,
    height: height
  })
  .append("g")
    .attr("transform", "translate(250, 250)");

svg.selectAll("path")
    .data(pie(datas))
      .enter()
        .append("path")
          .attr("d", arc)
          .attr("fill", (d, i) => color(i));
