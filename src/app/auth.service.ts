export class AuthService {
  loggedIn = false;

  logIn () {
    this.loggedIn = true;
  }

  logOut () {
    this.loggedIn = false;
  }

  isAuthenticated () {
    return new Promise((resolve, reject) => setTimeout(() => resolve(this.loggedIn), 800))
  }
}
