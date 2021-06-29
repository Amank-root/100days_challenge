let taskbar = document.getElementsByClassName("win")[0]
let startmenu = document.getElementsByClassName("startmenu")[0]

taskbar.addEventListener("click", ()=>{
    console.log("clicked");
    if(startmenu.style.bottom == "50px"){
        startmenu.style.bottom = "-100rem"
    }
    else{
        startmenu.style.bottom = "50px"
    }
})
