import React from "react";

export default function Popup({ isOpen, onClose, selectedItem }) {
  // If the popup is not open, return null
  if (!isOpen) {
    return null;
  }

  return (
    <div className="fixed top-0 left-0 right-0 bottom-0 flex items-center justify-center z-50 text-black bg-opacity-50">
      <article className="bg-white rounded-lg p-8">
        {/* Display the capitalized capsule ID */}
        <h3 className="text-xl mb-4 text-blue-400 font-bold">
          {selectedItem.capsule_id[0].toUpperCase() +
            selectedItem.capsule_id.slice(1)}
        </h3>

        {/* Display capsule serial */}
        <p className="text-gray-700">
          <strong className="mr-2">Capsule Serial: </strong>
          <span className="text-gray-400 font-bold">
            {selectedItem.capsule_serial}
          </span>
        </p>

        {/* Display details */}
        <p className="mb-2">
          <strong className="text-black">Details: </strong>
          <span className="text-gray-400 font-bold">
            {selectedItem.details == null
              ? "No Detail Available For This!"
              : selectedItem.details}
          </span>
        </p>

        {/* Display landings */}
        <p className="mb-2">
          <strong className="text-black">Landings: </strong>
          <span className="text-gray-400 font-bold">
            {selectedItem.landings}
          </span>
        </p>

        {/* Display original launch date */}
        <p className="mb-2">
          <strong className="text-black">Original Launch: </strong>
          <span className="text-gray-400 font-bold">
            {new Date(
              selectedItem.original_launch_unix * 1000
            ).toLocaleDateString()}
          </span>
        </p>

        {/* Display reuse count */}
        <p className="mb-2">
          <strong className="text-black">Reuse Count: </strong>
          <span className="text-gray-400 font-bold">
            {selectedItem.reuse_count}
          </span>
        </p>

        {/* Display status */}
        <p className="mb-2">
          <strong className="text-black">Status: </strong>
          <span className="text-gray-400 font-bold">{selectedItem.status}</span>
        </p>

        {/* Display type */}
        <p className="mb-2">
          <strong className="text-black">Type: </strong>
          <span className="text-gray-400 font-bold">{selectedItem.type}</span>
        </p>

        {/* Close button */}
        <div className="flex justify-end mt-8">
          <button
            className="border-2 border-blue-400 text-blue-400 font-bold px-4 py-2 hover:bg-blue-400 hover:text-white"
            onClick={onClose}
          >
            Close
          </button>
        </div>
      </article>
    </div>
  );
}
