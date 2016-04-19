var data = d3.range(200).map(() => ({}));

var width = 500;
var height = 500;
var svg = d3.select('.container')
    .append('svg')
      .attr({
        width: width,
        height: height
      });

var force = d3.layout.force()
                      .size([width, height])
                      .nodes(data)
                      .on("tick", tick)
                      .start();

var nodes = svg.selectAll("circle")
      .data(force.nodes()).enter()
      .append("circle")
        .attr({
          r: 5,
          fill: "blue"
        });

function tick() {
  nodes.attr({
    cx : d => d.x,
    cy: d => d.y
  });
}
