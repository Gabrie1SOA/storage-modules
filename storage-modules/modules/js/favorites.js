export function addFavorite(champion) {
    let favorites = JSON.parse(localStorage.getItem('favorites')) || [];
    if (!favorites.includes(champion)) {
        favorites.push(champion);
        localStorage.setItem('favorites', JSON.stringify(favorites));
    }
    displayFavorites();
}

export function displayFavorites() {
    let favorites = JSON.parse(localStorage.getItem('favorites')) || [];
    const favoritesList = document.getElementById('favorite-champions');
    favoritesList.innerHTML = '';
    favorites.forEach(favorite => {
        const li = document.createElement('li');
        li.textContent = favorite;
        favoritesList.appendChild(li);
    });
}
