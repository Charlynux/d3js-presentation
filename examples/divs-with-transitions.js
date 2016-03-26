function render(someDatas) {
  var selection = d3.select(".container")
      .selectAll(".value")
        .data(someDatas);

    selection.enter()
          .append("div")
          .attr("class", "value");

    doTransition(selection.exit())
              .style("background-color", "red")
              .transition()
              .duration(500)
              .style("width", "0px")
              .remove();

    doTransition(selection)
          .style({
              width: x => x + "px"
            });
}

function doTransition(selection) {
  return selection.transition()
  .duration(1000);
}

var datas = [100, 300, 400, 200, 500];

render(datas);

var newDatas = [300, 100, 400];

setTimeout(() => render(newDatas), 1000);
