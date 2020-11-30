import { Injectable } from '@angular/core';
import { UserLikeResponse } from 'src/app/models/user-like-response';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

const authURL = 'https://www.minitwitter.com:3001/api/tweets/all';
const requestOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class TweetsService {

  constructor(private http:HttpClient) { }

  getTweets(): Observable<UserLikeResponse>{
    return this.http.get<UserLikeResponse>(
      authURL,
      requestOptions
   );
  }
}
