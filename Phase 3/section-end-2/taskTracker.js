let fs = require("fs");
let url = require("url");
let http = require("http");

let indexPage = `
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Index Page</title>
</head>

<body>
    <form action = "store-data" method = "get">
        <label for="emp">Employee ID: </label>
        <input type="text" name="emp"><br>
        <label for="task">Task ID: </label>
        <input type="number" name="task"><br>
        <label for="task-details">Task Details: </label>
        <input type = "text" name="taskDetails"><br>
        <input type="submit" value="submit">
        <input type="reset" value="reset"><br>
    </form><br>
    <a href = "delete">Delete Task</a>
</body>

</html>
`
let showPage = `
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>show page</title>
</head>

<body>
    <h1>task saved successfully!</h1><br>
    <a href = "display">Show Tasks</a><br>
</body>

</html>
`

let deleteTask = `
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Deletion Page</title>
</head>

<body>
    <form action = "delete-data" method = "get">
        <label for="emp">Emp ID: </label>
        <input type="text" name="emp"><br>
        <label for="task">Task ID: </label>
        <input type="number" name="task"><br>
        <input type="submit" value="submit">
        <input type="reset" value="reset"><br>
    </form><br>
    <a href = "display">Show Tasks</a><br>
</body>

</html>
`
let goBack =  `
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Go Back Page</title>
</head>

<body>
    <form action = "indexPage" method = "get">
        <button>Go Back</button>
    </form>
</body>

</html>
`

http.createServer((request, respond)=>{
    let urlInfo = url.parse(request.url, true);
    console.log(urlInfo);
    if(urlInfo.path != "/favicon.ico"){
        if(urlInfo.pathname == "/store-data"){
            // respond.write(showPage);
            let queryMsg = urlInfo.query;
            let msg = [];
            let eachTask = {empID:queryMsg.emp, task:queryMsg.task, taskDetails:queryMsg.taskDetails};
            let strTasks = fs.readFileSync("tasks.json").toString();
            if(strTasks.length == 0){
                msg.push(eachTask);
                let strfiedTasks = JSON.stringify(msg);
                fs.writeFileSync("tasks.json", strfiedTasks);
                respond.write(showPage);
            }else{
                let parsedTasks = JSON.parse(strTasks);
                let result = parsedTasks.find(item => item.empID == eachTask.empID && item.task == eachTask.task);
                console.log(result);
                if(result == undefined){
                    parsedTasks.push(eachTask);
                    let stringifiedTasks = JSON.stringify(parsedTasks);
                    fs.writeFileSync("tasks.json", stringifiedTasks);
                    respond.write(showPage);
                }else{
                    respond.write(indexPage);
                    respond.write("<h1>you have already entered a task with that same id, try a new one</h1>");
                }
                
            }
        }
        else if(urlInfo.pathname == "/display"){
            let tableStart = "<table border = '1' ><tr><td>emp id</td><td>task id</td><td>task details</td></tr>";
            let tableEnd = "</table>";
            let parsedData = JSON.parse(fs.readFileSync("tasks.json").toString());
            console.log(parsedData);
            let rowBegins = "<tr>";
            let dataBegins = "<td>";
            let dataEnds = "</td>";
            let rowEnds = "</tr>";
            respond.write(tableStart);
            for(let data of parsedData){
                respond.write(rowBegins);
                for(let names in data){
                    respond.write(dataBegins+data[names]+dataEnds);
                }
                respond.write(rowEnds);
            }
            respond.write(tableEnd);
            respond.write(goBack);
        }else if(urlInfo.pathname == "/delete"){
            respond.write(deleteTask);
        }
        else if(urlInfo.pathname == "/delete-data"){
            let taskToBeDeleted = urlInfo.query;
            console.log(taskToBeDeleted)
            let parsedData = JSON.parse(fs.readFileSync("tasks.json").toString());
            console.log(parsedData);
            for(let dd of parsedData){
                console.log(dd)
                parsedData = parsedData.filter(taskName=>taskName.task != taskToBeDeleted.task);
                console.log(parsedData);
                break;
                // if(JSON.stringify(dd.task) == JSON.stringify(taskToBeDeleted.task)){
                //     // delete parsedData[dd];
                //     // parsedData = parsedData.filter(taskName=>taskName.task != taskToBeDeleted.task);
                //     // console.log(parsedData);
                //     break;
                // }
            }
            let strData = JSON.stringify(parsedData);
            fs.writeFileSync("tasks.json", strData);
            respond.write("deleted successfully");
        }
        else{
            respond.write(indexPage);
        }
    }
}).listen(9090, ()=> console.log("server running on port 9090"));