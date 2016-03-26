var datas = [ { value: 100, color: "red" },
 { value: 300, color: "green" },
 { value: 400, color: "red" },
 { value: 200, color: "blue" },
 { value: 500, color: "red" }
];

d3.select(".container")
    .selectAll(".value")
      .data(datas)
      .enter()
        .append("div")
        .attr("class", "value")
        .style({
          "background-color": x => x.color,
          width: x => x.value + "px"
        });
