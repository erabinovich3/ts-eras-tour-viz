import * as d3 from "https://cdn.jsdelivr.net/npm/d3@7/+esm";
import { getCityCount } from "./tourDataUtils.js";
import { fetchGeoData } from "./geoDataUtils.js";
import { tooltip } from "./tooltip.js";

const geoData = await fetchGeoData();
const cityCount = await getCityCount();

window.onload = draw();
window.addEventListener("resize", draw);

function draw() {
  // clear any previous drawing
  d3.selectAll("svg").remove();

  const width = window.innerWidth;
  const height = window.innerHeight;
  const projection = d3
    .geoEquirectangular()
    .fitSize([width, height], geoData.land);
  const path = d3.geoPath(projection);

  // create svg
  const svg = d3
    .create("svg")
    .attr("viewBox", [0, 0, width, height])
    .attr("width", width)
    .attr("height", height)
    .attr("style", "max-width: 100%; height: auto;");

  const mapGroup = svg.append("g");
  const tourGroup = svg.append("g");

  // land
  mapGroup
    .selectAll(".land")
    .data(geoData.land.features)
    .join("path")
    .attr("class", "land")
    .attr("d", path);

  // boundaries
  mapGroup
    .append("path")
    .datum(geoData.countries)
    .attr("class", "countries")
    .attr("d", path);

  // tour stops
  tourGroup
    .selectAll(".tour-stop")
    .data(cityCount)
    .join("circle")
    .attr("class", "tour-stop")
    .attr("cx", (d) => projection([d.long, d.lat])[0])
    .attr("cy", (d) => projection([d.long, d.lat])[1])
    .attr("r", (d) => d.count * (width / height))
    .attr("fill", "#e0218a")
    .attr("fill-opacity", 0.5)
    .call(tooltip);

  // add title and subtitle
  svg
    .append("text")
    .attr("x", "1.5rem")
    .attr("y", "2.7rem")
    .attr("class", "map-title")
    .text("The Eras Tour");

  svg
    .append("text")
    .attr("x", "2rem")
    .attr("y", "4.5rem")
    .attr("class", "sub-title")
    .text("Surprise Songs");

  // append SVG to DOM
  document.body.append(svg.node());
}
