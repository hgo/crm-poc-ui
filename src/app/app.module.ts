import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app.routing';
import { ComponentsModule } from './components/components.module';
import { NgxSoapModule, NgxSoapService } from 'ngx-soap';
import { AppComponent } from './app.component';
import { StorageServiceModule } from 'ngx-webstorage-service';

import {
  AgmCoreModule
} from '@agm/core';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { CrmService } from './service/crm.service';
import { LocalStorageService } from './service/storage.service';

@NgModule({
  imports: [
    StorageServiceModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    ComponentsModule,
    RouterModule,
    AppRoutingModule,
    NgxSoapModule

  ],
  declarations: [
    AppComponent,
    AdminLayoutComponent,
  ],
  providers: [CrmService, NgxSoapService, LocalStorageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
