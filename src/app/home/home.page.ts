import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  usuario: any = {};
  userData: any = null;

  constructor(
    private router: Router,
    private authService: AuthService
  ) {}

  irACotizar() {
    this.router.navigate(['/quote']);
  }

  ngOnInit() {
    const userData = localStorage.getItem('currentUser');
    if (userData) {
      this.userData = JSON.parse(userData);
      this.usuario = {
        nombre: this.userData.name,
        username: this.userData.username,
        email: this.userData.email,
        role: this.userData.role
      };
    }
  }

  editarPerfil() {
    // Implementar lógica para ingresar envíos
    console.log('Ingresar envíos clicked');
  }

  verEstadisticas() {
    // Implementar lógica para pedir retiro a domicilio
    console.log('Pedir retiro a domicilio clicked');
  }

  cerrarSesion() {
    this.authService.logout();
    this.router.navigate(['/login']);
  }
}