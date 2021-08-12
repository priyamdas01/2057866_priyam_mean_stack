var total = [];
var tempArr = [];
var amount = total.length;
// let tempArr:string[] = [];
function showCart() {
    document.getElementById("cart").innerText = amount.toString();
}
function storeData1() {
    var localStg = localStorage.getItem('entryObj') || '{}';
    if (localStg === null) {
        total = [];
    }
    else {
        tempArr = JSON.parse(localStg);
    }
    var item_name = document.getElementById("name1").innerHTML;
    var item_price = document.getElementById("price1").innerHTML;
    var entry = { name: item_name, price: item_price };
    total.push(entry);
    total.push.apply(total, tempArr);
    localStorage.setItem("entryObj", JSON.stringify(total));
    amount++;
    console.log("Data store in session and local storage");
}
function storeData2() {
    var localStg = localStorage.getItem('entryObj') || '{}';
    if (localStg === null) {
        total = [];
    }
    else {
        tempArr = JSON.parse(localStg);
    }
    var item_name = document.getElementById("name2").innerHTML;
    var item_price = document.getElementById("price2").innerHTML;
    var entry = { name: item_name, price: item_price };
    total.push(entry);
    total.push.apply(total, tempArr);
    localStorage.setItem("entryObj", JSON.stringify(total));
    amount++;
    console.log("Data store in session and local storage");
}
function storeData3() {
    var localStg = localStorage.getItem('entryObj') || '{}';
    if (localStg === null) {
        total = [];
    }
    else {
        tempArr = JSON.parse(localStg);
    }
    var item_name = document.getElementById("name3").innerHTML;
    var item_price = document.getElementById("price3").innerHTML;
    var entry = { name: item_name, price: item_price };
    total.push(entry);
    total.push.apply(total, tempArr);
    localStorage.setItem("entryObj", JSON.stringify(total));
    amount++;
    console.log("Data store in session and local storage");
}
function storeData4() {
    var localStg = localStorage.getItem('entryObj') || '{}';
    if (localStg === null) {
        total = [];
    }
    else {
        tempArr = JSON.parse(localStg);
    }
    var item_name = document.getElementById("name4").innerHTML;
    var item_price = document.getElementById("price4").innerHTML;
    var entry = { name: item_name, price: item_price };
    total.push(entry);
    total.push.apply(total, tempArr);
    localStorage.setItem("entryObj", JSON.stringify(total));
    amount++;
    console.log("Data store in session and local storage");
}
function storeData5() {
    var localStg = localStorage.getItem('entryObj') || '{}';
    if (localStg === null) {
        total = [];
    }
    else {
        tempArr = JSON.parse(localStg);
    }
    var item_name = document.getElementById("name5").innerHTML;
    var item_price = document.getElementById("price5").innerHTML;
    var entry = { name: item_name, price: item_price };
    total.push(entry);
    total.push.apply(total, tempArr);
    localStorage.setItem("entryObj", JSON.stringify(total));
    amount++;
    console.log("Data store in session and local storage");
}
function storeData6() {
    var localStg = localStorage.getItem('entryObj') || '{}';
    if (localStg === null) {
        total = [];
    }
    else {
        tempArr = JSON.parse(localStg);
    }
    var item_name = document.getElementById("name6").innerHTML;
    var item_price = document.getElementById("price6").innerHTML;
    var entry = { name: item_name, price: item_price };
    total.push(entry);
    total.push.apply(total, tempArr);
    localStorage.setItem("entryObj", JSON.stringify(total));
    amount++;
    console.log("Data store in session and local storage");
}
function displayData() {
    var entryObj = localStorage.getItem('entryObj') || '{}';
    var entryJson = JSON.parse(entryObj);
    var tableContent = "";
    var startTable = "<table border=1><tr><th>Item name</th><th>    </th><th>price</th></tr>";
    var sum = 0;
    for (var i = 0; i < entryJson.length; i++) {
        tableContent += "<tr><td>" + entryJson[i].name + "</td><td>" + "</td><td>" + "$" + entryJson[i].price + "</td></tr>";
        sum += Number(entryJson[i].price);
    }
    tableContent += "<tr><td>" + "Total Cost" + "</td><td>" + "</td><td>" + "$" + sum + "</td></tr>";
    var endTable = "</table>";
    tableContent = startTable + tableContent + endTable;
    document.getElementById("main").innerHTML = tableContent;
}
