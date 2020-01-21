import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminLayoutRoutes } from './admin-layout.routing';
import { SalesComponent } from '../../sales/sales.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import {
  MatButtonModule,
  MatInputModule,
  MatRippleModule,
  MatFormFieldModule,
  MatTooltipModule,
  MatSelectModule,
  MatStepperModule,
  MatIconModule,
  MatCardModule,
  MatGridListModule,
  MatSnackBarModule,
  MatExpansionModule,
  MatProgressSpinnerModule,
  MatDialogModule
} from '@angular/material';
import { NumberDirective } from 'directives/numbers-only.directive';
import { GlobalService } from 'app/global/global';
import { LoadingComponent } from 'app/components/loading/loading.component';
import { AssetComponent } from 'app/asset/asset.component';
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AdminLayoutRoutes),
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatRippleModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatTooltipModule,
    MatStepperModule,
    MatIconModule,
    MatCardModule,
    MatGridListModule,
    MatSnackBarModule,
    MatExpansionModule,
    FlexLayoutModule,
    MatProgressSpinnerModule,
    MatDialogModule
  ],
  declarations: [
    SalesComponent,
    AssetComponent,
    NumberDirective,
    LoadingComponent
  ],
  providers: [GlobalService],
  entryComponents: [LoadingComponent]
})

export class AdminLayoutModule { }
