import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';


@Component({
  selector: 'app-ubicaciones',
  templateUrl: './ubicaciones.page.html',
  styleUrls: ['./ubicaciones.page.scss'],
})
export class UbicacionesPage implements OnInit {

  constructor(
    private router: Router,
    private authService: AuthService) { }
    
  ngOnInit() {
  }

  cerrarSesion() {
    this.authService.logout();
    this.router.navigate(['/login']);
  }

}
