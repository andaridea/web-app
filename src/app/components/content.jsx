"use client"
import { useState } from "react";
import SortButton from "./dropdown";
import Search from "./search";
import Table from "./table";
import ButtonAddUser from "./buttonAddUser";

export default function Content() {
  const [searchQuery, setSearchQuery] = useState("");
  const handleSearch = (query) => {
    setSearchQuery(query);
  }
  return (
    <>
      <div className="p-4 sm:ml-64">
        <div className="p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700">
          <h2>User List</h2>
          <Search onSearch={handleSearch}/>
          <div className="flex justify-between">
          <SortButton />
          <ButtonAddUser />
          </div>
          <Table searchQuery={searchQuery}/>
        </div>
      </div>
    </>
  );
}
