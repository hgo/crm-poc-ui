import { Routes } from '@angular/router';

import { DashboardComponent } from '../../dashboard/dashboard.component';
import { SalesComponent } from '../../sales/sales.component';
import { AssetComponent } from 'app/asset/aset.component';
import { CcComponent } from 'app/cc/cc.component';

export const AdminLayoutRoutes: Routes = [
    { path: '', redirectTo: 'dashboard' },
    { path: 'dashboard', component: DashboardComponent },
    { path: 'sales', component: SalesComponent },
    { path: 'assets', component: AssetComponent },
    { path: 'cc', component: CcComponent },
    { path: 'log', component: SalesComponent },
];
