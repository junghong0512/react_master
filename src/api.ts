const API_KEY = "965b1cb9d4f8aa5a05827a33693623c1";
const BASE_PATH = "https://api.themoviedb.org/3";

export interface IMovie {
    id: number;
    title: string;
    overview: string;
    poster_path: string;
    backdrop_path: string;
}

export interface IGetMoviesResult {
    dates: { maximum: string, minimum:string};
    page: number;
    results: [IMovie];
    total_pages: number;
    total_results: number;
}

export function getMovies() {
    return fetch(`${BASE_PATH}/movie/now_playing?api_key=${API_KEY}`).then(
        response => response.json()
    )
}