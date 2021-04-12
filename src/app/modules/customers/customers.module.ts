import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomersRoutingModule } from './customers-routing.module';
import { CustomersComponent } from './pages/customers/customers.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
    declarations: [
        CustomersComponent
    ],
    imports: [
        CommonModule,
        CustomersRoutingModule,
        SharedModule
    ]
})
export class CustomersModule { }
