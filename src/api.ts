const API_KEY = "965b1cb9d4f8aa5a05827a33693623c1";
const BASE_PATH = "https://api.themoviedb.org/3";

export function getMovies() {
    return fetch(`${BASE_PATH}/movie/now_playing?api_key=${API_KEY}`).then(
        response => response.json()
    )
}