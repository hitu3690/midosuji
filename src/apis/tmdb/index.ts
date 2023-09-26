import { AxiosRequestConfig } from "axios";
import { APIClient } from "../client";
import { Language, OriginalLanguage, SortBy } from "@/types";

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
  original_language: OriginalLanguage;
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

export interface TheMovieDatabaseRequest {
  language: Language;
  sort_by: SortBy;
}

export class TheMovieDatabaseAPIClient extends APIClient {
  constructor(requestConfig: AxiosRequestConfig) {
    super(requestConfig);
  }

  /**
   * Movies を取得
   */
  public async getTMDBMovies(
    params: TheMovieDatabaseRequest
  ): Promise<TheMovieDatabaseResponse> {
    const query = new URLSearchParams({
      include_adult: "false",
      include_video: "false",
      ...params,
    });
    const endpoint = `${this.requestConfig.baseURL}/movie/popular?${query}`;

    const response = await this.get<TheMovieDatabaseResponse>(endpoint);

    return response.data;
  }
}
