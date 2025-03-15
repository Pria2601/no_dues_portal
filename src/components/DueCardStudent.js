import React from "react";


const DuesCard2 = ({ name, rollno,due }) => {
  
    return (
      <div className="bg-white flex space-x-10 shadow-md rounded-2xl p-4 mx-auto border-l-4 border-blue-500 max-w-[1000px]">
        <h2 className="text-lg font-semibold">{name}</h2>
        <p className="text-gray-600">{rollno} </p>
        <p className="text-gray-600">₹
        {due} </p><div className="mr-0 justify-end flex space-x-2">
        <button className="bg-blue-500 text-white px-4 py-2 rounded-lg">send reminder</button>
        <button className="bg-blue-500 text-white px-4 py-2 rounded-lg">Clear Due</button></div>
       
      </div>
    );
  };
  export default DuesCard2;