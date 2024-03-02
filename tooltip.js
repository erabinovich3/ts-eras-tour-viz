import * as d3 from "https://cdn.jsdelivr.net/npm/d3@7/+esm";
import { fetchTourData } from "./tourDataUtils.js";
import { getAlbumColorFromSong } from "./tsUtils.js";

const tourData = await fetchTourData();

export const tooltip = (selectionGroup) => {
  selectionGroup.each(function () {
    d3.select(this)
      .on("mouseover.tooltip", handleMouseover)
      .on("mouseleave.tooltip", handleMouseleave);
  });
};

const tipElem = d3
  .select("body")
  .append("div")
  .attr("class", "tooltip")
  .style("opacity", 0);

const MOUSE_OFFSET_X = 10;
const MOUSE_OFFSET_Y = -10;

function handleMouseover(event, d) {
  const width = window.innerWidth;
  const height = window.innerHeight;
  d3.select(this).transition().duration(200).attr("fill-opacity", "1");

  setTooltipContent(d);

  const tipElemRect = tipElem.node().getBoundingClientRect();

  tipElem
    .style(
      "top",
      event.pageY < (height / 2 || height - tipElemRect.height)
        ? `${event.pageY + MOUSE_OFFSET_Y}px`
        : `${event.pageY - MOUSE_OFFSET_Y - tipElemRect.height}px`
    )
    .style(
      "left",
      event.pageX < (width / 2 || width - tipElemRect.width)
        ? `${event.pageX + MOUSE_OFFSET_X}px`
        : `${event.pageX - MOUSE_OFFSET_X - tipElemRect.width}px`
    );

  tipElem.transition().duration(250).style("opacity", 1);
}

function handleMouseleave(event, d) {
  d3.select(this).transition().duration(200).attr("fill-opacity", "0.5");
  tipElem.transition().duration(250).style("opacity", 0);
}

function setTooltipContent(d) {
  // clear current tooltip content
  d3.selectAll(".tooltip > *").remove();

  const tourStops = tourData.filter((stop) => stop.Location === d.loc);

  // set up tooltip
  tipElem.append("div").attr("class", "tooltip-title").text(d.loc);
  tipElem
    .append("div")
    .attr("class", "tooltip-subtitle")
    .text(`${tourStops.length} show${tourStops.length > 1 ? "s" : ""}`);
  tipElem.append("div").attr("class", "tooltip-tour-stops");

  // populate tooltip
  tourStops.map((stop, i) => {
    let tourStop = tipElem
      .select(".tooltip-tour-stops")
      .append("div")
      .attr("class", "tooltip-tour-stop");
    tourStop.append("div").attr("class", "tour-stop-date").text(stop.Date);

    createSSCircle(stop.ss1, tourStop, stop.Date, 1);
    tourStop.append("span").text(stop.ss1.join(" x "));

    tourStop.append("div").attr("class", "song-separator");

    createSSCircle(stop.ss2, tourStop, stop.Date, 2);
    tourStop.append("span").text(stop.ss2.join(" x "));

    if (i !== tourStops.length - 1) {
      tourStop.append("div").attr("class", "date-separator");
    }
  });
}

function createSSCircle(songs, tourStop, date, pos) {
  let fill = "";

  const svg = tourStop
    .append("svg")
    .attr("class", "surprise-song-color")
    .attr("width", 13)
    .attr("height", 13);

  // if mashup, create linear gradient, else return single color
  if (songs.length > 1) {
    const linearGradient = svg
      .append("defs")
      .append("linearGradient")
      .attr("id", `${date}_${pos}`)
      .attr("x1", "0")
      .attr("x2", "1")
      .attr("y1", "1")
      .attr("y2", "0")
      .attr("gradientTransform", "translate(0.5, 0)");

    songs.forEach((song, i) => {
      linearGradient
        .append("stop")
        .attr("offset", `${i * (100 / songs.length)}%`)
        .attr("stop-color", getAlbumColorFromSong(song));
    });

    fill = `url(#${date}_${pos})`;
  } else {
    fill = getAlbumColorFromSong(songs[0]);
  }

  svg
    .append("circle")
    .attr("cx", 13 / 2)
    .attr("cy", 13 / 2)
    .attr("r", 6)
    .attr("fill", fill)
    .attr("stroke", "gray");
}
