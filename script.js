
function addBr() {
   let br = document.createElement("br");
   let span = document.getElementsByClassName("span")[1];
   span.appendChild(br);
}

function changeBg() {
    let span = document.getElementsByClassName("span");
    for (var i = 0; i < span.length; i++){
        span[i].style.backgroundColor = "seagreen";
    }
}

function smallFontSize() {
    let text = document.getElementsByClassName("text");

    for (var i = 0; i < text.length; i++){
        text[i].style.fontSize = "20px";

    }
}

function mediumFontSize() {
    let text = document.getElementsByClassName("text");

    for (var i = 0; i < text.length; i++){
        text[i].style.fontSize = "50px";
    }
}
function largeFontSize() {
    let text = document.getElementsByClassName("text");

    for (var i = 0; i < text.length; i++){
        text[i].style.fontSize ="100px";
    }
}

function changeColor() {
    let span = document.getElementsByClassName("span");
    for (var i = 0; i < span.length; i++){
        span[i].style.color = "blue";
    }
}

   