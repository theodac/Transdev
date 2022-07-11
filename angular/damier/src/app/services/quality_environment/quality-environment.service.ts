import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class QualityEnvironmentService {

  constructor(private httpClient: HttpClient) {}

  getQualityEnvironmentList() {
    return this.httpClient.get(environment.APP_URL + 'quality_environment');
  }

  getQualityEnvironment(id: number) {
    return this.httpClient.get(environment.APP_URL + 'quality_environment/' + id);
  }

  putQualityEnvironment(qualityEnvironment: any, id: number) {
    return this.httpClient.put(environment.APP_URL + 'quality_environment/' + id, qualityEnvironment);
  }

  postQualityEnvironment(qualityEnvironment: any) {
    return this.httpClient.post(environment.APP_URL + 'quality_environment', qualityEnvironment);
  }
}
