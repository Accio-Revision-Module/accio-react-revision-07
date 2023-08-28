/* eslint-disable react/prop-types */
import { ChevronDown } from "react-feather";
import "../styles/accordion.css";
import { useState } from "react";

function Accordion({ title, data }) {
  const [show, setShow] = useState(false);

  const toggleData = () => {
    setShow(!show);
  };

  return (
    <div className="accordion">
      <div className="accordion-title" onClick={toggleData}>
        <div className="text">{title}</div>
        <ChevronDown
          className={show ? "icon-clicked" : "icon"}
          style={show ? { transform: "rotate(180deg)" } : {}}
        />
      </div>
      <div className={`accordion-data ${show ? "show" : ""}`}>{data}</div>
    </div>
  );
}

export default Accordion;
