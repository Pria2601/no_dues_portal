import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const duesData = [
  { id: 1, name: "Department Dues", total: 2056, approved: 86, pending: 23 },
  { id: 2, name: "Library Dues", total: 5626, approved: 86, pending: 26 },
  { id: 3, name: "Computer Centre", total: 6326, approved: 45, pending: 67 },
  { id: 4, name: "Student Affairs", total: 5626, approved: 86, pending: 26 },
];

const DuesCard = ({ name, total, approved, pending }) => {
  return (
    <div className="bg-white shadow-md rounded-2xl p-4 border-l-4 border-blue-500">
      <h2 className="text-lg font-semibold">{name}</h2>
      <p className="text-gray-600">{approved} approved</p>
      <p className="text-gray-600">{pending} dues pending</p>
      <p className="text-green-600 font-semibold text-lg">₹ {total}</p>
    </div>
  );
};

const SearchBar = ({ search, setSearch }) => {
  return (
    <div className="flex gap-2">
      <Input
        type="text"
        placeholder="Search"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="p-2 border rounded-lg w-full"
      />
      <Button className="bg-blue-500 text-white px-4 py-2 rounded-lg">Filter</Button>
    </div>
  );
};

const DuesList = ({ search }) => {
  const filteredDues = duesData.filter((due) =>
    due.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="flex flex-col gap-4">
      {filteredDues.map((due) => (
        <DuesCard key={due.id} {...due} />
      ))}
    </div>
  );
};

const Header = () => {
  return (
    <header className="flex justify-between items-center p-4 bg-white shadow-md">
      <h1 className="text-xl font-bold">No Dues Portal</h1>
      <div className="flex items-center gap-2">
        <span className="text-gray-700">Kane Mona</span>
      </div>
    </header>
  );
};

const NoDuesPage = () => {
  const [search, setSearch] = useState("");

  return (
    <div className="bg-gray-100 min-h-screen">
      <Header />
      <main className="max-w-3xl mx-auto p-6">
        <h2 className="text-2xl font-bold mb-4">No Dues</h2>
        <SearchBar search={search} setSearch={setSearch} />
        <DuesList search={search} />
      </main>
    </div>
  );
};

export default NoDuesPage;
