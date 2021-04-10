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
        ]

    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
