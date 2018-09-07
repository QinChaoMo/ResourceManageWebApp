import * as Mock from 'mockjs';

const timeout = '200-600';

Mock.setup({
  timeout,
});

export function mockSignin() {
  const signinResult = {
    status: 'success',
    data: {
      id: Mock.Random.natural(),
      name: Mock.Random.cname(),
      signinName: Mock.Random.string('lower', 2, 4),
      theme: 'dark',
      language: 'cn',
    },
  };

  function returnFnc(option) {
    console.log(option);
    const { body } = option;
    const params = JSON.parse(body);
    return params.userName === 'admin' && params.password === 'admin'
      ? signinResult
      : { status: 'error', data: 'error' };
  }

  Mock.mock('/signin', 'post', returnFnc);
}

export class MockAuth {
  constructor(setup = { timeout }, data = null) {
    this.setup = setup;
    this.data = {
      id: Mock.Random.natural(),
      name: Mock.Random.cname(),
      signinName: Mock.Random.string('lower', 2, 4),
      theme: 'dark',
      language: 'cn',
    };
    if (data) this.data = data;
  }

  isSignIn(url, id, status = true) {
    Mock.mock(`${url}?id=${id}`, 'get', {
      status: 'success',
      data: Object.assign({}, this.data, status),
    });
  }
}
