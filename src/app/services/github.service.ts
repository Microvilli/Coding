import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class GithubService {

  private username: string;
  private clientid = 'GitHub Auth';
  private clientsecret = 'GitHub Auth';

  constructor(private http: HttpClient) {
    this.username = 'Microvilli';
  }

  getProFileInfo() {
     return this.http.get('https://api.github.com/users/' + this.username);

     //optional sollte hier clientid und clientsecret hinzugefügt werden
  }

  getProfileRepos() {
    return this.http.get('https://api.github.com/users/' + this.username + '/repos');
  }
}
