import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OperationsComponent } from './components/operations/operations.component';
import { LoginComponent } from './components/login/login.component';
import { PersonDetailComponent } from './components/person-detail/person-detail.component';


const routes: Routes = [
    {
        path: "",
        redirectTo: "login",
        pathMatch: "full"
    },
    {
        path: "login",
        component: LoginComponent
    },
    {
        path: "me/:id",
        component: PersonDetailComponent
    },
    {
        path: "operations/:id",
        component: OperationsComponent
    }
];


@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule { }
export const routedComponents = [LoginComponent, PersonDetailComponent, OperationsComponent];
