import React,{useState} from "react";
import { Link } from "react-router-dom";
import Header from "../../components/Header";
import Search from "../../components/Search";
const departments = [
  { name: "Mechanical Department", approved: 86, total: 2056, pending: 23 },
  { name: "Chemical Science Department", approved: 86, total: 5626, pending: 26 },
  { name: "Computer Science Department", approved: 45, total: 6326, pending: 67 },
  { name: "DSAI Department", approved: 86, total: 5626, pending: 26 },
];

const DepartmentDues = () => {
      const [search, setSearch] = useState("");
    
  return (<>
<Header />
      <main className="max-w-3xl mx-auto p-6">
        <h2 className="text-2xl font-bold mb-4">No Dues</h2>
        <Search search={search} setSearch={setSearch} /></main>
            <div className="container mx-auto p-4">
      <h2 className="text-xl font-bold">Department Dues</h2>
      <div className="mt-4">
        {departments.map((dept, index) => (
          <Link key={index} to={`/department/${dept.name.replace(/\s+/g, "-").toLowerCase()}`}>
            <div className="bg-white p-4 rounded-lg shadow-md mb-4 cursor-pointer hover:shadow-lg transition">
              <h3 className="text-lg font-semibold">{dept.name}</h3>
              <p>{dept.approved} approved</p>
              <p className="text-green-600 font-bold">Total ₹ {dept.total}</p>
              <p>{dept.pending} dues pending</p>
            </div>
          </Link>
        ))}
      </div>
    </div></>
  );
};

export default DepartmentDues;
