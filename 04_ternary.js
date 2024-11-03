'use strict';

const filmSearch = document.getElementById('query');
filmSearch.addEventListener('submit', async function(evt) {
    evt.preventDefault();
    const code = document.getElementById('search').value;
    const response = await fetch(`https://api.tvmaze.com/search/shows?q=${code}`);
    const jsonData = await response.json();


    const resultsContainer = document.getElementById('results');
    resultsContainer.innerHTML = '';


    jsonData.forEach(item => {

        const article = document.createElement('article');


        const title = document.createElement('h2');
        title.textContent = item.show.name;
        article.appendChild(title);


        const img = document.createElement('img');
        img.src = item.show.image ? item.show.image.medium : 'https://via.placeholder.com/210x295?text=Not%20Found';
        img.alt = item.show.name;
        article.appendChild(img);


        if (item.show.officialSite) {
            const link = document.createElement('a');
            link.href = item.show.officialSite;
            link.target = "_blank";
            link.textContent = item.show.officialSite;
            article.appendChild(link);
        }


        const summary = document.createElement('div');
        summary.innerHTML = item.show.summary || 'No summary available.';
        article.appendChild(summary);


        resultsContainer.appendChild(article);
    });

    console.log(jsonData[0].show.name);
});
