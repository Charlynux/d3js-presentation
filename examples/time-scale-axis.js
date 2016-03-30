d3.json('datas/projects.json', function(error, data) {
    render(data);
});

function render(datas) {
  var min = d3.min(datas, d => d.start);
  var max = d3.max(datas, d => d.end);

  var svg = d3.select('.container')
  .append('svg')
    .attr({
      width: 500,
      height: 300
    });

    var scale = d3.time.scale()
        .domain([new Date(min), new Date(max)])
        .range([0, 400]);

  var axis = d3.svg.axis()
                    .ticks(d3.time.months, 3)
                    .orient("bottom")
                    .scale(scale);

  svg.append("g")
      .attr("class", "axis")
      .attr("transform", "translate(0, 200)")
        .call(axis);

  svg.selectAll("rect")
      .data(datas)
      .enter()
        .append("rect")
        .attr({
          height: 10,
          fill: "blue",
          x: d => scale(new Date(d.start)),
          y: (d, i) => i * 20 + 5,
          width: (d, i) => scale(new Date(d.end)) - scale(new Date(d.start))
        });
}
