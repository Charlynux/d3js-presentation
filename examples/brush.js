var numbers = [100, 300, 400, 200, 500];

var svg = d3.select('.container')
.append('svg')
  .attr({
    width: 500,
    height: 100
  });
svg.append("rect")
      .attr({
        width: 500,
        height: 100,
        fill: "green"
      });

var scale = d3.scale.linear()
                      .range([0, 500])
                      .domain([0, 500]);

var brush = d3.svg.brush().x(scale);

brush.on("brushend", () => {
  var domain = brush.extent();
  render(numbers.filter(x => x >= domain[0] && x <= domain[1]))
})

svg.append("g").attr("class", "brush")
    .call(brush)
        .selectAll("rect")
        .attr("height", 100);

function render(datas) {
  var values = d3.select(".container")
      .selectAll(".value")
        .data(datas);
  values.enter()
          .append("div")
          .attr("class", "value")
          .style("width", x => x + "px");

  values.style("width", x => x + "px");

  values.exit().remove();
}

render(numbers);
