import React, { useEffect, useRef } from "react";
import * as d3 from "d3";

function Visualization({ data }) {
  const chartRef = useRef(null);

  useEffect(() => {
    // Remove any previous SVG elements
    d3.select(chartRef.current).selectAll("*").remove();

    const margin = { top: 20, right: 30, bottom: 40, left: 40 };
    const width = 600 - margin.left - margin.right;
    const height = 400 - margin.top - margin.bottom;

    const svg = d3
      .select(chartRef.current)
      .append("svg")
      .attr("width", width + margin.left + margin.right)
      .attr("height", height + margin.top + margin.bottom)
      .append("g")
      .attr("transform", `translate(${margin.left},${margin.top})`);

    const topicCounts = {};
    data.forEach((item) => {
      const topic = item.topic;
      if (!topicCounts[topic]) {
        topicCounts[topic] = 1;
      } else {
        topicCounts[topic]++;
      }
    });

    const x = d3
      .scaleBand()
      .domain(Object.keys(topicCounts))
      .range([0, width])
      .padding(0.1);

    const y = d3
      .scaleLinear()
      .domain([0, d3.max(Object.values(topicCounts))])
      .nice()
      .range([height, 0]);

    svg
      .selectAll(".bar")
      .data(Object.entries(topicCounts))
      .enter()
      .append("rect")
      .attr("class", "bar")
      .attr("x", (d) => x(d[0]))
      .attr("y", (d) => y(d[1]))
      .attr("width", x.bandwidth())
      .attr("height", (d) => height - y(d[1]));

    svg
      .append("g")
      .attr("class", "x-axis")
      .attr("transform", `translate(0,${height})`)
      .call(d3.axisBottom(x));

    svg.append("g").attr("class", "y-axis").call(d3.axisLeft(y));
  }, [data]);

  return (
    <div>
      <h2>Visualization</h2>
      <div ref={chartRef}></div>
    </div>
  );
}

export default Visualization;
