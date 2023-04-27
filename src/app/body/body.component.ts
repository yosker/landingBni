import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UsersService } from '../services/users.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
})
export class BodyComponent implements OnInit{
  myAngularxQrCode: any;
  private url = `http://localhost:3000/users`;
  userName = 'Hola!';
  scan = 'Escanea el código QR con tu smartphone.';
  error: any;
  constructor(
    private users: UsersService,
    private activatedRoute: ActivatedRoute,
    private http: HttpClient
  ) {

  }
  ngOnInit(): void {
    this.activatedRoute.params.subscribe(async (params) => {
      this.myAngularxQrCode = `${this.url}/getInformation/${params[
        'id'
      ].toString()}/${params['chapterId'].toString()}`;
    });
  }
}
