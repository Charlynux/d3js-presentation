d3.json("datas/projects.json", (err, json) => {
  if (err) console.error(err);

  json.forEach(d => {
    d.start = new Date(d.start);
    d.end = new Date(d.end);
  });

  render(json)
});


function render(data) {
  var min = d3.min(data, d => d.start);
  var max = d3.max(data, d => d.end);

  var xScale = d3.time.scale()
        .domain([min, max])
        .range([0, 500]);

  var svg = d3.select('.container')
  .append('svg')
    .attr({
      width: 500,
      height: 800
    });

  svg.selectAll("rect")
          .data(data).enter()
          .append("rect")
          .attr({
            x : d => xScale(d.start),
            y: (d, i) => (i * 25) + 5,
            width: d => xScale(d.end) - xScale(d.start),
            height: 10,
            fill: "blue"
          })
}
