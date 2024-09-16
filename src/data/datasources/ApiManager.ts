import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';

class ApiManager {
  private api: AxiosInstance;

  constructor() {
    this.api = axios.create({
      baseURL: 'https://10.0.2.2:8080', 
      headers: { 
        'Content-Type': 'application/json',
        'accept': '*/*'
      },
    });

    this.api.interceptors.request.use(
      (config) => {
        console.log('REQ ', config);
        return config;
      },
      (error) => {
        console.log('ERROR 1', error);
        return Promise.reject(error);
      }
    );

    this.api.interceptors.response.use(
      (response: AxiosResponse) => response,
      (error) => {
        return Promise.reject(error);
      }
    );
  }

  get(url: string, config?: AxiosRequestConfig) {
    console.log('URL: ', url);
    console.log('CONFIG: ', config);
    return this.api.get(url, config);
  }

  post(url: string, data: any, config?: AxiosRequestConfig) {
    return this.api.post(url, data, config);
  }

  put(url: string, data: any, config?: AxiosRequestConfig) {
    return this.api.put(url, data, config);
  }

  delete(url: string, config?: AxiosRequestConfig) {
    return this.api.delete(url, config);
  }
}

export const apiManager = new ApiManager();
