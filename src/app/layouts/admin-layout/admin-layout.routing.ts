import { Routes } from '@angular/router';
import { SalesComponent } from '../../sales/sales.component';
import { AssetComponent } from 'app/asset/asset.component';

export const AdminLayoutRoutes: Routes = [
    { path: '', redirectTo: 'sales' },
    { path: 'sales', component: SalesComponent },
    { path: 'assets', component: AssetComponent },
];
