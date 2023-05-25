import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Group} from "../model/Group";
import {environnement} from "../environnements/Environnement";
import {BehaviorSubject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AdminPanelService {


  constructor(private http: HttpClient) { }




}
