let btn = document.getElementsByClassName('forward')[0]
let car = document.getElementsByClassName('side')[0]


btn.style.width = '6em'
btn.addEventListener('click', () => {
    if (btn.style.width == '6em') {
        forwardc()
        console.log('yo')
    }
    else{
        car.style.transform = 'translateX(0px)';
        console.log('hi')
    }
})
function forwardc() {
    for (i = 0; i < 10*2; i++){
        console.log(i)
        car.style.transform = `translateX(20px)`
        something()
    }
}
function something() {
        car.style.transform = `translateX(20px)`
        car.style.transform = `translateX(40px)`
        car.style.transform = `translateX(50px)`
        car.style.transform = `translateX(60px)`
        car.style.transform = `translateX(70px)`
}
