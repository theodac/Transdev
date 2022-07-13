import { Injectable } from '@angular/core';
import {environment} from "../../../environments/environment";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class HumanRessourcesService {

  constructor(private httpClient: HttpClient) {}

  getHumanRessourcesList() {
    return this.httpClient.get(environment.APP_URL + 'human_ressources');
  }

  getHumanRessources(id: number) {
    return this.httpClient.get(environment.APP_URL + 'human_ressources/' + id);
  }

  putHumanRessources(humanRessources: any, id: number) {
    return this.httpClient.put(environment.APP_URL + 'human_ressources/' + id, humanRessources);
  }

  postHumanRessources(humanRessources: any) {
    return this.httpClient.post(environment.APP_URL + 'human_ressources', humanRessources);
  }
}
