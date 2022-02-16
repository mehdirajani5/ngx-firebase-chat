import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChatComponent } from './chat/chat.component';
import { ContactListComponent } from './contact-list/contact-list.component';
import { EmployeeModule } from './employee/employee.module';

import { environment } from '../environments/environment';
import { AngularFireMessagingModule } from '@angular/fire/messaging';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
@NgModule({
  declarations: [
    AppComponent,
    ChatComponent,
    ContactListComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    EmployeeModule,

    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
    AngularFireDatabaseModule,
    AngularFireMessagingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
