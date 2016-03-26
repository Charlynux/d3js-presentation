var datas = [100, 300, 400, 200, 500];

d3.select(".container")
    .selectAll(".value")
      .data(datas)
      .enter()
        .append("div")
        .attr("class", "value")
        .style("width", x => x + "px");
