import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import Header from "../../components/Header";
import Search from "../../components/Search";
import DuesList2 from "../../components/DueList2";
const DepartmentPage = () => {
  const { departmentName } = useParams();
  const { department} = useParams();
  const [search,setSearch]=useState("");
  const formattedName = departmentName.replace(/-/g, " "); // Convert URL-friendly name back

  return (<><Header />

    <div className="container mx-auto p-4">

      {/* Breadcrumb Navigation */}
      <nav className="text-gray-600 mb-4">
        <Link to="/" className="text-blue-500">No Dues</Link> &gt;
        <Link to={"/"+formattedName}
        className="text-blue-500"> {formattedName}</Link> &gt;
        
      </nav>
      <main className="max-w-3xl mx-auto p-6">
       
        <Search search={search} setSearch={setSearch} /></main>

      <h2 className="text-2xl font-bold pb-4">{formattedName} </h2>
      
      <DuesList2 search={search} name = {formattedName} />
    </div></>
  );
};

export default DepartmentPage;
