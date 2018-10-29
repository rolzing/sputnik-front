import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';


@Injectable()
export class BackendClass {

    url: string;
    
    constructor(private http: HttpClient) {
        this.url = 'http://54.193.81.209:8080';
    }

    CloudFormationPost(awsJson: any) {
        this.http.post(this.url +'/cf', awsJson).subscribe((response:any) =>{
            console.log(response.status)
        })
    }

}