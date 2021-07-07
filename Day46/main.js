let sign = document.getElementsByClassName('up')[0]
let sigp = document.getElementsByClassName('sigp')[0]
let show = document.getElementsByClassName('show')[0]

sign.addEventListener("click", () => {
    console.log("clicked");
    if (sigp.style.display == 'none'){
        sigp.style.display = "flex";
        console.log('hello')
    }
    else {
        sigp.style.display = 'flex'
        // sign.style.display
        console.log('hi')
    }
})

show.addEventListener("click", () => {
    console.log("clicked");
    if (sigp.style.display == 'none'){
        sigp.style.display = "flex";
        console.log('hello')
    }
    else {
        sigp.style.display = 'flex'
        // sign.style.display
        console.log('hi')
    }
})

// sign.addEventListener("click", () => {

// })