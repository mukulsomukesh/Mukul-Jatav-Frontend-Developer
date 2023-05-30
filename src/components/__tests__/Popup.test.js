import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Popup from "../Popup";
import { format } from 'date-fns';

// Test suite for the Popup component
describe("Popup component", () => {
  // Test case to check if onClose is called when the Close button is clicked
  it("should call onClose when Close button is clicked", () => {
    // Create a mock function for onClose
    const onCloseMock = jest.fn();
    // Render the Popup component with isOpen set to true and onClose set to the mock function
    const { getByText } = render(
      <Popup isOpen={true} onClose={onCloseMock} selectedItem={{}} />
    );

    // Find the Close button and simulate a click event
    const closeButton = getByText("Close");
    fireEvent.click(closeButton);

    // Assert that onCloseMock has been called
    expect(onCloseMock).toHaveBeenCalled();
  });

  // Test case to check if the popup is not rendered when isOpen prop is false
  it("should not render popup when isOpen prop is false", () => {
    // Render the Popup component with isOpen set to false and an empty onClose function
    const { queryByText } = render(
      <Popup isOpen={false} onClose={() => {}} selectedItem={{}} />
    );

    // Assert that the expected elements are not found in the rendered component
    expect(queryByText("ABC123")).toBeNull();
    expect(queryByText("Capsule Serial: XYZ789")).toBeNull();
    expect(queryByText("Details: Some details")).toBeNull();
    expect(queryByText("Landings: 5")).toBeNull();
    expect(queryByText("Original Launch: 5/31/2021")).toBeNull();
    expect(queryByText("Reuse Count: 2")).toBeNull();
    expect(queryByText("Status: Active")).toBeNull();
    expect(queryByText("Type: Dragon")).toBeNull();
    expect(queryByText("Close")).toBeNull();
  });

  // Test case to check if the popup is rendered when isOpen prop is true
  it("should render popup when isOpen prop is true", () => {
    // Define a selected item object with sample data
    const selectedItem = {
      capsule_id: "Abc123",
      capsule_serial: "XYZ789",
      details: "Some details",
      landings: 5,
      original_launch_unix: 1622419200,
      reuse_count: 2,
      status: "Active",
      type: "Dragon",
    };

    // Format the date for display
    const formattedDate = format(
        new Date(selectedItem.original_launch_unix * 1000),
        "M/dd/yyyy"
      );

    // Render the Popup component with isOpen set to true, an empty onClose function, and the selected item
    const { getByText } = render(
      <Popup isOpen={true} onClose={() => {}} selectedItem={selectedItem} />
    );

    // Assert that the expected elements with their corresponding text content are found in the rendered component
    expect(getByText("Abc123")).toBeInTheDocument(); 
    expect(getByText("XYZ789")).toBeInTheDocument();
    expect(getByText("Some details")).toBeInTheDocument();
    expect(getByText("5")).toBeInTheDocument();
    expect(getByText("2")).toBeInTheDocument();
    expect(getByText("Active")).toBeInTheDocument();
    expect(getByText("Dragon")).toBeInTheDocument();
    expect(getByText("Close")).toBeInTheDocument();
  });
});
