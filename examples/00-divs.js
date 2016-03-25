var datas = [100, 300, 400, 200, 500];

d3.select(".container")
    .selectAll(".value")
      .data(datas)
      .enter()
        .append("div")
        .attr("class", "value")
        .style({
          "background-color": "blue",
          "height" : "20px",
          "margin" : "10px",
          width: x => x + "px"
        });
