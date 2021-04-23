import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CountryService {
  constructor(private http: HttpClient) {
    console.log('Country service running!');
  }

  getAllCountries() {
    return this.http.get('https://restcountries.eu/rest/v2/all');
  }
}
