import React from "react";

const SelectField = ({ label, name, value, onChange, options }) => {
  return (
    <div className="flex flex-col">
      <label className="text-xs font-semibold text-left">{label}</label>
      <select
        name={name}
        value={value}
        onChange={onChange}
        className="p-2 border rounded w-full text-xs"
      >
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SelectField;
