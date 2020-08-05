import { FormlyFieldConfig } from '@ngx-formly/core';
import { FormControl, ValidationErrors } from '@angular/forms';

export function getKeyError(key: any) {
  const error = {};
  error[key] = true;
  return error;
}

export const CommonValidatorsMap = {
  UniqueRequisitionType: {
    validator: (control: FormControl): ValidationErrors => {
      return { total: true };
    },
    message: (err, field: FormlyFieldConfig): string => {
      return `"${field.templateOptions.label}" should not be duplicated`;
    }
  },
  Required: {
    validator: (control: FormControl): ValidationErrors => {
      return (!control.value )  ? { required: true } : null;
    },
    message: (err, field: FormlyFieldConfig): string => {
      return `"${field.templateOptions.label}" should not be empty`;
    }
  },
  RequiredFloatAndNumbers: {
    validator: (control: FormControl, field: FormlyFieldConfig): ValidationErrors => {
      return !control.value || /(^0$)|^(?=.*\d)(?=.*[1-9]).{1,7}$/.test(control.value)
        ? null
        : getKeyError(field.key);
    },
    message: (err, field: FormlyFieldConfig): string => {
      return `"${field.templateOptions.label}"should not be empty`;
    }
  },
  RequiredLatLng: {
    validator: (control: FormControl, field: FormlyFieldConfig): ValidationErrors => {
      return !control.value || /([0-9.-]+).+?([0-9.-]+)/.test(control.value)
        ? null
        : getKeyError(field.key);
    },
    message: (err, field: FormlyFieldConfig): string => {
      return `"${field.templateOptions.label}"should not be empty`;
    }
  },
  MinHeadcountValue: {
    message: (err, field: FormlyFieldConfig): string => {
      return `"${field.templateOptions.label}" should be greater than or equal to ${field.templateOptions.min}`;
    }
  },
  MinValue: {
    message: (err, field: FormlyFieldConfig): string => {
      return `"${field.templateOptions.label}" should be greater than ${field.templateOptions.min}`;
    }
  },
  MaxValue: {
    message: (err, field: FormlyFieldConfig): string => {
      return `"${field.templateOptions.label}" should be less than or equal to ${field.templateOptions.max}`;
    }
  },
  MinLength: {
    message: (err, field: FormlyFieldConfig): string => {


      return `"${field.templateOptions.label}" should be at least ${field.templateOptions.minLength} characters long`;
    }
  },
  MaxLength: {
    message: (err, field: FormlyFieldConfig): string => {
      return `"${field.templateOptions.label}" should be maximum ${field.templateOptions.maxLength} characters long`;
    }
  },
  Email: {
    validator: (control: FormControl, field: FormlyFieldConfig): ValidationErrors => {
      return !control.value || /[\w-]+@([\w-]+\.)+[\w-]{2,}/.test(control.value)
        ? null
        : getKeyError(field.key);
    },
    message: (err, field: FormlyFieldConfig): string => {
      return `"${field.formControl.value}" is not a valid "${field.templateOptions.label}"`;
    }
  },
  Username: {
    validator: (control: FormControl, field: FormlyFieldConfig): ValidationErrors => {
      return !control.value || /^[a-zA-Z0-9-'.]+$/.test(control.value)
        ? null
        : getKeyError(field.key);
    },
    message: (err, field: FormlyFieldConfig): string => {
      return `"${field.formControl.value}" is not a valid ${field.templateOptions.label}`;
    }
  },
  OnlyText: {
    validator: (control: FormControl, field: FormlyFieldConfig): ValidationErrors => {
      return !control.value || /^[a-zA-Z-,]+(\s{0,1}[a-zA-Z-, ])*$/.test(control.value)
        ? null
        : getKeyError(field.key);
    },
    message: (err, field: FormlyFieldConfig): string => {
      return `"${field.templateOptions.label}" should be alphabetic`;
    }
  },
  OnlyChars: {
    validator: (control: FormControl, field: FormlyFieldConfig): ValidationErrors => {

      return !control.value || /^[a-zA-Z\s]{1}[a-zA-Z\s]*$/.test(control.value)
        ? null
        : getKeyError(field.key);
    },
    message: (err, field: FormlyFieldConfig): string => {
      return `"${field.templateOptions.label}" should be alphabetic`;
    }
  },
  OnlyCaps: {
    validator: (control: FormControl, field: FormlyFieldConfig): ValidationErrors => {

      return !control.value || /^[A-Z\s]{1}[A-Z\s]*$/.test(control.value)
        ? null
        : getKeyError(field.key);
    },
    message: (err, field: FormlyFieldConfig): string => {
      return `"${field.templateOptions.label}" should be alphabetes in Uppercase`;
    }
  },
  OnlyTextDash: {
    validator: (control: FormControl, field: FormlyFieldConfig): ValidationErrors => {
      return !control.value || /^[a-zA-Z]+[a-zA-Z-_\s]+$/ .test(control.value)
        ? null
        : getKeyError(field.key);
    },
    message: (err, field: FormlyFieldConfig): string => {
      return `"${field.templateOptions.label}" should be alphabetic or special chracters like - _`;
    }
  },
  OnlyTextSpcialchar: {
    validator: (control: FormControl, field: FormlyFieldConfig): ValidationErrors => {
      return !control.value || /^[a-zA-Z-\/()\s]+$/.test(control.value)
        ? null
        : getKeyError(field.key);
    },
    message: (err, field: FormlyFieldConfig): string => {
      return `"${field.templateOptions.label}" should be alphabetic or special chracters like - ( ) /`;
    }
  },
  OnlyNumbers: {
    validator: (control: FormControl, field: FormlyFieldConfig): ValidationErrors => {
      // return !control.value || /^[^\s][1-9]+[0-9]*$/.test(control.value)
      return !control.value || /^[1-9]+[0-9]*$/.test(control.value)
        ? null
        : getKeyError(field.key);
    },
    message: (err, field: FormlyFieldConfig): string => {
      return `"${field.templateOptions.label}" should be a valid number`;
    }
  },
  FloatsAndNumbers: {
    validator: (control: FormControl, field: FormlyFieldConfig): ValidationErrors => {
      // return !control.value || /^[^\s][1-9]+[0-9]*$/.test(control.value)
      return !control.value || /(^0$)|^(?=.*\d)(?=.*[1-9]).{1,7}$/.test(control.value)
        ? null
        : getKeyError(field.key);
    },

    message: (err, field: FormlyFieldConfig): string => {
      return `"${field.templateOptions.label}" should be a valid number`;
    }
  },
  Numbers: {
    validator: (control: FormControl, field: FormlyFieldConfig): ValidationErrors => {
      // return !control.value || /^[^\s][1-9]+[0-9]*$/.test(control.value)
      return !control.value || /(^0$)|(^[1-9]\d{0,6}[0-9]{5}\.[0-9]{5}$)/.test(control.value)
        ? null
        : getKeyError(field.key);
    },
    message: (err, field: FormlyFieldConfig): string => {
      return `"${field.templateOptions.label}" should be a valid number`;
    }
  },
  latLng: {
    validator: (control: FormControl, field: FormlyFieldConfig): ValidationErrors => {
      // return !control.value || /^[^\s][1-9]+[0-9]*$/.test(control.value)
      return !control.value || /([0-9.-]+).+?([0-9.-]+)/.test(control.value)
        ? null
        : getKeyError(field.key);
    },
    message: (err, field: FormlyFieldConfig): string => {
      return `"${field.templateOptions.label}" should be a valid number`;
    }
  },
  PostalCode: {
    validator: (control: FormControl, field: FormlyFieldConfig): ValidationErrors => {
      // return !control.value || /^[^\s][1-9]+[0-9]*$/.test(control.value)
      return !control.value || /^[0-9]*$/.test(control.value)
        ? null
        : getKeyError(field.key);
    },
    message: (err, field: FormlyFieldConfig): string => {
      return `"${field.templateOptions.label}" should be a valid number`;
    }
  },
  TextAccented: {
    validator: (control: FormControl, field: FormlyFieldConfig): ValidationErrors => {
      return !control.value || /^[a-zA-ZÀ-ÿ]+[a-zA-ZÀ-ÿ\s]*$/.test(control.value)
        ? null
        : getKeyError(field.key);
    },
    message: (err, field: FormlyFieldConfig): string => {
      return `"${field.templateOptions.label}" should be alphabetic`;
    }
  },
  TextAccentedSpcialchar: {
    validator: (control: FormControl, field: FormlyFieldConfig): ValidationErrors => {
      return !control.value || /^[^-\s][a-zA-ZÀ-ÿ'-_.\s]+$/.test(control.value)
        ? null
        : getKeyError(field.key);
    },
    message: (err, field: FormlyFieldConfig): string => {
      return `"${field.formControl.value}" is not valid ${field.templateOptions.label}`;
    }
  },
  TextNumbers: {
    validator: (control: FormControl, field: FormlyFieldConfig): ValidationErrors => {
      return !control.value || /^[a-zA-Z0-9]+[a-zA-Z0-9\s]*$/.test(control.value)
        ? null
        : getKeyError(field.key);
    },
    message: (err, field: FormlyFieldConfig): string => {
      return `"${field.templateOptions.label}" should be alphabetic or numberic`;
    }
  },
  TextNumbersDash: {
    validator: (control: FormControl, field: FormlyFieldConfig): ValidationErrors => {
      return !control.value || /^[a-zA-Z0-9-_]+[a-zA-Z0-9-_'.\s]+$/.test(control.value)
        ? null
        : getKeyError(field.key);
    },
    message: (err, field: FormlyFieldConfig): string => {
      return `"${field.templateOptions.label}" should be alphabetic, numberic or special characters like - _'.`;
    }
  },
  TextNumbersSpetialchar: {
    validator: (control: FormControl, field: FormlyFieldConfig): ValidationErrors => {
      return !control.value || /^[#.0-9a-zA-Z()\s,\/-_@]+$/.test(control.value)
        ? null
        : getKeyError(field.key);
    },
    message: (err, field: FormlyFieldConfig): string => {
      return `"${field.templateOptions.label}" should be alphabetic, numberic or special characters like # @ ( ) / - _ . ,`;
    }
  },

  TextAlphaNumeric: {
    validator: (control: FormControl, field: FormlyFieldConfig): ValidationErrors => {
      return !control.value || /^[0-9a-zA-Z\s,/-_]+$/.test(control.value)
        ? null
        : getKeyError(field.key);
    },
    message: (err, field: FormlyFieldConfig): string => {
      return `"${field.templateOptions.label}" should be alphanumeric like / - _ ,`;
    }
  },

  TextUnderscore: {
    validator: (control: FormControl, field: FormlyFieldConfig): ValidationErrors => {
      return !control.value || /[a-z A-Z_]+$/ .test(control.value)
        ? null
        : getKeyError(field.key);
    },
    message: (err, field: FormlyFieldConfig): string => {
      return `"${field.templateOptions.label}" should be alphabetic or special characters like _`;
    }
  },

  TextNumbersSpetialcharntsymbol: {
    validator: (control: FormControl, field: FormlyFieldConfig): ValidationErrors => {
      return !control.value || /^[a-zA-Z]+[a-zA-Z0-9-'.\s]+$/ .test(control.value)
        ? null
        : getKeyError(field.key);
    },
    message: (err, field: FormlyFieldConfig): string => {
      return `"${field.templateOptions.label}" should be alphabetic, numeric or special characters like  - . ' `;
    }
  },

  Json: {
    validator: (control: FormControl, field: FormlyFieldConfig): ValidationErrors => {
      if (control.value) {
        try {
          JSON.parse(control.value);
        } catch (e) {
          return getKeyError(field.key);
        }
      }
      return null;
    },
    message: (err, field: FormlyFieldConfig): string => {
      return `"${field.formControl.value}" is not a valid json data`;
    }
  },
  ContactNumber: {
    validator: (control: FormControl, field: FormlyFieldConfig): ValidationErrors => {
      if (field.model.countryCode && field.model.countryCode.mobileRegex) {
        const mobilePattern = new RegExp(field.model.countryCode.mobileRegex);
        return (!control.value || mobilePattern.test(field.model.countryCode.mobilePrefix + control.value)) ? null : { contactNumber: true };
      }
      return null;
    },
    message: (err, field: FormlyFieldConfig): string => {
      return `"${field.formControl.value}" is not a valid ${field.templateOptions.label}`;
    }
  },
  TextNumbersUnderscore: {
    validator: (control: FormControl, field: FormlyFieldConfig): ValidationErrors => {
      return !control.value || /^[A-Za-z0-9_]*$/.test(control.value)
        ? null
        : getKeyError(field.key);
    },
    message: (err, field: FormlyFieldConfig): string => {
      return `"${field.templateOptions.label}" should be alphabetic, numberic or special characters like _`;
    }
  },

};
