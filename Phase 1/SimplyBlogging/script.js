var i = 0;
function addData(){
    var title = document.getElementById("title").value;
    var article = document.getElementById("articles").value;
    var image = document.getElementById("image").value;
    // var content = title + "\t\n" + article;
    document.getElementById("main").children[0].children[i].children[1].children[0].innerHTML = title;
    document.getElementById("main").children[0].children[i].children[1].children[1].innerHTML = article;
    document.getElementById("main").children[0].children[i].children[0].src = image;
    // document.getElementById("main").children[0].children[0].children[1].innerHTML = content;
    i++;


}