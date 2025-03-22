import React from "react";


const DuesCard = ({ name, total, approved, pending }) => {
  
    return (
      <div className="bg-white shadow-md rounded-2xl p-4 border-l-4 border-blue-500">
        <h2 className="text-lg font-semibold">{name}</h2>
        <p className="text-gray-600">{approved} approved</p>
        <p className="text-gray-600">{pending} dues pending</p>
        <p className="text-green-600 font-semibold text-lg">₹ {total}</p>
      </div>
    );
  };
  export default DuesCard;