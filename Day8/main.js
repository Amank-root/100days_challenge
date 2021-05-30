

var pass1 = "Lucifer";
var pass2 = "newZ";


function pro() {
    var x = prompt("Enter The Passphrase:")
    

    if (x == x) {
        if (x == pass1) {
            document.getElementById("Headx").innerHTML = "Come On";
            document.getElementById("tit1").innerHTML = "It's a Heading";
            document.getElementById("cont1").innerHTML = "Albert Einstein was a German-born theoretical physicist, widely acknowledged to be one of the greatest physicists of all time. Einstein is known for developing the theory of relativity, but he also made important contributions to the development of the theory of quantum mechanics.";
        }
        else if (x == pass2) {
            document.getElementById("Headx").innerHTML = "Go On";
            document.getElementById("tit1").innerHTML = "It's a Heading2";
            document.getElementById("cont1").innerHTML = "Tesla, Inc. is an American electric vehicle and clean energy company based in Palo Alto, California. Tesla's current products include electric cars, battery energy storage from home to grid-scale, solar panels and solar roof tiles, as well as other related products and services.";

        }
    }
    else {
        console.log ("hi")
    }


}