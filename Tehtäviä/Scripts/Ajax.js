let counter = 0;

function getData() {
    counter++;

    fetch("https://api.chucknorris.io/jokes/random") // Fetch data from the API
        .then(function (response) {
            return response.json(); // Parse the response as JSON
        })
        .then(function (result) {
            // Dynamically create the accordion item with the joke in the accordion-body
            let data =
                `<div class="accordion-item">` +
                `<h2 class="accordion-header" id="flush-heading` + counter + `">` +
                `<button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                data-bs-target="#flush-collapse` + counter + `" aria-expanded="false" aria-controls="flush-collapse` + counter + `">` +
                `Joke ` + counter +
                `</button>` +
                `</h2>` +
                `<div id="flush-collapse` + counter + `" class="accordion-collapse collapse" aria-labelledby="flush-heading` + counter +
                `" data-bs-parent="#accordionFlushExample">` +
                `<div class="accordion-body">` +
                result.value + // Insert the joke here
                `</div>` +
                `</div>` +
                `</div>`;

            // Append the new accordion item to the accordion container
            document.getElementById("accordionFlushExample").innerHTML += data;
        })
        .catch(function (error) {
            console.log(error); // Log any errors
        });
}