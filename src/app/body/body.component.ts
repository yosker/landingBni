import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UsersService } from '../services/users.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css'],
})
export class BodyComponent implements OnInit {
  user: any = {};

  myAngularxQrCode: any;
  private url = `http://localhost:3000/users`;
  userName = 'Hola!';
  scan = 'Escanea el código QR con tu smartphone.';
  error: any;

  constructor(
    private users: UsersService,
    private activatedRoute: ActivatedRoute,
    private http: HttpClient
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(async (params) => {
      this.myAngularxQrCode = `${this.url}/getInformation/${params[
        'id'
      ].toString()}/${params['chapterId'].toString()}`;
    });

    this.http
      .get(this.myAngularxQrCode, { observe: 'response' })
      .subscribe((data: any) => {
        this.user.name = data.body.result['name'];
        this.user.email = data.body.result['email'];
        this.user.image = data.body.result['image'];
        this.user.profession = data.body.result['profession'];
        this.user.companyName = data.body.result['companyName'];
      });
  }
}
