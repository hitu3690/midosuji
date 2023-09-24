import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';
import { CustomError, ErrorMessage } from './errorHandler';

export class APIClient {
  private readonly axiosInstance: AxiosInstance;
  protected requestConfig: AxiosRequestConfig = {
    headers: {
      'Content-Type': 'application/json',
    },
    baseURL: '',
  };

  constructor(config: AxiosRequestConfig) {
    this.requestConfig.baseURL = config.baseURL ?? '';
    this.axiosInstance = axios.create(this.requestConfig);

    this.axiosInstance.interceptors.response.use(
      this.handleResponseSuccess,
      this.handleResponseError,
    );
  }

  // # region response interceptor
  // レスポンス成功時
  private handleResponseSuccess = (
    response: AxiosResponse<unknown>,
  ): AxiosResponse<unknown> => response;

  // レスポンス失敗時のエラーハンドリング
  private handleResponseError = (error: unknown): Promise<never> => {
    if (error instanceof Error) {
      throw new CustomError(error.stack ?? error.message, 500);
    }

    throw new CustomError(ErrorMessage.InternalError, 500);
  };
  // # region end

  // fetch api
  public async get<T>(
    url: string,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
    params?: any,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  ): Promise<AxiosResponse<T, any>> {
    const response = await this.axiosInstance.get<T>(url, { params });

    return response;
  }

  public async post<T>(
    url: string,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    params?: any,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  ): Promise<AxiosResponse<T, any>> {
    const response = await this.axiosInstance.post<T>(url, { params });

    return response;
  }
}