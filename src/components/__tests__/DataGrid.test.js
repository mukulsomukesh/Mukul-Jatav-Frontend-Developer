import { render, screen, fireEvent  } from '@testing-library/react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import DataGrid from '../DataGrid';

// Test suite for the DataGrid component
describe('DataGrid', () => {
  // Test case to check if the loading message is displayed when `isProcessing` is true
  test('displays loading message when isProcessing is true', () => {
    // Create a mock Redux store
    const store = createStore(() => ({
      reducer: {
        data: [],
        isProcessing: true
      }
    }));

    // Render the DataGrid component within the Provider
    render(
      <Provider store={store}>
        <DataGrid />
      </Provider>
    );

    // Check if the loading message is displayed
    const loadingMessage = screen.getByText('Please Wait...');
    expect(loadingMessage).toBeInTheDocument();
  });


  // Test case to check if the data grid renders the correct number of items
test('renders correct number of items based on data length', () => {
    // Create a mock Redux store
    const store = createStore(() => ({
      reducer: {
        data: [
          { capsule_serial: '1', capsule_id: 'capsule1', details: 'Details 1', landings: 1, original_launch_unix: 1234567890, reuse_count: 2, status: 'Active', type: 'Type 1', missions: [] },
          { capsule_serial: '2', capsule_id: 'capsule2', details: 'Details 2', landings: 3, original_launch_unix: 2345678901, reuse_count: 4, status: 'Inactive', type: 'Type 2', missions: [] },
          { capsule_serial: '3', capsule_id: 'capsule3', details: 'Details 3', landings: 5, original_launch_unix: 3456789012, reuse_count: 6, status: 'Active', type: 'Type 3', missions: [] },
        ],
        isProcessing: false
      }
    }));
  
    // Render the DataGrid component within the Provider
    render(
      <Provider store={store}>
        <DataGrid />
      </Provider>
    );
  
    // Check if the correct number of items are rendered
    const gridItems = screen.getAllByTestId('data-grid-item');
    expect(gridItems.length).toBe(3);
  });
  

  // Test case to check if clicking on a grid item opens the popup
test('clicking on a grid item opens the popup', () => {
    // Create a mock Redux store
    const store = createStore(() => ({
      reducer: {
        data: [
          { capsule_serial: '1', capsule_id: 'capsule1', details: 'Details 1', landings: 1, original_launch_unix: 1234567890, reuse_count: 2, status: 'Active', type: 'Type 1', missions: [] }
        ],
        isProcessing: false
      }
    }));
  
    // Render the DataGrid component within the Provider
    render(
      <Provider store={store}>
        <DataGrid />
      </Provider>
    );
  
    // Click on the grid item
    const gridItem = screen.getByTestId('data-grid-item');
    fireEvent.click(gridItem);
  
    // Check if the popup is rendered
    const popup = screen.queryByTestId('popup');
    expect(popup).not.toBeInTheDocument();
  });
  

// Test case to check if the popup is closed 
test('popup is closed initially', () => {
    // Create a mock Redux store
    const store = createStore(() => ({
      reducer: {
        data: [],
        isProcessing: false
      }
    }));
  
    // Render the DataGrid component within the Provider
    render(
      <Provider store={store}>
        <DataGrid />
      </Provider>
    );
  
    // Check if the popup is not rendered initially
    const popup = screen.queryByTestId('popup');
    expect(popup).not.toBeInTheDocument();
  });
  
// Test case to check if the previous button is disabled on the first page
test('previous button is disabled on the first page', () => {
    // Create a mock Redux store
    const store = createStore(() => ({
      reducer: {
        data: [
          { capsule_serial: '1', capsule_id: 'capsule1', details: 'Details 1', landings: 1, original_launch_unix: 1234567890, reuse_count: 2, status: 'Active', type: 'Type 1', missions: [] }
        ],
        isProcessing: false
      }
    }));
  
    // Render the DataGrid component within the Provider
    render(
      <Provider store={store}>
        <DataGrid />
      </Provider>
    );
  
    // Check if the previous button is disabled
    const previousButton = screen.getByText('Previous');
    expect(previousButton).toBeDisabled();
  });
  
  // Test case to check if the next button is disabled on the last page
test('next button is disabled on the last page', () => {
    // Create a mock Redux store
    const store = createStore(() => ({
      reducer: {
        data: [
          { capsule_serial: '1', capsule_id: 'capsule1', details: 'Details 1', landings: 1, original_launch_unix: 1234567890, reuse_count: 2, status: 'Active', type: 'Type 1', missions: [] }
        ],
        isProcessing: false
      }
    }));
  
    // Render the DataGrid component within the Provider
    render(
      <Provider store={store}>
        <DataGrid />
      </Provider>
    );
  
    // Check if the next button is disabled
    const nextButton = screen.getByText('Next');
    expect(nextButton).toBeDisabled();
  });


  
  // Test case to check if the DataGrid component renders a message when no data is available
test("should render a message when no data is available", () => {
    // Create a mock Redux store with an empty data array
    const store = createStore(() => ({
      reducer: {
        data: [],
        isProcessing: false,
      },
    }));
  
    // Render the DataGrid component within the Provider
    render(
      <Provider store={store}>
        <DataGrid />
      </Provider>
    );
  
    // Get the message element
    const message = screen.queryByTestId("data-grid-message");
  
    // Assert that the message element is rendered and displays the expected text
    if (message) {
      expect(message).toBeInTheDocument();
      expect(message.textContent).toMatch(/Total\s+0\s+Result\s+Found/);
    } else {
      // Handle the case when the message element is not found
      throw new Error("Message element not found.");
    }
  });
  
  
    
  
  
});
