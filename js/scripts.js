function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
    $('.overlay').addClass('active');
    // document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
    // document.getElementById("hdr").style.opacity = 0.3;

}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    $('.overlay').removeClass('active');
    // document.body.style.backgroundColor = "white";
    // document.getElementById("hdr").style.opacity = 1;

}


// water effect
$(document).ready(function () {
    $('#hdr').ripples({
        resolution: 512,
        dropRadius: 10
    });
    $('#about').ripples({
        resolution: 512,
        dropRadius: 10
    });
    $('#aboutme').ripples({
        resolution: 512,
        dropRadius: 10
    });
    $('#skills').ripples({
        resolution: 512,
        dropRadius: 10
    });
    $('#contact').ripples({
        resolution: 512,
        dropRadius: 10
    });
    $('#footer').ripples({
        resolution: 512,
        dropRadius: 10
    });
});

// close navbar when click outside of nav
$('.overlay').on('click', function () {
    closeNav();
});


window.addEventListener('load', async function () {
    await createBall()
    $(".loader").delay(1000).fadeOut("slow", removeAttr);
    $("#overlayer").delay(1000).fadeOut("slow", removeAttr);
});

var prevScrollpos = window.pageYOffset;
window.onscroll = function () {
    var currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
        document.getElementById("navbtn").style.top = "0";
    } else {
        document.getElementById("navbtn").style.top = "-50px";
    }
    prevScrollpos = currentScrollPos;
}

// hide skillls scrollbar in firefox
var isFirefox = typeof InstallTrigger !== 'undefined';
if (isFirefox) {
    document.getElementById("items").classList.add('hidescrollbar');
}


// remove attribut of 3d ball
function removeAttr() {
    var x = document.getElementsByTagName('a');
    for (let index = 5; index < 30; index++) {
        const element = x[index];
        if (element) {
            element.removeAttribute('xlink:href')
            element.removeAttribute('target')
        }
    }
}

// skillls 3d ball
function createBall() {
    var entries = [

        { label: 'HTML' },
        { label: 'CSS' },
        { label: 'JavaScript' },
        { label: 'jQuery' },
        { label: 'Typescript' },
        { label: 'Node.js' },
        { label: 'Express.js' },
        { label: 'Angular' },
        { label: 'Bootstrap' },
        { label: 'Python' },
        { label: 'Django' },
        { label: 'PHP' },
        { label: 'C' },
        { label: 'C++' },
        { label: 'C#' },
        { label: 'Java' },
        { label: 'Dart' },
        { label: 'Flutter' },
        { label: 'MySQL' },
        { label: 'MongoDB' },
        { label: 'SQLite' },
        { label: 'EF Core' },
        { label: '.NET Core' },
        { label: 'ASP.NET' },
        { label: 'Github' },


    ];

    var settings = {

        entries: entries,
        width: 1500,
        height: 550,
        radius: '90%',
        radiusMin: 100,
        bgDraw: true,
        bgColor: '#0a192f',
        opacityOver: 1.00,
        opacityOut: 0.05,
        opacitySpeed: 6,
        fov: 1000,
        speed: 0.5,
        fontFamily: 'Oswald, Arial, sans-serif',
        fontSize: '18',
        fontColor: '#f1f1f1',
        fontWeight: 'normal',//bold
        fontStyle: 'normal',//italic 
        fontStretch: 'normal',//wider, narrower, ultra-condensed, extra-condensed, condensed, semi-condensed, semi-expanded, expanded, extra-expanded, ultra-expanded
        fontToUpperCase: false,
        tooltipFontFamily: 'Oswald, Arial, sans-serif',
        tooltipFontSize: '11',
        tooltipFontColor: '#fff',
        tooltipFontWeight: 'normal',//bold
        tooltipFontStyle: 'normal',//italic 
        tooltipFontStretch: 'normal',//wider, narrower, ultra-condensed, extra-condensed, condensed, semi-condensed, semi-expanded, expanded, extra-expanded, ultra-expanded
        tooltipFontToUpperCase: false,
        tooltipTextAnchor: 'left',
        tooltipDiffX: 0,
        tooltipDiffY: 10

    };

    //var svg3DTagCloud = new SVG3DTagCloud( document.getElementById( 'holder'  ), settings );
    $('#holder').svg3DTagCloud(settings);

}
