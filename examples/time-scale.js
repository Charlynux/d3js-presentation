d3.json("datas/projects.json", (err, json) => {
  if (err) console.error(err);
  render(json)
});


function render(data) {
  var xScale = d3.time.scale()
        .domain([new Date("2015-08-15"), new Date("2016-12-13")])
        .range([0, 400]);

  d3.select(".container")
      .append("svg")
        .attr({
          width: 400,
          height: 600
        })
        .selectAll("rect")
          .data(data)
          .enter()
          .append("rect")
          .attr({
            x : d => xScale(new Date(d.start)) + 5,
            y: (d, i) => (i * 25) + 5,
            width: d => xScale(new Date(d.end)) - xScale(new Date(d.start)),
            height: 10,
            fill: "blue"
          })
}
