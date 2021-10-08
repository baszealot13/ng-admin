import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthenticationComponent } from './authentication/authentication.component';
import { UnathenticationComponent } from './authentication/unathentication.component';
import { HomepageComponent } from './homepage/homepage.component';
import { RoleComponent } from './user-module/role/role.component';
import { UserComponent } from './user-module/user/user.component';

const routes: Routes = [
    {
        path: 'user',
        component: UserComponent
    }, {
        path: 'role',
        component: RoleComponent
    }, {
        path: '',
        component: HomepageComponent
    }, {
        path: 'login',
        component: AuthenticationComponent
    }, {
        path: 'logout',
        component: UnathenticationComponent
    }, {
        path: '**',
        pathMatch: 'full',
        redirectTo: ''
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
    exports: [RouterModule]
})
export class AppRoutingModule { }
