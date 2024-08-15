export class newInstanceFetch {
  private baseUrl: string | undefined;
  private abortController?: AbortController;

  constructor(baseUrl: string | undefined) {
    this.baseUrl = baseUrl;
    if (typeof window !== 'undefined' && 'AbortController' in window) {
      this.abortController = new AbortController();
    }
  }

  private async makeHeaders() {
    const headers = {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    };

    /*const session = await getSession();
    if (session) {
      headers['x-usrtx'] = `${session.user.customerId}`;
      if (this.baseUrl !== process.env.NEXT_PUBLIC_API_MATCH_URL) {
        headers.Authorization = `Bearer ${session.access_token}`;
      }
    }*/

    return headers;
  }

  private async makeHeadersStrapi() {
    const headers = {
      "Authorization": 'bearer ' + process.env.NEXT_PUBLIC_STRAPI_TOKEN,
      'Content-Type': 'application/json',
      "Cache-Control": "max-age = 0"
    }

    return headers;
  }

  public async fetch(url: string, options: RequestInit): Promise<any> {

    options.headers = await this.makeHeadersStrapi();

    if (this.abortController) {
      options.signal = this.abortController.signal;
    }

    const response = await fetch(this.baseUrl + url, options);

    const result = await response.json();

    if (!response.ok) {
      throw (result);
    }

    return result;
  }

  public get<T = any>(url: string): Promise<T> {
    return this.fetch(url, { method: 'GET' });
  }

  public post<T = any>(url: string, data: any): Promise<T> {
    return this.fetch(url, { method: 'POST', body: JSON.stringify(data) });
  }

  public patch<T = any>(url: string, data: any): Promise<T> {
    return this.fetch(url, { method: 'PATCH', body: JSON.stringify(data) });
  }

  public put<T = any>(url: string, data: any): Promise<T> {
    return this.fetch(url, { method: 'PUT', body: JSON.stringify(data) });
  }

  public delete<T = any>(url: string): Promise<T> {
    return this.fetch(url, { method: 'DELETE' });
  }
}

export const apiQForo = new newInstanceFetch(process.env.NEXT_PUBLIC_API_QUANTUM_FORO_URL || process.env.API_QUANTUM_FORO_URL);