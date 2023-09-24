import { TheMovieDatabaseAPIClient } from "./tmdb";

interface APIService {
  tmdb: TheMovieDatabaseAPIClient
}

class API implements APIService {
  get tmdb(): TheMovieDatabaseAPIClient {
    return new TheMovieDatabaseAPIClient({
      baseURL: 'https://api.themoviedb.org/3/discover/movie',
    });
  }
}
export default new API();