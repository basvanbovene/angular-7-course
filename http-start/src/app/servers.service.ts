import {Injectable} from '@angular/core';
import {Http, Headers} from '@angular/http';

@Injectable()
export class ServersService {
  private url = 'https://udemy-ng-http-eaee2.firebaseio.com/data.json';

  constructor(private http: Http) {}

  storeServers(servers: any[]) {
    const headers = new Headers({'Content-Type': 'application/json'});
    return this.http.put(this.url, servers, {headers});
  }

  getServers() {
    return this.http.get(this.url);
  }
}
