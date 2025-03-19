import React, { useState } from "react";
import background from "../../assets/background.png";
import logo from "../../assets/iitg-logo.png";
import InputField from "../../components/loginInp";
import SelectField from "../../components/select";

const LoginStudent = () => {
  const [formData, setFormData] = useState({
    name: "",
    rollNumber: "",
    program: "B.Tech",
    branch: "",
    hostel: "Brahmaputra",
    roomNumber: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "rollNumber" && !/^\d*$/.test(value)) return;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const validateForm = () => {
    let newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Required";
    if (!formData.rollNumber.trim()) newErrors.rollNumber = "Required";
    if (!formData.branch.trim()) newErrors.branch = "Required";
    if (!formData.roomNumber.trim()) newErrors.roomNumber = "Required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = () => {
    if (validateForm()) {
      console.log("Submitted Data:", formData);
    }
  };

  return (
    <div
      className="h-screen w-full bg-cover bg-center flex items-center justify-center p-4"
      style={{ backgroundImage: `url(${background})` }}
    >
      <div
        className="max-w-md w-80 p-5 flex flex-col gap-3 shadow-lg bg-white rounded-lg absolute"
        style={{
          fontFamily: "Inter, sans-serif",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
        }}
      >
        {/* Logo */}
        <div className="flex items-center gap-2 mb-0.5">
          <img src={logo} alt="IIT Guwahati Logo" className="w-7 h-7 object-contain" />
        </div>
        <h2 className="text-sm font-bold">Enter Personal Details</h2>

        {/* Form Inputs */}
        <InputField
          label="Name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Enter your Full name"
          error={errors.name}
        />

        <InputField
          label="Roll Number"
          name="rollNumber"
          value={formData.rollNumber}
          onChange={handleChange}
          placeholder="Enter your Roll Number"
          error={errors.rollNumber}
        />

        {/* Grid for Program-Branch & Hostel-Room */}
        <div className="grid grid-cols-2 gap-3 ">
          <SelectField
            label="Program"
            name="program"
            value={formData.program}
            onChange={handleChange}
            options={["B.Tech", "M.Tech", "PhD", "B.Des"]}
          />

          <InputField
            label="Branch"
            name="branch"
            value={formData.branch}
            onChange={handleChange}
            placeholder="Eg: CSE"
            error={errors.branch}
          />

          <SelectField
            label="Hostel"
            name="hostel"
            value={formData.hostel}
            onChange={handleChange}
            options={[
              "Brahmaputra",
              "Lohit",
              "Disang",
              "Dhansiri",
              "Subhansiri",
              "Siang",
              "Umiam",
              "Kapili",
              "Kameng",
              "Barak",
              "Manas",
              "Dihing",
            ]}
          />

          <InputField
            label="Room No."
            name="roomNumber"
            value={formData.roomNumber}
            onChange={handleChange}
            placeholder="Eg: A-303"
            error={errors.roomNumber}
          />
        </div>

        {/* Submit Button */}
        <div className="flex justify-end mt-1">
          <button
            onClick={handleSubmit}
            className="bg-blue-600 text-white p-2 rounded hover:bg-blue-700 text-xs"
          >
            Save Changes
          </button>
        </div>
      </div>
    </div>
  );
};

export default LoginStudent;
