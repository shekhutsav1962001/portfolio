function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
    document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
    document.getElementById("hdr").style.opacity = 0.3;

}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.body.style.backgroundColor = "white";
    document.getElementById("hdr").style.opacity = 1;

}


// water effect
$(document).ready(function () {

    $('#hdr').ripples({
        resolution: 512,
        dropRadius: 10
    });
    // $('#abc').ripples({
    //     resolution: 512,
    //     dropRadius: 10
    // });
});
