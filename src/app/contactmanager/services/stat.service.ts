import { Injectable } from '@angular/core';
import { Stat } from '../models/stat';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable()
export class StatService {

  constructor(private http: HttpClient) {

  }

  loadAll() {
    const statsUrl = 'https://8tdvb17zme.execute-api.us-east-1.amazonaws.com/prod/stats'
    return this.http.get<Stat>(statsUrl);
  }
}
