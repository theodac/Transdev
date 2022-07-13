import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class BuyingService {

  constructor(private httpClient : HttpClient) { }

  getBuyingList() {
    return this.httpClient.get(environment.APP_URL + 'buying');
  }

  getBuying(id : number) {
    return this.httpClient.get(environment.APP_URL + 'buying/' + id);
  }

  putBuying(buying: any) {
    return this.httpClient.put(environment.APP_URL + 'buying', buying);
  }

  postBuying(buying: any) {
    return this.httpClient.post(environment.APP_URL + 'buying', buying);
  }
}
