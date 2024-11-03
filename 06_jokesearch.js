'use strict';

document.addEventListener('DOMContentLoaded', () => {
    const jokeSearch = document.getElementById('query');
    jokeSearch.addEventListener('submit', async function(evt) {
        evt.preventDefault();
        const code = document.getElementById('search').value;

        const response = await fetch(`https://api.chucknorris.io/jokes/search?query=${code}`);
        const jsonData = await response.json();

        const resultsContainer = document.getElementById('results');
        resultsContainer.innerHTML = '';

        if (jsonData.total === 0) {
            resultsContainer.innerHTML = '<p>No jokes found.</p>';
            return;
        }

        jsonData.result.forEach(joke => {
            const article = document.createElement('article');
            article.textContent = joke.value;
            resultsContainer.appendChild(article);
        });
    });
});


