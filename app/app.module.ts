import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppRoutingModule, routedComponents } from './app-routing.module';

import { AppComponent } from './components/app/app.component';
import { AccountsComponent } from './components/accounts/accounts.component';
import { LoginComponent } from './components/login/login.component';
import { OperationDetailComponent } from './components/operation-detail/operation-detail.component';
import { OperationsComponent } from './components/operations/operations.component';
import { PersonDetailComponent } from './components/person-detail/person-detail.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';

import { EventService } from './shared/services/event.service';
import { PersonService } from './shared/services/person.service';
import { AccountService } from './shared/services/account.service';


@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        AppRoutingModule,
        HttpModule
    ],
    declarations: [
        AppComponent,
        AccountsComponent,
        LoginComponent,
        OperationsComponent,
        OperationDetailComponent,
        PersonDetailComponent,
        ToolbarComponent
    ],
    providers: [
        EventService,
        PersonService,
        AccountService
    ],
    bootstrap: [AppComponent]
})

export class AppModule { }
