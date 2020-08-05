import { BrowserModule, Title } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './modules/material/material.module';
import { HttpClientModule } from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { LoginComponent } from './pages/user/login/login.component';
import { SignUpComponent } from './pages/user/sign-up/sign-up.component';
import {MatButtonModule, MatCheckboxModule, MatFormFieldModule, MatIconModule, MatInputModule, MatRadioModule, MatDialogModule} from '@angular/material';
import { FormlyModule } from '@ngx-formly/core';
import { FormlyMaterialModule } from '@ngx-formly/material';
import { HeaderComponent } from './pages/layout/header/header.component';
import { FooterComponent } from './pages/layout/footer/footer.component';
import { LayoutComponent } from './pages/layout/layout.component';
import { LayoutModule } from './pages/layout/layout.module';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import {ValueFormlyComponent} from './pages/formly/value/value.component';
import {ValueFormlyComponentModule} from './pages/formly/value/value.module';
import { BlogComponent } from './pages/layout/content/blog/blog.component';
import { AboutComponent } from './pages/layout/content/about/about.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignUpComponent,
    HeaderComponent,
    FooterComponent,
    LayoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ReactiveFormsModule,
    MaterialModule,
    LayoutModule,
    MatFormFieldModule,
    MatInputModule,
    FormlyModule.forRoot(),
    FormlyMaterialModule,
    MatButtonModule,
    MatIconModule,
    MatRadioModule,
    FormsModule,
    ValueFormlyComponentModule,
    MatCheckboxModule,
    MatDialogModule,
  ],
  entryComponents: [LoginComponent, SignUpComponent],
  providers: [Title],
  bootstrap: [AppComponent]
})
export class AppModule { }
