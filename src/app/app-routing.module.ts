import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminLayoutComponent } from './layout/admin-layout/admin-layout.component';

const routes: Routes = [
    { path: '', loadChildren: () => import('src/app/modules/auth/auth.module').then(m => m.AuthModule) },
    {
        path: '', component: AdminLayoutComponent,
        children: [
            { path: 'dashboard', loadChildren: () => import('src/app/modules/dashboard/dashboard.module').then(m => m.DashboardModule) },
            { path: 'blank', loadChildren: () => import('src/app/modules/blank/blank.module').then(m => m.BlankModule) },
            { path: 'profile', loadChildren: () => import('src/app/modules/profile/profile.module').then(m => m.ProfileModule) },
            { path: 'settings', loadChildren: () => import('src/app/modules/settings/settings.module').then(m => m.SettingsModule) },
            { path: 'customers', loadChildren: () => import('src/app/modules/customers/customers.module').then(m => m.CustomersModule) },
            { path: 'loans', loadChildren: () => import('src/app/modules/loans/loans.module').then(m => m.LoansModule) },
            { path: 'payments', loadChildren: () => import('src/app/modules/payments/payments.module').then(m => m.PaymentsModule) },
            { path: 'invoices', loadChildren: () => import('src/app/modules/invoices/invoices.module').then(m => m.InvoicesModule) },
        ]

    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
