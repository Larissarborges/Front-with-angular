import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-register-news',
  templateUrl: './register-news.component.html',
  styleUrls: ['./register-news.component.css']
})
export class RegisterNewsComponent implements OnInit {

  report: any

  constructor(
    private _http: HttpService, 
    private route: ActivatedRoute,
    private router: Router ) { }

  ngOnInit(): void {
    this.report = {}

  }

  create(frm: FormGroup) {
    this._http.create(this.report).subscribe(response => {
      console.log(response)
      alert('Noticia Cadastrada com Sucesso')
      this.router.navigate(['/'])
    })
  }
    
}
