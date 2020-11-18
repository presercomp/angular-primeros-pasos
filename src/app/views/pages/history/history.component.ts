import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})
export class HistoryComponent implements OnInit {

  boletas = [];
  constructor(
    private http: HttpClient
  ) {
    this.getJSON().subscribe(data => {
      this.boletas = data;
    });
   }

   public getJSON(): Observable<any> {
    return this.http.get<Response>('assets/data/invoices.json');
  }

  ngOnInit(): void {
  }

}
