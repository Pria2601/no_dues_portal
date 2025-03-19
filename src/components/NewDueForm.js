import React from "react";

const NewDueForm = ({ newDue, setNewDue, handleAddDue }) => {
  return (
    <div className="mt-4 p-4 shadow-md border border-gray-300 rounded-lg space-y-2">
      <div className="grid grid-cols-3 text-xs font-medium gap-4 items-center border-b pb-2">
        <p>Due Category</p>
        <p>Due Amount</p>
      </div>
      <div className="grid grid-cols-3 gap-4 items-center">
        <select
          className="p-2 border rounded-lg text-sm bg-[#F3F3F3] w-full"
          value={newDue.category}
          onChange={(e) => setNewDue({ ...newDue, category: e.target.value })}
        >
          <option value="">Select Category</option>
          <option value="Lab Equipment">Lab Equipment</option>
          <option value="Library Fine">Library Fine</option>
          <option value="Hostel Dues">Hostel Dues</option>
        </select>

        <input
          type="number"
          placeholder="Eg: 300"
          className="p-2 border rounded-lg text-sm bg-[#F3F3F3] w-full"
          value={newDue.amount}
          onChange={(e) => setNewDue({ ...newDue, amount: e.target.value })}
        />
        <div className="flex gap-2 justify-center">
          <button
            className="p-2 border border-gray-400 text-gray-700 rounded-lg flex items-center justify-center hover:bg-gray-200"
            onClick={handleAddDue}
          >
            ✔
          </button>
          <button className="p-2 border border-red-500 text-red-500 rounded-lg flex items-center justify-center hover:bg-red-100">
            ✖
          </button>
        </div>
      </div>
    </div>
  );
};

export default NewDueForm;
