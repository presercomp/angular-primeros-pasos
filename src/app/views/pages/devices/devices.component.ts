import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-devices',
  templateUrl: './devices.component.html',
  styleUrls: ['./devices.component.css']
})
export class DevicesComponent implements OnInit {

  dispositivos = [];
  constructor(
    private http: HttpClient
  ) {
    this.getJSON().subscribe(data => {
      this.dispositivos = data;
    });
   }

   public getJSON(): Observable<any> {
     return this.http.get<Response>('assets/data/devices.json');
   }

  ngOnInit(): void {

  }

}
