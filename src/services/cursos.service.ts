import { API_CONFIG } from '../config/api.config';
import { CursoDTO } from './../models/curso';
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";


@Injectable()
export class CursoService{


  constructor(public http:HttpClient){

  }

  findAll(){
    return this.http.get<CursoDTO[]>(`${API_CONFIG.baseUrl}/cursos`);
  }

}
