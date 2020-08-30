const url = 'https://api.rawg.io/api/games?dates=2019-01-01,2019-12-31&ordering=-rating';

const Containers = document.querySelector('.results');

async function Games() {
    
    try {
        
        const response = await fetch(url);

        const results = await response.json();

        const listGames = results.results;

        Containers.innerHTML = '';

        for (let i = 0; i < listGames.length; i++) {
            
          if (i === 8) {
            break;
          }

          Containers.innerHTML += `<div class="result">
          <h3 class="name">Title: ${listGames[i].name}</h3>
          <p class="rating">Rating: ${listGames[i].rating}</p>
          <p class="tags">Number of tags: ${listGames[i].tags.length}</p>
          </div>`;
            
        }
    } catch (error) {
        load.innerHTML = '';
        Containers.innerHTML = 'An error occurred';
        }
}

Games();