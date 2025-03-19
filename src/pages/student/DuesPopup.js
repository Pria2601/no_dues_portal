import React, { useState } from "react";
import ProfileSection from "../../components/ProfileSection";
import NewDueForm from "../../components/NewDueForm";
import ExistingDuesTable from "../../components/ExistingDuesTable";

const DuesPopup = () => {
  const [user, setUser] = useState({
    name: "Satvik Satvik",
    phone: "91-69012 58977",
    email: "honicheeli@iitg.ac.in",
    profilePic: "", // Replace with actual image
  });

  const [newDue, setNewDue] = useState({ category: "", amount: "" });

  const [dues, setDues] = useState([
    { id: 1, category: "Lab Equipment", date: "23rd Oct 2024", amount: 125 },
    { id: 2, category: "Library Fine", date: "25th Oct 2024", amount: 250 },
  ]);

  const handleAddDue = () => {
    if (!newDue.category || !newDue.amount) return;
    setDues([
      ...dues,
      {
        id: dues.length + 1,
        ...newDue,
        date: new Date().toLocaleDateString("en-GB"),
      },
    ]);
    setNewDue({ category: "", amount: "" });
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 p-4">
      <div className="bg-white shadow-lg rounded-2xl p-6 w-full max-w-lg border border-gray-200">
        
        <ProfileSection user={user} />

        <h3 className="font-semibold text-[#919191] text-sm mt-4">New Dues</h3>
        
        <NewDueForm newDue={newDue} setNewDue={setNewDue} handleAddDue={handleAddDue} />

        <div className="mt-4 flex justify-center">
          <button
            className="bg-[#2164E8] text-white font-semibold py-2 px-6 rounded-lg text-sm hover:bg-blue-600"
            onClick={handleAddDue}
          >
            + Add New Due
          </button>
        </div>

        <ExistingDuesTable dues={dues} />
      </div>
    </div>
  );
};

export default DuesPopup;
