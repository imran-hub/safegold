import {AfterViewInit, ChangeDetectorRef, Component, OnInit, ViewEncapsulation} from '@angular/core';
import {FieldType} from '@ngx-formly/core';

@Component({
  selector: 'app-formly-value',
  templateUrl: './value.component.html',
  styleUrls: ['./value.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class ValueFormlyComponent extends FieldType implements OnInit, AfterViewInit {
  constructor(private cd: ChangeDetectorRef) {
    super();
  }

  get value(): string {
    if (this.to.valueField && this.formControl.value) {
      return this.to.valueField(this.formControl.value);
    }
    return this.to.value;
  }

  get hint(): string {
    if (this.to && this.to.hint) {
      return this.to.hint;
    }
  }

  ngAfterViewInit(): void {}

  ngOnInit() {
    this.formControl.valueChanges.subscribe(() => {
      this.cd.detectChanges();
    });
  }
}
