import { Component, OnInit } from '@angular/core';

import { HttpService } from '../http.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  title = 'Teste-Marlin-Angular';

  news: any = [];

  constructor(private _http: HttpService,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {
    this._http.getNews().subscribe((data: any[]) => {
      this.news = data.slice(0, 6)
      console.log(this.news)
    })

    }
}
