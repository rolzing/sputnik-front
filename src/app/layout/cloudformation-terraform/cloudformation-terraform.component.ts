import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
	selector: 'app-cloudformation-terraform',
	templateUrl: './cloudformation-terraform.component.html'
})
export class CloudFormationTerraform implements OnInit {
	form: FormGroup;
  showTransformation: false;
  cloudFormationJson: any;

	constructor( fb: FormBuilder) {
		this.form = fb.group({
			file: ['', Validators.required]
		});
	}

	ngOnInit() {}

	 onImport(event) {
    var file = event.srcElement.files[0];
    if (file) {
        var reader = new FileReader();
        reader.readAsText(file, "UTF-8");
        reader.onload = (evt: any) => {
          this.cloudFormationJson =  JSON.parse(evt.target.result)
        }
        reader.onerror = function (evt) {
            console.log('error reading file');
        }
    }
  }

}