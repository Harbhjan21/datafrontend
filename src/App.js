import axios from "axios";
import "./App.css";
import Filters from "./Filter";
import Visualization from "./Visualization";
import { useEffect, useState } from "react";

function App() {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    // Fetch data from API when component mounts
    const check = async () => {
      const res = await axios.get(
        "https://datavisual-server.vercel.app/getdata"
      );
      setData(res.data);
      setFilteredData(res.data);
      console.log(res.data);
    };
    check();
  }, []);

  const handleFiltersChange = (filters) => {
    // Apply filters and update filteredData
    console.log("filter", filters);

    const filtered = data.filter((item) => {
      // Apply filter logic here based on filters object
      let match = true;
      if (filters.year && filters.year.length > 0) {
        match = match && item.published.includes(filters.year);
      }
      if (filters.topic && filters.topic.length > 0) {
        const topic = item.topic.length > 0 && item.topic.toUpperCase();
        console.log(topic);
        match = match && topic.length > 0 && filters.topic.includes(topic);
      }
      if (filters.sector && filters.sector.length > 0) {
        const sector = item.sector.length > 0 && item.sector.toUpperCase();
        console.log(sector);
        match = match && sector.length > 0 && filters.sector.includes(sector);
      }
      if (filters.region && filters.region.length > 0) {
        const region = item.region.length > 0 && item.region.toUpperCase();
        console.log(region);
        match = match && region.length > 0 && filters.region.includes(region);
      }
      // Apply more filters as needed
      return match;
    });
    console.log("fillter data", filtered);
    setFilteredData(filtered);
  };
  return (
    <div className="App">
      <div
        style={{
          height: "50px",
          backgroundColor: "blanchedalmond",
        }}
      >
        <h3>Datavisulaization</h3>
      </div>
      {/* <DataVisualization /> */}
      <Filters onFiltersChange={handleFiltersChange} />
      {filteredData && <Visualization data={filteredData} />}
    </div>
  );
}

export default App;
