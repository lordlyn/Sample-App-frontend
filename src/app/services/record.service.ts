import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class RecordService {
  private url = 'http://localhost:3000/records/';

  httOptions: {
    headers: HttpHeaders;
  } = {
    headers: new HttpHeaders({ 'Content-type': 'application/json' }),
  };

  constructor(private http: HttpClient) {}

  get() {
    return this.http.get(this.url, { responseType: 'json' });
  }

  add(data: any) {
    this.http.post(this.url, data, this.httOptions).subscribe((res) => {
      return res;
    });
  }
}
