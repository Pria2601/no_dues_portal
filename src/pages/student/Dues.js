import React from 'react';

import { useState, useEffect } from 'react';
import PriorityPopup from "../../components/PriorityPopup";
import Navbar  from '../../components/Navbar';
import Card from '../../components/Card';
import Download from '../../components/Download';
import Line from '../../components/Line';
import "@fontsource/montserrat";
import "@fontsource/lato";

function Dues() {
  const [data, setData] = useState([]);
  const [cardData, setCardData] = useState([]);
  const [activeCard, setActiveCard] = useState(null);
  const [popup, setPopup] = useState(0);

  // Fetch JSON data
  useEffect(() => {
    fetch("/duesData.json") // If using `public/duesData.json`
      .then((response) => response.json())
      .then((jsonData) => {
        setData(jsonData.data);
        setCardData(jsonData.cardData);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  const handlePopup = (val, open) => {
    setPopup(open ? val : 0);
  };

  // Calculate dues percentage
  let duesSum = cardData.reduce((sum, card) => sum + card.nodues, 0);
  let p = cardData.map((card) => (duesSum > 0 ? (card.nodues * 100) / duesSum : 0));

  return (
    <div className="Dues">
      <Navbar />
      <Line cost={1060} p1={p[0]} p2={p[1]} p3={p[2]} p4={p[3]} />
      <div className="ml-12 w-[1020px] mt-2">
        {cardData.map((card) => (
          <Card
            key={card.number}
            {...card}
            popupFunc={handlePopup}
            activeCard={activeCard}
            setActiveCard={setActiveCard}
          />
        ))}
        {popup > 0 && <PriorityPopup {...data[popup - 1]} />}
      </div>
    </div>
  );
}

export default Dues;
