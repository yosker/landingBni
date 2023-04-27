import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  private url =
    'http://11b3-2806-2f0-93c1-f1b4-e522-9735-260b-5afd.eu.ngrok.io:3000/users';
  constructor(private http: HttpClient) {}

  register(userId: string, chapterId: string) {
    try {
      const result = this.http.get(
        `${this.url}/getInformation/${userId}/${chapterId}`
      );
      console.log(result);
    } catch (error) {
      console.error(error);
    }
  }
}
