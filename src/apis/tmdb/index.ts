import { AxiosRequestConfig } from "axios";
import { APIClient } from "../client";
import { LanguageCode } from "@/types";

/** The Movie Database API current weather のレスポンスの型 */
export interface TheMovieDatabaseResponse {
  page: number;
  results: Array<TheMovieDatabaseResult>;
  total_pages: number;
  total_results: number;
}

export interface TheMovieDatabaseResult {
  adult: boolean;
  backdrop_path: string;
  genre_ids: Array<number>;
  id: number;
  original_language: LanguageCode;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  // "2022-08-06"
  release_date: string;
  title: string;
  video: true;
  vote_average: number;
  vote_count: number;
}

export class TheMovieDatabaseAPIClient extends APIClient {
  constructor(requestConfig: AxiosRequestConfig) {
    super(requestConfig);
  }

  /**
   * CurrentWeatherを取得
   */
  public async getMovies(): Promise<TheMovieDatabaseResponse> {
    const query = this.getMoviesQuery();
    const endpoint = `${this.requestConfig.baseURL}?${query}`;

    const response = await this.get<TheMovieDatabaseResponse>(endpoint);
    console.log({ response });

    return response.data;
  }

  private getMoviesQuery(): string {
    const query = `api_key=a17e7b03c579ff09faa20b31fac0c2a3&sort_by=popularity.desc&region=JP&language=ja-JP&with_original_language=ja`;

    return query;
  }
}
