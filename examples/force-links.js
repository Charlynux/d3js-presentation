var data = [{id: 0}, {id: 1}, {id: 2}, {id: 3}, {id: 4}];

var links = [
  { source:0, target: 1 },
  { source:0, target: 2 },
  { source:0, target: 3 },
  { source:0, target: 4 }
];

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
                      .links(links)
                      .charge(-300)
                      .on("tick", tick)
                      .start();

var lines = svg.selectAll("line")
              .data(force.links()).enter()
              .append("line")
              .attr("stroke", "black");

var nodes = svg.selectAll("circle")
      .data(force.nodes()).enter()
      .append("circle")
        .attr({
          r: 10,
          fill: "blue"
        })
        .call(force.drag);


function tick() {
  nodes.attr({
    cx : d => d.x,
    cy: d => d.y
  });

  lines.attr({
    x1: d => d.source.x,
    y1: d => d.source.y,
    x2: d => d.target.x,
    y2: d => d.target.y
  });
}
