import { TestBed } from '@angular/core/testing';
import { AuthService } from './auth.service';

describe('AuthService', () => {
  let service: AuthService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthService);
  });

  it('deberia crear el servicio correctamente', () => {
    expect(service).toBeTruthy();
  });
  
  //1.- validando la creacion del servicio
  it ('Deberia devolver un true para credenciales validas', ()=> {
    expect(service.authenticate('usuario','password')).toBeTrue();

  });
  
  it ('Deberia devolver un true para credenciales invalidas', ()=> {
    expect(service.authenticate('usuario','password12')).toBeFalse();

  });
});
