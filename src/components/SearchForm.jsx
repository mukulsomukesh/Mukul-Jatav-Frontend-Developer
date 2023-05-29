import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { applyFilters } from "../redux/action";

export default function SearchForm() {
  const dispatch = useDispatch();

    // State variables
  const [type, setType] = useState("");
  const [status, setStatus] = useState("");
  const [originalLaunch, setOriginalLaunch] = useState("");

  useEffect(() => {
    // Dispatch applyFilters action on initial render
    dispatch(applyFilters(status, type, originalLaunch));
  }, []);

  // handle filters
  function handleFilters() {
    // Dispatch applyFilters action on filter change
    dispatch(applyFilters(status, type, originalLaunch));
  }

  return (
    <div className="flex flex-wrap justify-center items-center bg-black p-4">
      {/* select status */}
      <div className="flex items-center m-4">
        <label className="mr-4 font-bold text-white">Status:</label>
        {/* Status dropdown */}
        <select
          className="form-select text-white bg-black border-2 border-white py-2 px-4"
          onChange={(e) => {
            setStatus(e.target.value);
          }}
        >
          <option value="">Status</option>
          <option value="retired">Retired</option>
          <option value="active">Active</option>
          <option value="destroyed">Destroyed</option>
          <option value="unknown">Unknown</option>
        </select>
      </div>

      {/* original launch input */}
      <div className="flex items-center m-4">
        <label className="mr-4 font-bold text-white">Original Launch:</label>
        {/* Original launch input field */}
        <input
          type="datetime-local"
          className="form-input text-white bg-black border-2 border-white py-2 px-4 "
          placeholder="Original Launch"
          onChange={(e) => {
            setOriginalLaunch(e.target.value);
          }}
        />
      </div>

      {/* type input */}
      <div className="flex items-center m-4">
        <label className="mr-4 font-bold text-white">Type:</label>
        {/* Type input field */}
        <input
          type="text"
          className="form-input text-white bg-black border-white border-2 py-2 px-4 "
          placeholder="Type"
          onChange={(e) => {
            setType(e.target.value.trim());
          }}
        />
      </div>

      {/* submit button */}
      <button
        className="btn btn-primary btn-block border-2 border-blue-400 text-blue-400 hover:bg-gray-900 hover:text-white font-bold py-2 px-4 ml-4 "
        onClick={handleFilters}
      >
        Apply Filters
      </button>
    </div>
  );
}
