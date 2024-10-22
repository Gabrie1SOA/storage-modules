// Función para agregar campeones a favoritos y almacenarlos en local storage
function addFavorite(champion) {
    let favorites = JSON.parse(localStorage.getItem('favorites')) || [];
    if (!favorites.includes(champion)) {
        favorites.push(champion);
        localStorage.setItem('favorites', JSON.stringify(favorites));
    }
    displayFavorites();
}

// Función para mostrar los campeones favoritos
function displayFavorites() {
    let favorites = JSON.parse(localStorage.getItem('favorites')) || [];
    const favoritesList = document.getElementById('favorite-champions');
    favoritesList.innerHTML = '';  // Limpiar la lista antes de actualizar
    favorites.forEach(favorite => {
        const li = document.createElement('li');
        li.textContent = favorite;
        favoritesList.appendChild(li);
    });
}

// Al cargar la página, mostrar los favoritos
window.onload = function() {
    displayFavorites();
}
