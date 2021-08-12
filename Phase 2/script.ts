var total:{name:string; price:string}[] = [];
var tempArr:{name:string; price:string}[] = [];
var amount:number = total.length;
// let tempArr:string[] = [];

function showCart():void{
    document.getElementById("cart").innerText = amount.toString();
}

function storeData1(): void{
    const localStg:string = localStorage.getItem('entryObj') || '{}';
    if(localStg === null){
        total = [];
    }else{
        tempArr = JSON.parse(localStg);
    }
    
    let item_name = (<HTMLInputElement>document.getElementById("name1")).innerHTML;
    let item_price = (<HTMLInputElement>document.getElementById("price1")).innerHTML;
    
    let entry:{name:string; price:string;} = {name:item_name, price:item_price};
    total.push(entry);

    total.push.apply(total, tempArr);
    localStorage.setItem("entryObj",JSON.stringify(total));
amount++;


    console.log("Data store in session and local storage");
}
function storeData2(): void{
    const localStg:string = localStorage.getItem('entryObj') || '{}';
    if(localStg === null){
        total = [];
    }else{
        tempArr = JSON.parse(localStg);
    }
    
    let item_name = (<HTMLInputElement>document.getElementById("name2")).innerHTML;
    let item_price = (<HTMLInputElement>document.getElementById("price2")).innerHTML;
    
    let entry:{name:string; price:string;} = {name:item_name, price:item_price};
    total.push(entry);

    total.push.apply(total, tempArr);
    localStorage.setItem("entryObj",JSON.stringify(total));
    amount++;

    console.log("Data store in session and local storage");
}
function storeData3(): void{
    const localStg:string = localStorage.getItem('entryObj') || '{}';
    if(localStg === null){
        total = [];
    }else{
        tempArr = JSON.parse(localStg);
    }
    
    let item_name = (<HTMLInputElement>document.getElementById("name3")).innerHTML;
    let item_price = (<HTMLInputElement>document.getElementById("price3")).innerHTML;
    
    let entry:{name:string; price:string;} = {name:item_name, price:item_price};
    total.push(entry);

    total.push.apply(total, tempArr);
    localStorage.setItem("entryObj",JSON.stringify(total));

    amount++;
    console.log("Data store in session and local storage");
}
function storeData4(): void{
    const localStg:string = localStorage.getItem('entryObj') || '{}';
    if(localStg === null){
        total = [];
    }else{
        tempArr = JSON.parse(localStg);
    }
    
    let item_name = (<HTMLInputElement>document.getElementById("name4")).innerHTML;
    let item_price = (<HTMLInputElement>document.getElementById("price4")).innerHTML;
    
    let entry:{name:string; price:string;} = {name:item_name, price:item_price};
    total.push(entry);

    total.push.apply(total, tempArr);
    localStorage.setItem("entryObj",JSON.stringify(total));
    amount++;
    console.log("Data store in session and local storage");
}
function storeData5(): void{
    const localStg:string = localStorage.getItem('entryObj') || '{}';
    if(localStg === null){
        total = [];
    }else{
        tempArr = JSON.parse(localStg);
    }
    
    let item_name = (<HTMLInputElement>document.getElementById("name5")).innerHTML;
    let item_price = (<HTMLInputElement>document.getElementById("price5")).innerHTML;
    
    let entry:{name:string; price:string;} = {name:item_name, price:item_price};
    total.push(entry);

    total.push.apply(total, tempArr);
    localStorage.setItem("entryObj",JSON.stringify(total));
    amount++;
    console.log("Data store in session and local storage");
}
function storeData6(): void{
    const localStg:string = localStorage.getItem('entryObj') || '{}';
    if(localStg === null){
        total = [];
    }else{
        tempArr = JSON.parse(localStg);
    }
    
    let item_name = (<HTMLInputElement>document.getElementById("name6")).innerHTML;
    let item_price = (<HTMLInputElement>document.getElementById("price6")).innerHTML;
    
    let entry:{name:string; price:string;} = {name:item_name, price:item_price};
    total.push(entry);

    total.push.apply(total, tempArr);
    localStorage.setItem("entryObj",JSON.stringify(total));
    amount++;
    
    console.log("Data store in session and local storage");
}

function displayData():void {
    let entryObj:string = localStorage.getItem('entryObj') || '{}';
    let entryJson:{name:string; price:string;}[] = JSON.parse(entryObj);
    var tableContent:string="";
    var startTable:string ="<table border=1><tr><th>Item name</th><th>    </th><th>price</th></tr>"
    var sum:number = 0;
    for(var i = 0; i<entryJson.length; i++){
        tableContent +="<tr><td>"+entryJson[i].name+"</td><td>"+"</td><td>"+"$"+entryJson[i].price+"</td></tr>"
        sum += Number(entryJson[i].price);
    }
    tableContent +="<tr><td>"+"Total Cost"+"</td><td>"+"</td><td>"+"$"+sum+"</td></tr>"
    
    var endTable="</table>"
    tableContent = startTable+tableContent+endTable
    document.getElementById("main").innerHTML=tableContent;
}