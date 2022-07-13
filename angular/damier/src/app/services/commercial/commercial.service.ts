import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class CommercialService {

  constructor(private httpClient: HttpClient) {
  }

  getCommercialList() {
    return this.httpClient.get(environment.APP_URL + '/commercial');
  }

  getCommercial(id: number) {
    return this.httpClient.get(environment.APP_URL + '/commercial/' + id);
  }

  putCommercial(commercial: any) {
    return this.httpClient.put(environment.APP_URL + '/commercial', commercial);
  }

  postCommercial(commercial: any) {
    return this.httpClient.post(environment.APP_URL + '/commercial', commercial);
  }
}
