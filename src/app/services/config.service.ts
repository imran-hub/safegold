import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {
  runingEnv = 'dev';
  stagingAutenticationToken = '8e62d701294e07f673a5d6b4155c41b5';
  uatAutenticationToken = '8e62d701294e07f673a5d6b4155c41b5';
  baseUrl = 'https://partners-uat.safegold.com/v1/';
  baseUrl1 = 'https://partners-uat.safegold.com/v4/';
  razorpayKey = 'rzp_test_mXqOVOkc2AoICy';
  razorpaySecret = '8seAv39vrL5V2mAUyWanbJcL';
  currancyType = 'INR';
  showMenu = false;
  fromOtpPage = '';
  loggedIn = false;
  userApi = this.baseUrl + 'users';

  constructor() { }
}
