import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { ReactiveFormsModule } from "@angular/forms";

import {CloudFormationTerraform} from './cloudformation-terraform.component';
import { CloudFormationTerraformRoutingModule } from './cloudformation-terraform-routing.module'
import { BackendClass } from '../../services/backend.service';

@NgModule({
    imports: [
        CommonModule,
        TranslateModule,
        CloudFormationTerraformRoutingModule,
        NgbDropdownModule.forRoot(),
        ReactiveFormsModule
    ],
    declarations: [CloudFormationTerraform],
    providers: [BackendClass]
})
export class LayoutModule {}
