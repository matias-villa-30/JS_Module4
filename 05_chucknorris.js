'use strict';

async function chuckNorrisJoke() {
    try {
        const response = await fetch(`https://api.chucknorris.io/jokes/random`);
        const jsonData = await response.json();
        console.log(jsonData.value);
    } catch (error) {
        console.error("Failed to fetch joke:", error);
    }
}


chuckNorrisJoke();
