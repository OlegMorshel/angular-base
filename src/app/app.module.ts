import {NgModule, Provider} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PostFormComponent } from './post-form/post-form.component';
import { PostComponent } from './post/post.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {StyleDirective} from "./directives/style.directive";
import { IfnotDirective } from './directives/ifnot.directive';
import { PipesComponent } from './pipes/pipes.component';
import {MultByPipe} from "./pipes/mult-by.pipe";
import { FilterPipe } from './pipes/filter.pipe';
import {AppCounterService} from "./service/app-counter.service";
import {LocalCounterService} from "./service/local-counter.service";
import { FormsComponent } from './forms/forms.component';
import { SwitchComponent } from './switch/switch.component';
import { BackconnectionComponent } from './backconnection/backconnection.component';
import {HTTP_INTERCEPTORS, HttpClient, HttpClientModule} from "@angular/common/http";
import {AuthInterceptor} from "./auth/auth.interceptor";
import { RoutingComponent } from './routing/routing.component';
import { AboutComponent } from './routing/about/about.component';
import { AboutExtraComponent } from './routing/about-extra/about-extra.component';
import { HomeComponent } from './routing/home/home.component';
import { PostsComponent } from './routing/posts/posts.component';
import {PostNewComponent} from "./routing/post/post.component";

const INTERCEPTOR_PROVIDER : Provider = {
  provide: HTTP_INTERCEPTORS,
  useClass: AuthInterceptor,
  multi: true
}

@NgModule({
  declarations: [
    AppComponent,
    PostFormComponent,
    PostComponent,
    StyleDirective,
    IfnotDirective,
    PipesComponent,
    MultByPipe,
    FilterPipe,
    FormsComponent,
    SwitchComponent,
    BackconnectionComponent,
    RoutingComponent,
    AboutComponent,
    AboutExtraComponent,
    HomeComponent,
    PostsComponent,
    PostNewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [LocalCounterService, INTERCEPTOR_PROVIDER],
  bootstrap: [AppComponent]
})
export class AppModule { }
