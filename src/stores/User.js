import { observable, action, configure, runInAction } from 'mobx';
import axios from 'axios';

configure({ enforceActions: 'observed' });

class User {
  @observable
  id = null;

  @observable
  name = null;

  @observable
  signinName = null;

  @observable
  theme = null;

  @observable
  status = null;

  @action
  fetchUser(userName, password) {
    axios
      .post('/signin', {
        userName,
        password,
      })
      .then(response => {
        console.log(response);
        if (response.data.status === 'success') {
          const { id, name, signinName, theme } = response.data.data;
          runInAction(() => {
            if (!this.id) {
              this.id = 0;
            }
            this.id = id;
            this.name = name;
            this.signinName = signinName;
            this.theme = theme;
            this.status = 'signin';
          });
        }
      });
  }
}

export default User;
