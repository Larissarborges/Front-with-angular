import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) { }

  getNews() {
    return this.http.get('https://jsonplaceholder.typicode.com/posts')
  }


  create(report: any) {
    return this.http.post('https://jsonplaceholder.typicode.com/posts', report)
  }

  getOneNews(newsId: number) {
    return this.http.get(`https://jsonplaceholder.typicode.com/posts/${newsId}`)
  }
}


