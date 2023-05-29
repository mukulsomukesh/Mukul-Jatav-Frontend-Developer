import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import Popup from "./Popup";

export default function DataGrid() {
  // useSelector to select data from the store
  const data = useSelector((store) => store.reducer.data);
  const isProcessing = useSelector((store) => store.reducer.isProcessing);

  // State variables
  const [dataForMapping, setDataForMapping] = useState(data.slice(0, 10));
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedItem, setSelectedItem] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  // Function to open the popup
  const openPopup = (el) => {
    setSelectedItem(el);

    setIsOpen(true);
  };

  // Function to close the popup
  const closePopup = () => {
    setIsOpen(false);
  };

  const totalPages = Math.ceil(data.length / 10);

  // useEffect to update the dataForMapping based on currentPage and data changes

  useEffect(() => {
    const startIndex = (currentPage - 1) * 10;
    const endIndex = startIndex + 10;
    setDataForMapping(data.slice(startIndex, endIndex));
  }, [currentPage, data]);

  return (
    <div>
      {/* Display the result count or loading message */}
      {!isProcessing ? (
        <h3 className="text-center text-white ml-5">
          Total <strong className="text-blue-400 "> {data.length} </strong>{" "}
          Result Found!
        </h3>
      ) : (
        <h3 className="text-center ml-5">Please Wait...</h3>
      )}

      {/* Grid to display data */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 px-5 py-1 sm:p-10">
        {dataForMapping?.map((el) => (
          <div
            onClick={() => {
              openPopup(el);
            }}
            key={el.capsule_serial}
            className="p-5 text-center border-2 border-blue-400 hover:border-blue-200 flex flex-col justify-start items-center  cursor-pointer"
          >
            {/* Display data properties */}
            <h2 className="mb-2 text-xl text-blue-400 font-bold">
              {el.capsule_id[0].toUpperCase() + el.capsule_id.slice(1)}
            </h2>
            <p className="mb-2">
              <strong className="text-white mr-2">Capsule Serial: </strong>
              <span className="text-gray-400 font-bold ">
                {" "}
                {el.capsule_serial}{" "}
              </span>
            </p>
            <p className="mb-2">
              <strong className="text-white">Details: </strong>

              <span className="text-gray-400 font-bold ">
                {el.details == null
                  ? "No Detail Available For This!"
                  : el.details}
              </span>
            </p>
            <p className="mb-2">
              <strong className="text-white">Landings: </strong>
              <span className="text-gray-400 font-bold "> {el.landings} </span>
            </p>
            <p className="mb-2">
              <strong className="text-white">Original Launch: </strong>
              <span className="text-gray-400 font-bold ">
                {" "}
                {new Date(
                  el.original_launch_unix * 1000
                ).toLocaleDateString()}{" "}
              </span>
            </p>
            <p className="mb-2">
              <strong className="text-white">Reuse Count: </strong>
              <span className="text-gray-400 font-bold ">
                {" "}
                {el.reuse_count}{" "}
              </span>
            </p>
            <p className="mb-2">
              <strong className="text-white">Status: </strong>
              <span className="text-gray-400 font-bold "> {el.status} </span>
            </p>
            <p className="mb-2">
              <strong className="text-white">Type: </strong>
              <span className="text-gray-400 font-bold "> {el.type} </span>
            </p>
            <p className="mb-2">
              <strong className="text-white">Missions: </strong>{" "}
              <span className="text-gray-400 font-bold ">
                {el.missions.length === 0 ? "No Mission Yet!" : ""}
                {el.missions.map((mission) => (
                  <p key={mission.flight}>
                    {mission.name} (Flight {mission.flight})
                  </p>
                ))}
              </span>
            </p>
          </div>
        ))}
      </div>

      {/* Pagination buttons */}
      <div className="flex justify-end px-5 py-5 gap-2">
        <button
          disabled={currentPage === 1}
          onClick={() => setCurrentPage(currentPage - 1)}
          className="border-2 border-blue-400 text-blue-400 font-bold px-4 py-2  hover:bg-gray-700 hover:text-white disabled:opacity-50"
        >
          Previous
        </button>

        <button
          disabled={currentPage === totalPages}
          onClick={() => setCurrentPage(currentPage + 1)}
          className="border-2 border-blue-400 text-blue-400 font-bold px-4 py-2  hover:bg-gray-700 hover:text-white disabled:opacity-50"
        >
          Next
        </button>
      </div>

      {/* Popup component */}
      <Popup isOpen={isOpen} onClose={closePopup} selectedItem={selectedItem} />
    </div>
  );
}
