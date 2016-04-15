d3.json("./datas/followers.json", (err, data) => {
  render(data.followers);
});


function render(data) {
  var maxFollowers = d3.max(data, d => d.followersCount);
  var radiusRatio = 50 / maxFollowers;

  var width = 500;
  var height = 500;
  var svg = d3.select('.container')
      .append('svg')
        .attr({
          width: width,
          height: height
        });

  var force = d3.layout.force()
                  .nodes(data)
                  .size([width, height])
                  .on("tick", tick)
                  .charge(d => -Math.max(1, d.followersCount * radiusRatio) * 8)
                  .gravity(0.1);

  force.start();

  var node = svg.selectAll("circle")
                  .data(force.nodes()).enter()
                  .append("circle")
                      .attr({
                        r: d => Math.max(1, d.followersCount * radiusRatio),
                        fill: d => (d.location && d.location.indexOf("Amiens") >= 0) ? "red" : "blue"
                      });
  node.on("click", d => console.log(d.screenName))
        .call(force.drag);


  function tick() {
    node.attr({
      cx: d => d.x,
      cy: d => d.y
    })
  }
}
