/* eslint-disable react/prop-types */
import { useState } from "react";
import "../styles/tabs.css";

function Tabs({ data, initialIndex = 0 }) {
  const [activeTab, setActiveTab] = useState(initialIndex);

  const handleTabChange = (i) => {
    setActiveTab(i);
  };

  return (
    <div className="tabs">
      <div className="tab-title">
        {data.map((e, i) => (
          <div
            key={i}
            onClick={() => handleTabChange(i)}
            className={`title ${activeTab == i ? "active" : ""}`}
          >
            {e.title}
          </div>
        ))}
      </div>

      <div className="tab-data">{data[activeTab].data}</div>
    </div>
  );
}

export default Tabs;
