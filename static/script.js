function greetingFunc() {
    var d = new Date();
    var h = d.getHours();
    var E = document.getElementById("greeting");
    if (h < 12 && h >= 5) {
        E.innerHTML = "Good morning, I am Tor";
    } else if (12 <= h && h < 18) {
        E.innerHTML = "Good afternoon, I am Tor";
    } else if (18 <= h && h < 20) {
        E.innerHTML = "Good evening, I am Tor";
    } else {
        E.innerHTML = "Good night, I am Tor";
    }
}

var L = window.location.href;
if (L.includes("index.html")) {
    greetingFunc();
}
if (L.includes("fun.html")) {
    initMap();
}

function addYear() {
    var d = new Date();

    var y = d.getFullYear();

    var E = document.getElementById("copyYear");

    E.innerHTML += y;
}

// function showList() {
//     document.getElementById("FavList").style.display = "block";

//     document.getElementById("SeeMoreBTN").style.display = "none";
// }

$("#readLess").click(function () {
    $("#longIntro").hide();

    $("#readLess").hide();

    $("#readMore").show();
});

$("#readMore").click(function () {
    $("#longIntro").show();

    $("#readLess").show();

    $("#readMore").hide();
});

function validate() {
    var userName = document.getElementById("UserName");

    var userEmail = document.getElementById("UserEmail");

    var userText = document.getElementById("Usertext");

    var msg = document.getElementById("ValidateMsg");

    if (
        !userName.checkValidity() ||
        !userEmail.checkValidity() ||
        !userText.checkValidity()
    ) {
        msg.innerHTML =
            "Please fill out the form correctly so I can get back to you :)";
    }
}

// Initialize and add the map

let map;

async function initMap() {
    // The location of CMU

    const position = { lat: 13.760392455997849, lng: 100.49993159338915 };
    const position2 = { lat: 13.740392455997849, lng: 100.51993159338915 };

    // Request needed libraries.

    //@ts-ignore

    const { Map } = await google.maps.importLibrary("maps");

    const { AdvancedMarkerElement } = await google.maps.importLibrary("marker");

    // The map, centered at CMU

    map = new Map(document.getElementById("map"), {
        zoom: 12,

        center: position,

        mapId: "DEMO_MAP_ID",
    });

    // The marker, positioned at CMU

    const marker = new AdvancedMarkerElement({
        map: map,

        position: position,

        title: "Wat Bowon",
    });

    const marker2 = new AdvancedMarkerElement({
        map: map,

        position: position2,

        title: "Yay",
    });
}

function activeNav() {
    var x = document.getElementById("myTopnav");

    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}
