import React from "react";
import DuesCard from "./DueCarrd";
import { Link } from "react-router-dom";
import duesData from "../data/dues.json";


const DuesList = ({ search }) => {
    const filteredDues = duesData.filter((due) =>
      due.name.toLowerCase().includes(search.toLowerCase())
    );
  
    return (
      <div className="flex flex-col gap-4">
        {filteredDues.map((due,index) => (<>
           <Link key={index} to={`/${due.name.replace(/\s+/g, "-")}`}>
          <DuesCard key={due.id} {...due} /></Link></>
        ))}
      </div>
    );
  };
  export default DuesList;