import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-config',
  templateUrl: './config.component.html',
  styleUrls: ['./config.component.css']
})
export class ConfigComponent implements OnInit {

  empresa = null;
  constructor(
    private http: HttpClient
  ) {
      this.getJSON().subscribe(data => {
        this.empresa = data;
      });
   }

  public getJSON(): Observable<any>{
    return this.http.get<Response>('assets/data/company.json');
  }
  ngOnInit(): void {
  }

}
