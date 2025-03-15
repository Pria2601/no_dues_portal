import React from "react";
import Button from "./Button";
import Input from "./Input";

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
export default SearchBar;