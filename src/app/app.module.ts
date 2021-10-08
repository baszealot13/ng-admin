import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import { AuthenticationComponent } from './authentication/authentication.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http'
import { InterceptorInterceptor } from './interceptor.interceptor';
import { UnathenticationComponent } from './authentication/unathentication.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { UserComponent } from './user-module/user/user.component';
import { RoleComponent } from './user-module/role/role.component';

@NgModule({
    declarations: [
        AppComponent,
        HomepageComponent,
        AuthenticationComponent,
        UnathenticationComponent,
        SidebarComponent,
        NavbarComponent,
        UserComponent,
        RoleComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule,
        HttpClientModule
    ],
    providers: [{
        provide: HTTP_INTERCEPTORS,
        useClass: InterceptorInterceptor,
        multi: true
    }],
    bootstrap: [AppComponent]
})
export class AppModule { }
