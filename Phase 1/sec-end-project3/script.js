var total = [];

function storeData() {

    var client = document.getElementById("client").value;
    var project = document.getElementById("project").value;
    var budget = document.getElementById("budget").value;
    
    var entry = {name:client, pro:project, cost:budget};
    total.push(entry);

    localStorage.setItem("entryObj",JSON.stringify(total));

    console.log("Data store in session and local storage");
    
}


function displayData() {
    let entryObj = localStorage.getItem("entryObj");
    let entryJson = JSON.parse(entryObj);
    var tableContent=""
    var startTable ="<table border=1><tr><th>Client</th><th>Project</th><th>Budget</th></tr>"
    var totalBudget = 0;
    for(var i = 0; i<entryJson.length; i++){
        tableContent +="<tr><td>"+entryJson[i].name+"</td><td>"+entryJson[i].pro+"</td><td>"+"$"+entryJson[i].cost+"</td></tr>"
        totalBudget += Number(entryJson[i].cost);
    }
    tableContent +="<tr><td>"+"Total Budget"+"</td><td>"+"</td><td>"+"$"+totalBudget+"</td></tr>"
    
    var endTable="</table>"
    tableContent = startTable+tableContent+endTable
    document.getElementById("main").innerHTML=tableContent;
}