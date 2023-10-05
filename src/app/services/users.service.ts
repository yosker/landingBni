import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  private url =
    'http://c5b7-2806-2f0-93c1-f1b4-81cd-b467-47b3-19ac.ngrok-free.app:3000/users';
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
