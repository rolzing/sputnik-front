import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CloudFormationTerraform } from './cloudformation-terraform.component';

const routes: Routes = [
    {
        path: '',
        component: CloudFormationTerraform
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class CloudFormationTerraformRoutingModule {}
