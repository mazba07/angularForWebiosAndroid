import { HttpClient, HttpErrorResponse, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError, map, catchError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  public baseURL = "https://randomuser.me/";
  // public baseURL = "http://34.133.122.128:8080/api/";

  constructor(private http: HttpClient) { }

  private handleError(err: HttpErrorResponse): Observable<never> {
    console.log("header response error, was not 200");
    // alert("Unknown error! Server response is not 200.");
    return throwError(() => err);
  }

  getData(url: string, auth: boolean = false): Observable<any> {
    var url = this.baseURL + url;
    var setHeaders: any;

    if (auth) {
      setHeaders = new HttpHeaders().set(
        "Authorization",
        'Bearer ' + ''
      );
    }

    return this.http.get(url, { headers: setHeaders, observe: 'response' })
      .pipe(map((data: any) => {
        return data;
      }),
        catchError(this.handleError)
      );
  }

  postData(url: string, auth: boolean = false, postData: object): Observable<any> {
    var url = this.baseURL + url;
    var setHeaders: any;

    if (auth) {
      setHeaders = new HttpHeaders().set(
        "Authorization",
        'Bearer ' + ''
      );
    }

    return this.http.post(url, postData, { headers: setHeaders, observe: 'response' })
      .pipe(map((data: any) => {
        //handle api 200 response code here or you wanted to manipulate to response
        return data;
      }),
        catchError(this.handleError)
      );
  }

  postDataAsForm(url: string, auth: boolean = false, postData: any): Observable<any> {
    var url = this.baseURL + url;
    // var setHeaders: any;

    // if (auth) {
    //   setHeaders = new HttpHeaders().set(
    //     "Authorization",
    //     'Bearer ' + ''
    //   );
    // }


    // Convert data to HttpParams
    let body = new HttpParams();
    for (let key in postData) {
      if (postData.hasOwnProperty(key)) {
        body = body.set(key, postData[key]);
      }
    }

    // Set the headers
    var headers = new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded'
    });
    
    return this.http.post(url, body.toString(), { headers: headers, observe: 'response' })
      .pipe(map((data: any) => {
        //handle api 200 response code here or you wanted to manipulate to response
        return data;
      }),
        catchError(this.handleError)
      );
  }

}
