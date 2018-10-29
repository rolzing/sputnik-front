import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { BackendClass } from '../../services/backend.service';
import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";



@Component({
  selector: 'app-cloudformation-terraform',
  templateUrl: './cloudformation-terraform.component.html'
})
export class CloudFormationTerraform implements OnInit {
  form: FormGroup;
  showTransformation: false;
  cloudFormationJson: any;

  constructor(fb: FormBuilder,
    private BackendClass: BackendClass,
    private http: HttpClient) {
    this.form = fb.group({
      file: ['', Validators.required]
    });
  }

  ngOnInit() { }

  onImport(event) {
    var file = event.srcElement.files[0];
    if (file) {
      var reader = new FileReader();
      reader.readAsText(file, "UTF-8");
      reader.onload = (evt: any) => {
        this.form.controls['file'].setValue(JSON.parse(evt.target.result));
      }
      reader.onerror = function (evt) {
        console.log('error reading file');
      }
    }
  }

  sendToBackend() {
    //this.BackendClass.CloudFormationPost(this.form.value)
    this.http.post('192.168.1.0/cf', this.form.value).subscribe((response: any) => {
      console.log(response.status)
    })
  }
  //TODO: Add services and change boolean to show result in page

}
