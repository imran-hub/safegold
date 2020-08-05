import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {ConfigService} from './config.service';
import {Observable} from 'rxjs';
import {FormlyFieldConfig} from '@ngx-formly/core';
import {CommonValidatorsMap} from '../validations/validators';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private http: HttpClient, private config: ConfigService) {
  }

  login(data: any): Observable<any> {
    const endPoint = this.config.userApi;
    const payload = {mobile_no: data};
    const headers: HttpHeaders = new HttpHeaders({
      Authorization: 'Bearer ' + this.config.uatAutenticationToken,
    });
    const options = {headers};
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
    const options = {headers};
    return this.http.post<any>(endPoint + '/sg', payload, options);
  }

  getCustomerLoginFormFields() {
    const fields: FormlyFieldConfig[] = [
      {
        fieldGroupClassName: 'row',
        fieldGroup: [
          {
            key: 'contactNumber',
            type: 'input',
            className: 'col-md-12 col-sm-12 col-lg-12',
            templateOptions: {
              required: true,
              label: 'Mobile Number',
              placeholder: 'Enter 10 digit mobile number',
              maxLength: 10,
            },
            validators: {
              validation: [
                CommonValidatorsMap.Required.validator,
                CommonValidatorsMap.OnlyNumbers.validator
              ]
            },
            validation: {
              messages: {
                required: CommonValidatorsMap.Required.message,
                contactNumber: (error, field) => this.setErrorMessage(field)
              }
            },
          },
          {
            key: 'otpOverEmail',
            type: 'checkbox',
            className: 'col-md-12 col-sm-12 col-lg-12',
            templateOptions: {
              label: 'Receive OTP on registered email id.',
              indeterminate: false,
            }
          }
        ]
      }
    ];
    return fields;
  }

  getPartnerLoginFormFields() {
    const fields: FormlyFieldConfig[] = [
      {
        fieldGroupClassName: 'row',
        fieldGroup: [
          {
            key: 'contactNumber',
            type: 'input',
            className: 'col-md-12 col-sm-12 col-lg-12',
            templateOptions: {
              required: true,
              label: 'Mobile Number',
              placeholder: 'Enter 10 digit mobile number',
              maxLength: 10,
            },
            validators: {
              validation: [
                CommonValidatorsMap.Required.validator,
                CommonValidatorsMap.OnlyNumbers.validator
              ]
            },
            validation: {
              messages: {
                required: CommonValidatorsMap.Required.message,
                contactNumber: (error, field) => this.setErrorMessage(field)
              }
            },
          }
        ]
      }
    ];
    return fields;
  }

  getRegisterFormFields() {
    const fields: FormlyFieldConfig[] = [
      {
        fieldGroupClassName: 'row',
        fieldGroup: [
          {
            key: 'firstName',
            type: 'input',
            className: 'col-md-6 col-sm-6 col-lg-6',
            templateOptions: {
              required: true,
              label: 'First Name',
            },
            validators: {
              validation: [
                CommonValidatorsMap.Required.validator,
              ],
            },
            validation: {
              messages: {
                required: CommonValidatorsMap.Required.message,
              },
            },
          },
          {
            key: 'middleName',
            type: 'input',
            className: 'col-md-6 col-sm-6 col-lg-6',
            templateOptions: {
              required: true,
              label: 'Middle Name',
            },
            validators: {
              validation: [
                CommonValidatorsMap.Required.validator,
              ],
            },
            validation: {
              messages: {
                required: CommonValidatorsMap.Required.message,
              },
            },
          },
          {
            key: 'lastName',
            type: 'input',
            className: 'col-md-12 col-sm-12 col-lg-12',
            templateOptions: {
              required: true,
              label: 'Last Name',
            },
            validators: {
              validation: [
                CommonValidatorsMap.Required.validator,
              ],
            },
            validation: {
              messages: {
                required: CommonValidatorsMap.Required.message,
              },
            },
          },
          {
            key: 'contactNumber',
            type: 'input',
            className: 'col-md-12 col-sm-12 col-lg-12',
            templateOptions: {
              required: true,
              label: 'Mobile Number',
              placeholder: 'Enter 10 digit mobile number',
              maxLength: 10,
            },
            validators: {
              validation: [
                CommonValidatorsMap.Required.validator,
                CommonValidatorsMap.OnlyNumbers.validator
              ]
            },
            validation: {
              messages: {
                required: CommonValidatorsMap.Required.message,
                contactNumber: (error, field) => this.setErrorMessage(field)
              }
            },
          },
          {
            key: 'email',
            type: 'input',
            className: 'col-md-12 col-sm-12 col-lg-12',
            templateOptions: {
              required: true,
              label: 'Email',
            },
            validators: {
              validation: [
                CommonValidatorsMap.Required.validator,
                CommonValidatorsMap.Email.validator
              ],
            },
            validation: {
              messages: {
                required: CommonValidatorsMap.Required.message,
                email: CommonValidatorsMap.Email.message
              },
            },
          }
        ]
      }
    ];
    return fields;
  }

  setErrorMessage(field?: FormlyFieldConfig): string {
    const me = this;
    let message = '';
    const length = 10;
    message = '\'Contact Number\' should be only ' + length + ' digit numeric value';
    return message;
  }
}
