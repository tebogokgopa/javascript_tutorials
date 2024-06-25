
function add_item() {
    var ul = document.getElementById("mainlist");
    var additem = document.getElementById("additem");
    var li = document.createElement("li");
    li.setAttribute('id',additem.value);
    li.appendChild(document.createTextNode(additem.value));
    li.style.display = "block";
    ul.appendChild(li);
    additem.value = "";
}

function removeItem(){
    var ul = document.getElementById("mainlist");
    var additem = document.getElementById("additem");
    var item = document.getElementById(additem.value);
    ul.removeChild(item);
}