import * as config from "config";

export default class HttpService<T> {
  httpHeaders = {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "POST",
  };

  _request = (url: string, method: string, body?: any): Promise<T> =>
    new Promise((resolve, reject) => {
      fetch(`${config.API_URL}/${url}`, {
        method,
        body: JSON.stringify(body),
        headers: this.httpHeaders,
      })
        .then((res) => res.json())
        .catch((err) => reject(err))
        .then((data) => resolve(data))
        .catch((err) => reject(err));
    });

  _getRequest = (url: string): Promise<T> => this._request(url, "GET");

  _postRequest = (url: string, body?: any): Promise<T> =>
    this._request(url, "POST", body);

  _deleteRequest = (url: string) => this._request(url, "DELETE");

  _putRequest = (url: string, body: any): Promise<T> =>
    this._request(url, "PUT", body);
}
