import Cookies from "js-cookie";
class Auth {
  constructor() {
    this.authenticated = false;
  }

  isAuthenticated() {
    const loggedIn = Cookies.get("loggedIn");
    return !!loggedIn;
  }
}

export default new Auth();
