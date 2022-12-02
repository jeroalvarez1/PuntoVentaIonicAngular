import { Component, OnInit } from '@angular/core';
import { ViewEncapsulation } from '@angular/core';
import { HttpClient } from '@angular/common/http';
export interface Data {
  movies: string;
}

@Component({
  selector: 'app-new-sale',
  templateUrl: './new-sale.page.html',
  styleUrls: ['./new-sale.page.scss'],
  encapsulation: ViewEncapsulation.None
})
export class NewSalePage implements OnInit {

  public data: Data;
  public columns: any;
  public rows: any;
      constructor(
        private http: HttpClient
      ) {
        this.columns = [
          { name: 'Name' },
          { name: 'Company' },
          { name: 'Genre' }
        ];
        this.http.get<Data>('./movies.js')
          .subscribe((res) => {
            console.log(res);
            this.rows = res.movies;
          });

      }

  ngOnInit() {
  }

}
