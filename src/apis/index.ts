import { TheMovieDatabaseAPIClient } from "./tmdb";

interface APIService {
  tmdb: TheMovieDatabaseAPIClient;
}

class API implements APIService {
  get tmdb(): TheMovieDatabaseAPIClient {
    return new TheMovieDatabaseAPIClient({
      baseURL: process.env.NEXT_PUBLIC_TMDB_API_URL,
      headers: {
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_TMDB_API_KEY}`,
      },
    });
  }
}
export default new API();
