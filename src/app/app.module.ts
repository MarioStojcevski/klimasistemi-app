import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NavModule } from './nav/nav.module';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { MaterialModule } from './material.module';
import { AirConditionerModule } from './air-conditioner/air-conditioner.module';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { NgxSliderModule } from '@angular-slider/ngx-slider';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core'; 
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { FacebookModule } from 'ngx-facebook';

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AirConditionerModule,
    HttpClientModule,
    NgbModule,
    NavModule,
    MaterialModule,
    NgxSliderModule,
    AppRoutingModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      },
      defaultLanguage: 'mk'
    }),
    FacebookModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
