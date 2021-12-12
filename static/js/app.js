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
