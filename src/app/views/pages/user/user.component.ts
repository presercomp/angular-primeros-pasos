import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  usuarios = [];
  constructor(
    private http: HttpClient
  ) {
    this.getJSON().subscribe(data => {
      this.usuarios = data;
    });
   }

  private getJSON():Observable<any>{
    return this.http.get<Request>('assets/data/users.json');
  }
  ngOnInit(): void {
  }

}
