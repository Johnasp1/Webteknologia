window.main = () => {
    // per-frame main loop
    window.requestAnimationFrame(main);
    let hinta = 0;
    let koko = document.getElementById("koko").value;
    if (koko == "tavallinen") {
        hinta += 6.50;
    }
    else if (koko == "perhe") {
        hinta += 8.50;
    }

    const checkboxes = document.getElementsByClassName("topping");

    for (let i = 0; i < checkboxes.length; i++) {
        if (checkboxes[i].checked) hinta += 2.0;
    }
    document.getElementById("price").innerText = hinta + " €";
};
//  kutsutaan main() funktiota, jotta se alkaa pyöriä
main();


//Poistaa kaikki valinnat ja nollaa hinnan
function clearOptions() {
    const checkboxes = document.getElementsByClassName("topping");
    for (let i = 0; i < checkboxes.length; i++) {
        checkboxes[i].checked = false;
    }
    document.getElementById("koko").value = "0";
    document.getElementById("price").innerText = 0;
}

//Näyttää jotain tietoa pizzasta, kun hiiri käy infon päällä
function pizzaInfo() {
    document.getElementById("pizzainfo").innerText = "jotain siistä tietoa pizzasta: voit valita kaikki täytteet, mutta vain yhden koon.";
}