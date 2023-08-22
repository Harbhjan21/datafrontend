import React, { useState } from "react";

function Filters({ onFiltersChange }) {
  const [selectedYear, setSelectedYear] = useState([]);
  const [selectedTopic, setSelectedTopic] = useState([]);
  const [selectedSector, setSelectedSector] = useState([]);
  const [selectedRegion, setSelectedRegion] = useState([]);

  const handleYearChange = (event) => {
    setSelectedYear(
      Array.from(event.target.selectedOptions, (option) => option.value)
    );
  };

  const handleTopicChange = (event) => {
    const data = Array.from(event.target.selectedOptions, (option) =>
      option.value.toUpperCase()
    );
    setSelectedTopic(data);
  };

  const handleSectorChange = (event) => {
    const data = Array.from(event.target.selectedOptions, (option) =>
      option.value.toUpperCase()
    );
    setSelectedSector(data);
  };

  const handleRegionChange = (event) => {
    const data = Array.from(event.target.selectedOptions, (option) =>
      option.value.toUpperCase()
    );
    setSelectedRegion(data);
  };

  const handleApplyFilters = () => {
    const filters = {
      year: selectedYear,
      topic: selectedTopic,
      sector: selectedSector,
      region: selectedRegion,
      // Add more filters as needed
    };
    onFiltersChange(filters);
  };

  return (
    <div>
      <h2>Filters</h2>
      <label htmlFor="year">Select Year:</label>
      <select id="year" multiple onChange={handleYearChange}>
        {/* Populate years based on available data */}
        <option value="2012">2012</option>
        <option value="2014">2014</option>
        <option value="2015">2015</option>
        <option value="2016">2016</option>
        <option value="2017">2017</option>
        <option value="2020">2020</option>
        {/* Add more options based on available years */}
      </select>
      {/* Create similar select elements for other filters */}
      <label htmlFor="year">Select topic:</label>
      <select id="year" multiple onChange={handleTopicChange}>
        {/* Populate years based on available data */}

        <option value="gas">gas</option>
        <option value="energy">energy</option>
        <option value="oil">oil</option>
        <option value=""> </option>
        <option value="water">water</option>
        <option value="climate change">climate change</option>
        <option value="information">information</option>
        <option value="production">production</option>
        <option value="market">market</option>
        <option value="growth">growth</option>
        <option value="power">power</option>
        <option value="population">population</option>
        <option value="economic growth">economic growth</option>
        <option value="trade">trade</option>
        <option value="vehicle">vehicle</option>
        <option value="demand">demand</option>
        <option value="gasoline">gasoline</option>
        <option value="electricity">electricity</option>
        <option value="coal">coal</option>
        <option value="economy">economy</option>
        <option value="industry">industry</option>
        <option value="export">export</option>
        <option value="food">food</option>
        <option value="transportation">transportation</option>
        <option value="bank">bank</option>
        <option value="3D">3D</option>
        <option value="unemployment">unemployment</option>
        <option value="tax">tax</option>
        <option value="ice">ice</option>
        <option value="greenhouse gas">greenhouse gas</option>
        <option value="election">election</option>
        <option value="policy">policy</option>
        <option value="finance">finance</option>
        <option value="consumer">consumer</option>
        <option value="tension">tension</option>
        <option value="bank">bank</option>
        <option value="resource">resource</option>
        <option value="software">software</option>
        <option value="security">security</option>
        <option value="technology">technology</option>
        <option value="clothing">clothing</option>
        <option value="building">building</option>
        <option value="strategy">strategy</option>
        <option value="automaker">automaker</option>
        <option value="risk">risk</option>
        <option value="software">software</option>
        <option value="strategy">strategy</option>
        <option value="investment">investment</option>
        <option value="3D">3D</option>
        <option value="car">car</option>
        <option value="plastic">plastic</option>
        <option value="inflation">inflation</option>
        <option value="battery">battery</option>

        {/* Add more options based on available years */}
      </select>
      <label htmlFor="year">Select sector:</label>
      <select id="year" multiple onChange={handleSectorChange}>
        {/* Populate years based on available data */}

        <option value="Energy">Energy</option>
        <option value="Manufacturing">Manufacturing</option>
        <option value="Retail">Retail</option>
        <option value="Aerospace & Defence">Aerospace & Defence</option>
        <option value="Financial Services">Financial Services</option>
        <option value="Information Technology">Information Technology</option>
        <option value="Support Services">Support Services</option>
        <option value="Government">Government</option>
        <option value="Environment">Environment</option>
        <option value="Automotive">Automotive</option>
        <option value="Food & Agriculture">Food & Agriculture</option>
        <option value="Transport">Transport</option>
        <option value="Healthcare">Healthcare</option>
        <option value="Security">Security</option>
        <option value="Tourism & Hospitality">Tourism & Hospitality</option>

        {/* Add more options based on available years */}
      </select>
      <label htmlFor="year">Select region:</label>
      <select id="year" multiple onChange={handleRegionChange}>
        {/* Populate years based on available data */}

        <option value="world">world</option>
        <option value="World">World</option>
        <option value="Western Europe">Western Europe</option>
        <option value="Western Asia">Western Asia</option>
        <option value="Western Africa">Western Africa</option>
        <option value="Southern Europe">Southern Europe</option>
        <option value="Southern Asia">Southern Asia</option>
        <option value="Southern Africa">Southern Africa</option>
        <option value="South-Eastern Asia">South-Eastern Asia</option>
        <option value="South America">South America</option>
        <option value="Oceania">Oceania</option>
        <option value="Northern Europe">Northern Europe</option>
        <option value="Northern America">Northern America</option>
        <option value="Northern Africa">Northern Africa</option>
        <option value="Europe">Europe</option>
        <option value="Eastern Europe">Eastern Europe</option>

        {/* Add more options based on available years */}
      </select>
      <button onClick={handleApplyFilters}>Apply Filters</button>
      {/* Add other filter components here */}
    </div>
  );
}

export default Filters;
