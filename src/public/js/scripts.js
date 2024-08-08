async function fetchCharacters() {
  try {
    const response = await fetch('/characters')
    if (!response.ok) {
      throw new Error('Network response was not ok')
    }
    const characters = await response.json()
    const charactersList = document.getElementById('characters-list')
    if (charactersList) {
      charactersList.innerHTML = ''
      characters.forEach((character) => {
        const li = document.createElement('li')
        li.textContent = character.name
        charactersList.appendChild(li)
      })
    }
  } catch (error) {
    console.error('Error fetching characters:', error)
    const charactersList = document.getElementById('characters-list')
    if (charactersList) {
      charactersList.textContent = 'Error fetching characters.'
    }
  }
}

async function fetchMovies() {
  try {
    const response = await fetch('/movies')
    if (!response.ok) {
      throw new Error('Network response was not ok')
    }
    const movies = await response.json()
    const moviesList = document.getElementById('movies-list')
    if (moviesList) {
      moviesList.innerHTML = ''
      movies.forEach((movie) => {
        const li = document.createElement('li')
        li.textContent = `${movie.title} (${movie.year})`
        moviesList.appendChild(li)
      })
    }
  } catch (error) {
    console.error('Error fetching movies:', error)
    const moviesList = document.getElementById('movies-list')
    if (moviesList) {
      moviesList.textContent = 'Error fetching movies.'
    }
  }
}

document.addEventListener('DOMContentLoaded', () => {
  fetchCharacters()
  fetchMovies()
})
