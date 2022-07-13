import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class TechnicalService {

  constructor(private httpClient: HttpClient) {}

  getTechnicalList() {
    return this.httpClient.get(environment.APP_URL + 'technical');
  }

  getTechnical(id: number) {
    return this.httpClient.get(environment.APP_URL + 'technical/' + id);
  }

  putTechnical(technical: any, id: number) {
    return this.httpClient.put(environment.APP_URL + 'technical/' + id, technical);
  }

  postTechnical(technical: any) {
    return this.httpClient.post(environment.APP_URL + 'technical', technical);
  }
}
