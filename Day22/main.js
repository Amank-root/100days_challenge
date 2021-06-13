var nav = '<header>'+
            '<h1>Artistic</h1>'+
            '<div class="nav">'+
                '<ul>'+
                    '<li class="hide"><a href="/">Home</a></li>'+
                    '<li class="hide"><a href="/">About</a></li>'+
                    '<li class="hide"><a href="/">Contact</a></li>'+
                    '<li class="hide"><a href="/">Services</a></li>'+
                    '<li class=" dropdown show" onclick="ny()">'+
                        '<a class="nav-link dropdown-toggle" data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false" style="color: white;">&#9776;</a>'+
                        '<div class="dropdown-menu">'+
                            '<a class="dropdown-item" href="/">Home</a>'+
                            '<a class="dropdown-item" href="/">About</a>'+
                            '<a class="dropdown-item" href="/">Service</a>'+
                            '<div class="dropdown-divider"></div>'+
                            '<a class="dropdown-item" href="/">Contact</a>'+
                        '</div>'+
                    '</li>'+
                '</ul>'+
            '</div>'+
        '</header>';

document.getElementById('nav').innerHTML = nav;

var pass = "Newbg"

function bagr() {
    var code = prompt("Enter Your PassCode.")
    if (code === pass) {
        document.getElementById('bag').style.background = 'url(./m.jpg) center center no-repeat';
        document.getElementById('bag').style.backgroundSize = 'cover';
        document.getElementById('ghost').innerHTML = 'Ghost, soul or spectre of a dead person, usually believed to inhabit the netherworld and to be capable of returning in some form to the world of the living. According to descriptions or depictions provided by believers, a ghost may appear as a living being or as a nebulous likeness of the deceased or, occasionally, in other forms.';
        document.getElementById('ghead').innerHTML = 'Ghost';
        document.getElementById('gimg').src = './ghost.jpg';
    }
    else {
        console.log('Wrong PassCode.')
    }
    
}