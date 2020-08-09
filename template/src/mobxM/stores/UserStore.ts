import { observable } from "mobx";

export interface UserStoreInterface {
  hello: string;
}
export default class UserStore implements UserStoreInterface {
  @observable hello = "Hello World";
}
