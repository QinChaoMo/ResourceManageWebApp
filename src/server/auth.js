import axios from 'axios';

// Query.user(id).then()

class Query {
  static user(id) {
    if (!id) throw new Error('user id is null.');
    return axios.get(`/api/v1/query/user/${id}`);
  }
}

class Auth {
  static userBy(userName, password) {
    if (!userName || !password) throw new Error('error : username or password');
    return axios.post('/api/v1/signin', { userName, password });
  }
}

export { Query, Auth };
