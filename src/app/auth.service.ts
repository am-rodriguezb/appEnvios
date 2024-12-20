import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  //metodo que valida las credenciales y retorna true o false
  authenticate(username:string, password:string):boolean{
    return username==='username' && password==='password';//nombre de la variable a validar
  }
  constructor() { }
}
