'use strict';

const airportForm = document.querySelector('form');
airportForm.addEventListener('submit', async function(evt) {
    evt.preventDefault();

    const code = document.getElementById('query').value;
    try {

        const response = await fetch(`https://api.tvmaze.com/search/shows?q=${code}`);

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const jsonData = await response.json();

        console.log(jsonData);
    } catch (error) {

        console.log(`Error: ${error.message}`);
    }
});
