import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  item: Object

  constructor(private _http: HttpService, private route: ActivatedRoute) { }

  ngOnInit() {
    this._http.getOneNews(this.route.snapshot.params.id).subscribe(data => {
      this.item = data
    })
  }

}