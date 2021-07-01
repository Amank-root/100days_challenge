let taskbar = document.getElementsByClassName("win")[0]
let startmenu = document.getElementsByClassName("startmenu")[0]

taskbar.addEventListener("click", () => {
    console.log("clicked");
    if (startmenu.style.bottom == "50px") {
        startmenu.style.bottom = "-100rem"
    }
    else {
        startmenu.style.bottom = "50px"
    }
})

if (screen.width <= 700) {
    console.log('hi')
    document.querySelector('Body').innerHTML = '';
    var tag = document.createElement("h1");
    var gat = document.createElement("p");
    tag.setAttribute("class", "Hell");
    var text = document.createTextNode("This Web Page Is Not Yet Supported On Small Scale Devices.");
    var textg = document.createTextNode("Soon We Will Update The Page.");
    gat.setAttribute("class", "para");
    document.querySelector('Body').setAttribute("class", "main");
    tag.appendChild(text);
    gat.appendChild(textg);
    document.querySelector('Body').appendChild(tag).appendChild(gat);
}
else {
    console.log('Working')
}