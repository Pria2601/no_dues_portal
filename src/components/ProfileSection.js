import React from "react";
import callIcon from "../assets/call.png";
import mailIcon from "../assets/mail.png";


const ProfileSection = ({ user }) => {
  return (
    <div className="flex items-center gap-4 border-b pb-4">
      <img
        src={user.profilePic}
        alt="Profile"
        className="w-16 h-16 rounded-full object-cover bg-gray-200"
      />
      <div>
        <p className="text-xs font-medium text-gray-500">NAME</p>
        <h2 className="text-lg font-semibold mb-1">{user.name}</h2>
        <p className="text-[#2164E8] font-medium flex items-center gap-4 text-sm">
          <img src={callIcon} alt="Call" className="w-4 h-4" />
          {user.phone}
          <img src={mailIcon} alt="Mail" className="w-4 h-4" />
          {user.email}
        </p>
      </div>
    </div>
  );
};

export default ProfileSection;
