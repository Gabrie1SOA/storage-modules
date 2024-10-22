import { champions } from './champions.js';
import { addFavorite, displayFavorites } from './favorites.js';

const championListDiv = document.getElementById('champion-list');

champions.forEach(champion => {
    const button = document.createElement('button');
    button.textContent = champion;
    button.onclick = () => addFavorite(champion);
    championListDiv.appendChild(button);
});

window.onload = function() {
    displayFavorites();
}
