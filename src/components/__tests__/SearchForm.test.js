// Importing necessary dependencies and components
import React from "react";
import { render, fireEvent } from "@testing-library/react";
import { useDispatch } from "react-redux";
import SearchForm from "../SearchForm";
import { applyFilters } from "../../redux/action";

// Mocking dependencies and actions
jest.mock("react-redux", () => ({
  useDispatch: jest.fn(),
}));

jest.mock("../../redux/action", () => ({
  applyFilters: jest.fn(),
}));

// Test suite for the SearchForm component
describe("SearchForm", () => {
  let dispatchMock;

  beforeEach(() => {
    dispatchMock = jest.fn();
    useDispatch.mockReturnValue(dispatchMock);
  });

  afterEach(() => {
    useDispatch.mockClear();
    applyFilters.mockClear();
  });

  // Test case to check if applyFilters action is dispatched on filter change
  test("dispatches applyFilters action on filter change", () => {
    // Render the SearchForm component
    const { getByLabelText, getByText } = render(<SearchForm />);
    const statusSelect = getByLabelText("Status:");
    const applyFiltersButton = getByText("Apply Filters");

    // Simulate a change event on the status select input
    fireEvent.change(statusSelect, { target: { value: "active" } });
    fireEvent.click(applyFiltersButton);

    // Assertions to check if useDispatch and dispatchMock have been called with the correct arguments
    expect(useDispatch).toHaveBeenCalled();
    expect(dispatchMock).toHaveBeenCalledWith(applyFilters("active", "", ""));
  });


  // Test case to check if applyFilters action is dispatched on initial render
test("dispatches applyFilters action on initial render", () => {
  // Render the SearchForm component
  render(<SearchForm />);

  // Assertion to check if useDispatch and dispatchMock have been called with the correct arguments
  expect(useDispatch).toHaveBeenCalled();
  expect(dispatchMock).toHaveBeenCalledWith(applyFilters("", "", ""));
});

// Test case to check if applyFilters action is dispatched on original launch input change
test("dispatches applyFilters action on original launch input change", () => {
  // Render the SearchForm component
  const { getByLabelText, getByText } = render(<SearchForm />);
  const originalLaunchInput = getByLabelText("Original Launch:");
  const applyFiltersButton = getByText("Apply Filters");

  // Simulate a change event on the original launch input
  fireEvent.change(originalLaunchInput, { target: { value: "2023-05-31T12:00" } });
  fireEvent.click(applyFiltersButton);

  // Assertions to check if useDispatch and dispatchMock have been called with the correct arguments
  expect(useDispatch).toHaveBeenCalled();
  expect(dispatchMock).toHaveBeenCalledWith(applyFilters("", "", "2023-05-31T12:00"));
});


// Test case to check if applyFilters action is dispatched when the Apply Filters button is clicked
test("dispatches applyFilters action when Apply Filters button is clicked", () => {
  // Render the SearchForm component
  const { getByLabelText, getByText } = render(<SearchForm />);
  const applyFiltersButton = getByText("Apply Filters");

  // Simulate a click event on the Apply Filters button
  fireEvent.click(applyFiltersButton);

  // Assertions to check if useDispatch and dispatchMock have been called with the correct arguments
  expect(useDispatch).toHaveBeenCalled();
  expect(dispatchMock).toHaveBeenCalledWith(applyFilters("", "", ""));
});


});
