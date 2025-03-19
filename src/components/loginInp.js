import React from "react";

const InputField = ({ label, name, value, onChange, placeholder, error }) => {
  return (
    <div className="flex flex-col w-full">
      <div className="flex items-center gap-1">
        <label className="text-xs font-semibold text-left">{label}</label>
        {error && <span className="text-red-500 font-bold text-sm">*</span>}
      </div>
      <input
        type="text"
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="p-2 border rounded w-full text-xs"
      />
    </div>
  );
};

export default InputField;
