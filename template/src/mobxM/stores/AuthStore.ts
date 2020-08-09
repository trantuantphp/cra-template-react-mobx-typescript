import { observable, action } from "mobx";
import { AUTH_LOGGED_IN, AUTH_LOGGED_OUT } from "helpers/constants";

export interface AuthStoreInterface {
  auth_status: string;
}

class AuthStore implements AuthStoreInterface {
  @observable auth_status = AUTH_LOGGED_OUT;

  constructor() {
    console.log("AuthStore: " + this.auth_status);
  }

  @action login() {
    this.auth_status = AUTH_LOGGED_IN;
    return this.auth_status;
  }
}

export default AuthStore;
