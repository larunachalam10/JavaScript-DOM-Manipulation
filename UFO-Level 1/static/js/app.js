// from data.js
var tableData = data;

var tbody = d3.select("tbody");


    tableData.forEach(function(data){
    var row=tbody.append("tr");
    Object.entries(data).forEach(function([key,value]){
        // console.log(key,value);
        var cell=row.append("td");
        cell.text(value)
        });
    });
// };

var date= new Date();
console.log(date);

// function on click filter button

var button=d3.select(".btn");
var form= d3.select(".form");

button.on("click",runEnter);

form.on("submit",runEnter);

function runEnter(){
    d3.event.preventDefault();
    tbody.html("");

    var inputElement=d3.select(".form-control");

    var inputValue=inputElement.property("value");
    console.log(inputValue);

    var filteredData= tableData.filter(tableData => tableData.datetime=== inputValue);

    console.log(filteredData);

    filteredData.forEach(function(data){
        var row=tbody.append("tr");
        Object.entries(data).forEach(function([key,value]){
        // console.log(key,value);
            var cell=row.append("td");
            cell.text(value)
        });
    });
};

