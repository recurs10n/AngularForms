import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Employee } from '../models/employee';
import 'rxjs/Rx';
import { Observable } from 'rxjs';

@Injectable()
export class FormPosterService {

  constructor( private http: Http ) {
  }

  private extractData( res: Response ){
    let body = res.json();
    return body.fields || {};
  }

  private handleError( error: any ) {
    console.error( 'post error ', error );
    return Observable.throw( error.statusText );
  }

  postEmployeeForm( employee: Employee ):Observable<any> {
    let body = JSON.stringify( employee );
    let headers = new Headers( { 'Content-Type': 'application/json' } );
    let options = new RequestOptions( { headers: headers });

    return this.http.post( 'http://localhost:3100/postemployee', body, options )
      .map( res => this.extractData( res ) )
      .catch( err => this.handleError( err ) );
  }
}
