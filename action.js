//selecting popup box , popup overlay and button


var popupoverlay = document.querySelector(".overlay")
var popupbox = document.querySelector(".popup");
var addbtn = document.querySelector(".add-div");
var body = document.querySelector("body");
addbtn.addEventListener("click", function () {
    // body.setAttribute("class", "active-overlay");
    popupoverlay.style.display = "block";
    popupbox.style.display = "block";
})

var close_popup = document.querySelector(".cancel");

close_popup.addEventListener("click", function (event) {
    event.preventDefault();
    // body.removeAttribute("class", "active-overlay");
    popupoverlay.style.display = "none";
    popupbox.style.display = "none";
})

var add_btn = document.querySelector(".Add");

add_btn.addEventListener("click", function (event) {
    event.preventDefault();
    var bookname = document.getElementById("booktitle").value;
    var bookauthor = document.getElementById("bookauthor").value;
    var description = document.getElementById("description").value;
    var new_box = document.createElement('div');
    new_box.setAttribute("class", "box");
    new_box.innerHTML = "<h3>" + bookname + "</h3><h5 class='Author'>" + bookauthor + "</h5><p>" + description + "</p><button class='deletebook'  onclick='deletebook(event)'>Delete</button>";

    //select container

    var cont = document.querySelector(".boxes")
    cont.append(new_box);
    // body.removeAttribute("class", "active-overlay");
    popupoverlay.style.display = "none";
    popupbox.style.display = "none";

})

function deletebook(event) {
    event.target.parentElement.remove();
}

