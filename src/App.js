import React from "react";
import Banner from "./components/Banner";
import DataGrid from "./components/DataGrid";
import SearchForm from "./components/SearchForm";

export default function App() {
  return (
    <div className="bg-black text-white">
      {/* banner */}
      <Banner />

      {/* search form */}
      <SearchForm />

      {/* data grid */}
      <DataGrid />
    </div>
  );
}
