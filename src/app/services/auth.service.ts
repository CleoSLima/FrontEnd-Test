import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { iFluxo } from '../fluxos'
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class AuthService {

  private url: string = "https://homolog-api.rabbot.co/api/saas/Fluxo/CarregaFluxos"

  constructor(private http: HttpClient) { }
  
  getFluxos(idEmpresa):Promise<Response>{
    const myHeaders = new Headers({
          'Content-Type': 'application/json',
          'Authorization': 'ZGV2dGVzdGUtcmFiYm90QG1haWxpbmF0b3IuY29tOmRldnRlc3RlLXJhYmJvdEAxMjM0'
      });
      
      return fetch(this.url+"?idEmpresa="+idEmpresa, {
        method: 'GET',
        headers: myHeaders,
      })    
  }
}