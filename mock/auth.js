import * as Mock from 'mockjs';

export default function mockSignin() {
  Mock.setup({
    timeout: '200-600',
  });

  const signinResult = {
    status: 'success',
    data: {
      id: Mock.Random.natural(),
      name: Mock.Random.cname(),
      signinName: Mock.Random.string('lower', 2, 5),
      theme: 'dark',
      language: 'cn',
    },
  };

  function returnFnc(option) {
    console.log(option);
    const { body } = option;
    const params = JSON.parse(body);
    return params.name === 'admin' && params.password === 'admin'
      ? signinResult
      : {
        status: 'error',
        data: {
          userName: {
            errors: [
              {
                message: '用户名!',
                field: 'userName',
              },
            ],
          },
          password: {
            errors: [
              {
                message: '密码!',
                field: 'password',
              },
            ],
          },
        },
      };
  }

  Mock.mock('/signin', 'post', returnFnc);
}
