d3.json("datas/followers.json", (err, data) => render(data));

function render(data) {
  var color = d3.scale.category10();

  var width = 500;
  var height = 500;
  var svg = d3.select('.container')
      .append('svg')
        .attr({
          width: width,
          height: height
        });

  var pack = d3.layout.pack()
      .size([width, height])
      .value(d => d.followersCount)
      .children(d => d.followers)
      .sort(null)
      .padding(1.5);

  var nodes = svg.selectAll(".follower")
        .data(pack.nodes(data))
        .enter()
        .append("g").attr("class", "follower")
        .attr("transform", d => "translate("+ d.x + ", " + d.y + ")");

  nodes.append("title")
          .text(d => d.screenName)

  nodes.append("circle").attr({
            r: d => d.r,
            fill: d => d.parent ? "#" + d.profileBackgroundColor : "none"
          })
          .on("click", d => console.log(d.screenName));
}
