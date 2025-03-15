import './App.css';
import Nodues from './pages/student/Nodues';
import Dues from './pages/student/Dues';
import "@fontsource/montserrat";
import "@fontsource/lato";

import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Superadmin from "./pages/superadmin/Superadmi";

import DepartmentPage from "./pages/superadmin/DepartmentPage";
import StudentPage from "./pages/superadmin/stdentpage";
const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Superadmin />} />
       
        <Route path="/:departmentName" element={<DepartmentPage />} />
        <Route path="/:departmentName/:department" element={<StudentPage />} />
      </Routes>
    </Router>
  );
};

export default App;