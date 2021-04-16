import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {AccountDetails} from '../../models/account-details.model';
import {LoginStatus} from '../../models/login-status.model';
@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }

  public async login(accountDetails: AccountDetails): Promise<LoginStatus > {
    const url = '/login';
    try {
      // await this.http.post(url, accountDetails).toPromise();
      if (accountDetails.email === 'john@investor.com'){
        return {loginSuccess: true};
      } else {
        return {loginSuccess: false};
      }
    } catch (e) {
    }
  }
}
