import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, shareReplay, tap } from 'rxjs';
import { Country } from '../types/country';

@Injectable()
export class CountriesService {
  private readonly api = 'http://localhost:3000/countries';

  countries$: Observable<Country[]> = inject(HttpClient)
    .get<Country[]>(this.api)
    .pipe(shareReplay(1));
}