
var url = prompt("Enter a URL");

if (url == null) {
    console.error("Missing input");
}
if (url.substr(0, 4) != "http") {
    url = "http://" + url;
}

var spanNode = document.getElementById("link");
spanNode.innerHTML = "<a href='" + url + "'>" + "Your link" + "</a>";