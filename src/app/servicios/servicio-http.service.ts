import { Injectable } from '@angular/core';
import { Http, Headers, Response, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';


@Injectable()
export class ServicioHttpService {

  constructor(private http: Http) { }

  private handleError(error: Response | any) {
    let errMsg: string;
    if (error instanceof Response) {
      const body = error.json() || '';
      const err = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    console.error(errMsg);
    return Observable.throw(errMsg);
  }

  private extractData(res: Response) {
    let body = res.json();
    return body;
  }

  // este es read
  get(url) { 
    return this.http
      .get(url)
      .map(this.extractData)
      .catch(this.handleError);
  }
// este es create
  post(url, data) {
    let headers = new Headers();
    return this.http.post(url, data)
      .map(this.extractData);
  }
// este es update
  put(url, data) {
    let headers = new Headers();
    return this.http.put(url, data)
      .map(this.extractData);
  }
// este es delete, duh
  delete(url) {
    return this.http
      .delete(url)
      .map(this.extractData);
  }

}



