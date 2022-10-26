// from data.js
const tableData = data;

// get table references
var tbody = d3.select("tbody");

function buildTable(data) {
  // First, clear out any existing data
  tbody.html("");
  console.log("In Build");
  console.log(data);
  // Next, loop through each object in the data
  // and append a row and cells for each value in the row
  data.forEach((dataRow) => {
    // Append a row to the table body
    let row = tbody.append("tr");

    // Loop through each field in the dataRow and add
    // each value as a table cell (td)
    Object.values(dataRow).forEach((val) => {
      let cell = row.append("td");
      cell.text(val);
    });
  });
}

// 1. Create a variable to keep track of all the filters as an object.
var filters = {};

// 3. Use this function to update the filters. 
function updateFilters() {
    
    // 4a. Save the element that was changed as a variable.
    let changedElement = d3.select(this);
    
    // 4b. Save the value that was changed as a variable.
    let changedValue = changedElement.property("value");
    
    // 4c. Save the id of the filter that was changed as a variable.
    let filterId = changedElement.property("id");
    
    // 5. If a filter value was entered then add that filterId and value
    // to the filters list. Otherwise, clear that filter from the filters object.
    if (changedValue) {
      filters[filterId] = changedValue;
    }
    else {
      delete filters[filterId];
    }
  
    // 6. Call function to apply all filters and rebuild the table
    filterTable();
  
  };
  
  // 7. Use this function to filter the table when data is entered.
  function filterTable() {
  
    // 8. Set the filtered data to the tableData.
    let filteredData = tableData;
    
    // 9. Loop through all of the filters and keep any data that
    // matches the filter values
    for(let i in filters){
      
      if (filters[i]){
       
        filteredData = filteredData.filter(row => row.datetime === filters[i] || row.city === filters[i] || row.state === filters[i] ||
                            row.country === filters[i] || row.shape === filters[i]);
      };    
    };
    // 10. Finally, rebuild the table using the filtered data
    buildTable(filteredData);
  };
  
  // Reset table 
  function resetTable(){

    // Set the reset table data to the tableData
    let resetData = tableData;

    // Rebuild the table using the filtered data
    buildTable(resetData);

  };

  // 2. Attach an event to listen for changes to each filter
  d3.selectAll("input").on("change", updateFilters);
  d3.selectAll("#resetValue").on("click", resetTable);
  
  // Build the table when the page loads
  buildTable(tableData);
  