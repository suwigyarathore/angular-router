import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { selector } from 'rxjs/operator/publish';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor (private router: Router,
    private authService: AuthService) { }

  ngOnInit () {
  }

  onLoadServer (id: number) {
    this.router.navigate(['/servers', id, 'edit'], { queryParams: { allowEdit: 1 }, fragment: 'loading' });
  }

  logIn () {
    this.authService.logIn();
  }

  logOut () {
    this.authService.logOut();
  }

}
