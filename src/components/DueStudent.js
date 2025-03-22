import React from "react";
import DuesCard from "./DueCarrd";
import { Link } from "react-router-dom";
import duesData from "../data/dues.json";


const DuesList = ({ name,search }) => {
    const due = duesData.find((d) => d.name === name);

    // const filteredDues = due.filter((due) =>
    //   due.name.toLowerCase().includes(search.toLowerCase())
    // );
    if (!due) {
        return <h2 className="text-red-500">Due not found.</h2>;
      }
      console.log(due);

    return (
      <div className="flex flex-col gap-4">
        {due.more.map((det,index) => (<>
           <Link key={index} to={`/${due.name}/${det.name.replace(/\s+/g, "-")}`}>
          <DuesCard key={due.more.id} {...det} /></Link></>
        ))}
        <h2>{}</h2>
      </div>
    );
  };
  export default DuesList;