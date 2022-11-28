import axios from 'axios';

axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*';

class createApi {
  constructor(endpoint) {
    this.loginUrl = '/login';

    this.endpoint = endpoint || '/api';

    this.host = 'http://localhost:3000';
  }

  post({ path = '', data = {}, responseType = 'json', fullResponse = false }) {
    return this._send({
      method: 'POST',
      path,
      data,
      responseType,
      fullResponse,
    });
  }

  put({ path = '', data = {} }) {
    return this._send({ method: 'PUT', path, data });
  }

  patch({ path = '', data = {} }) {
    return this._send({ method: 'PATCH', path, data });
  }

  get({
    path = '',
    data = {},
    params = {},
    responseType = 'json',
    fullResponse = false,
  }) {
    return this._send({
      method: 'GET',
      path,
      data,
      params,
      responseType,
      fullResponse,
    });
  }

  delete({ path = '', data = {} }) {
    return this._send({ method: 'DELETE', path, data });
  }

  async _send({
    method = 'GET',
    path = '',
    data = {},
    params = {},
    responseType = 'json',
    fullResponse = false,
  }) {
    const headers = {};

    const token = localStorage.getItem('access');

    if (token) {
      headers.jwt = `Bearer ${token}`;
    }

    try {
      const response = await axios({
        method,
        url: `${this.host}${this.endpoint}${path}`,
        params,
        data,
        headers,
        responseType,
      });

      if (fullResponse) {
        return response;
      }

      if (response && response.data) {
        return response.data;
      }

      return null;
    } catch (error) {
      if (responseType === 'blob') {
        return { error };
      }

      if (error.response.status === 401) {
        window.location.href = this.loginUrl;
      }

      return { error: error.response.data.error };
    }
  }
}

export default createApi;
