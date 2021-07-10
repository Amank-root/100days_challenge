let show = document.getElementsByClassName('show')[0]
let hide = document.getElementsByClassName('hide')[0]

show.addEventListener('click', () => {
    if (hide.style.display == 'none') {
        hide.style.display = 'flex'
        show.innerHTML = '<i class="fas fa-times"></i>'
    }
    else {
        show.innerHTML = '<i class="fas fa-bars"></i>'
        console.log('hi')
        hide.style.display = 'none'
    }
})