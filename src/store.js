import { observable, computed } from 'mobx';

class AppState {
  @observable
  user = null;

  @computed
  get getUser() {
    return this.user;
  }
}

export default AppState;
