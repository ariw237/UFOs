// The purpose of this code is to build in HTML table and fill it with ..
// the data contained data.js located in same directory

// import the data from data.js
const tableData = data;

// Reference the HTML table using d3
var tbody = d3.select("tbody");    // <tbody></tbody> in our html file

//Create a fucntion to build a data table

function buildTable(data){
  //clear existing data
  tbody.html("");
  //initiate loop through data objects and append a row and cells for each row value
  data.forEach((dataRow) => {
    //Create variable that will append row to table body
    let row = tbody.append("tr");
    //Now we must loop through each field of (dataRow) and append as a table cell
    Object.values(dataRow).forEach((val) =>{
      let cell = row.append("td");
      cell.text(val);
    });
  });
}

//Create a function to filter table by date based on user clicks

function handleClick(){
  //Select html tag with datetime id and store that value in date variable
  let date = d3.select("#datetime").property("value");
  //set default filter value which is original table data
  let filteredData = tableData;
  //set up a conditional filter for date if date is present
  if(date){
    filteredData = filteredDate.filter(row => row.datetime === date);
    //Build the filtered table
    buildTable(filteredData);
  };
}
//Attach the function to the html button and make it responsive to a click
d3.selectAll("#filter-btn").on("click", handleClick);

//Build default table by making call to buildTable funtion
buildTable(tableData);
