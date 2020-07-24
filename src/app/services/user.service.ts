import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ConfigService } from './config.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private http: HttpClient, private config: ConfigService) { }

  login(data: any): Observable<any> {
    const endPoint = this.config.userApi;
    const payload = { mobile_no: data };
    const headers: HttpHeaders = new HttpHeaders({
      Authorization: 'Bearer ' + this.config.uatAutenticationToken,
    });
    const options = { headers };
    return this.http.post<any>(endPoint + '/login', payload, options);
  }

  register(data: any): Observable<any> {
    const endPoint = this.config.userApi;
    const payload = {
      mobile_no: data.mobile_no,
      name: data.name,
      email: data.email,
      pin_code: data.pin_code
    };
    const headers: HttpHeaders = new HttpHeaders({
      Authorization: 'Bearer ' + this.config.uatAutenticationToken,
    });
    const options = { headers };
    return this.http.post<any>(endPoint + '/sg', payload, options);
  }
}
