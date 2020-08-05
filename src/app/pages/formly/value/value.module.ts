import { FormlyModule } from '@ngx-formly/core';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ValueFormlyComponent } from './value.component';

// MODIFY
const formlyFieldMap = [
  {
    name: 'value',
    component: ValueFormlyComponent
  }
];

const components = [
  ValueFormlyComponent
];

// Module Dependancy
const dependencies = [
  FormsModule,
  ReactiveFormsModule,
  CommonModule,
];


// DO NOT CHANGE
const modules = [dependencies];

@NgModule({
  declarations: components,
  entryComponents: components,
  imports: [
    modules,
    FormlyModule.forRoot({
      types: formlyFieldMap
    })
  ],
  exports: [modules, components]
})
export class ValueFormlyComponentModule { } // MODIFY


