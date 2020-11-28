import { Injectable } from '@angular/core';
import { Stat } from '../models/stat';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable()
export class StatService {

  private _stats: BehaviorSubject<Stat[]>;

  private dataStore: {
    stats: Stat[];
  }

  constructor(private http: HttpClient) {
    this.dataStore = { stats: [] };
    this._stats = new BehaviorSubject<Stat[]>([]);
  }

  get stats(): Observable<Stat[]> {
    return this._stats.asObservable();
  }

  theStats() {
    return this.dataStore.stats;
  }

  loadAll() {
    const statsUrl = 'https://8tdvb17zme.execute-api.us-east-1.amazonaws.com/prod/stats'

    return this.http.get<Stat[]>(statsUrl)
      .subscribe(data => {
        this.dataStore.stats = data;
        this._stats.next(Object.assign({}, this.dataStore).stats);
      }, error => {
        console.log("Failed to fetch stats")
      });
  }
}
