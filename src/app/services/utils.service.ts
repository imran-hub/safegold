import {Injectable} from '@angular/core';
import {MatSnackBar} from '@angular/material';

@Injectable({
  providedIn: 'root'
})
export class UtilityService {

  constructor(private toast: MatSnackBar) {
  }

  openSnackbar(message: string, action: any) {
    const me = this;
    const toast = me.toast.open(message, action, {
      duration: 2000,
      horizontalPosition: 'center',
      verticalPosition: 'bottom'
    });
    return toast;
  }
}
