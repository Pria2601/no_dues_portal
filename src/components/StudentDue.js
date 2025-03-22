import React from "react";
import DuesCard from "./DueCarrd";
import { Link } from "react-router-dom";
import duesData from "../data/dues.json";
import DuesCard2 from "./DueCardStudent"; 

const StudentDue = ({ name,search,name2 }) => {
    const due1 = duesData.find((d) => 
        d.name === name);
    const due = due1?.more.find(m => m.name === name2);

    //
      console.log(due);
      
    

    // const filteredDues = due.filter((due) =>
    //   due.name.toLowerCase().includes(search.toLowerCase())
    // );
    if (!due) {
        return <h2 className="text-red-500">Due not found{name2}.</h2>;
      }
    //   console.log(due);

    return (
        <div className="flex flex-col gap-4">
          {due.student.map((det, index) => (
            
              <DuesCard2 {...det} />
            
          ))}
         </div>
      );
      
  };
  export default StudentDue;