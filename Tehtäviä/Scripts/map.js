function init() {
    console.log("Page loaded successfully.");
}

function showMap() {
    let address = document.getElementById("address").value;
    let city = document.getElementById("city").value;
    let place = "https://www.google.com/maps?q=" + address + city + "&output=embed";
    let iFrameElement = document.getElementById("map-frame");
    iFrameElement.src = place;
    console.log("Map successfully loaded.", address, city, place);
}

function myFunction() {

}