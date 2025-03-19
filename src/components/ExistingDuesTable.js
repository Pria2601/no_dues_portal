import React from "react";

const ExistingDuesTable = ({ dues }) => {
  return (
    <div className="mt-4">
      <h3 className="font-semibold text-[#919191] text-sm">Existing Dues</h3>
      <table className="w-full mt-2 border-collapse text-black text-sm">
        <tbody>
          {dues.map((due) => (
            <tr key={due.id} className="border-b border-gray-300">
              <td className="p-2 font-medium">{due.id}</td>
              <td className="p-2 font-medium">{due.category}</td>
              <td className="p-2 font-medium">{due.date}</td>
              <td className="p-2 font-medium text-green-500">₹ {due.amount}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ExistingDuesTable;
