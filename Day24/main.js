var nav = '<header>'+
            '<h1>Indian Revolution</h1>'+
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