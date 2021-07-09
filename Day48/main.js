let sign = document.getElementsByClassName('up')[0]
let sigp = document.getElementsByClassName('sigp')[0]

sign.addEventListener("click", () => {
    console.log("clicked");
    if (sigp.style.display == 'none'){
        sigp.style.display = 'flex';
        console.log('hello')
    }
    else {
        sigp.style.display = 'none'
        // sign.style.display
        console.log('hi')
    }
})


// sign.addEventListener("click", () => {
    
    // })
    
let show = document.getElementsByClassName('show')[0]
let navly = document.getElementsByClassName('navly')[0]
    
    
    show.addEventListener("click", () => {
        console.log("clicked");
        if (navly.style.display == 'none'){
            navly.style.display = "flex";
            console.log('hello')
        }
        else {
            navly.style.display = 'none'
            // sign.style.display
            console.log('hi')
        }
    })

    
    
let close = document.getElementsByClassName('close')[0]
let navlyt = document.getElementsByClassName('navly')[0]
    
    
    close.addEventListener("click", () => {
        console.log("clicked");
        if (navlyt.style.display == 'flex'){
            navlyt.style.display = "none";
            console.log('hello')
        }
        else {
            navlyt.style.display = 'none'
            console.log('hi')
        }
    })
