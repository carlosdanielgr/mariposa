import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class FormService {
  API_URL = 'https://api.apispreadsheets.com/data/A2jWYhAB2xrNYhJO/';

  constructor(private readonly http: HttpClient) {}

  postForm(data: any) {
    return this.http.post(this.API_URL, data);
  }
}
