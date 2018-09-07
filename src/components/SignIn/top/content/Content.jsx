import React from 'react';
import { Form, Icon, Input, Button, Checkbox, Tabs } from 'antd';
import { Link, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import { observer, inject } from 'mobx-react';

import style from './content.css';

const FormItem = Form.Item;
const { TabPane } = Tabs;

function Content() {
  return (
    <div className={style.content}>
      <Tabs defaultActiveKey="1" size="Large">
        <TabPane tab="账号登陆" key="1">
          <WrappedNormalLoginForm />
        </TabPane>
      </Tabs>
    </div>
  );
}

@inject('user')
@observer
class NormalLoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  handleSubmit = e => {
    e.preventDefault();
    const { form, user } = this.props;
    form.validateFields((err, values) => {
      if (!err) {
        console.log(values);
        user.fetchUser(values.userName, values.password);
      }
    });
  };

  render() {
    const { form, user } = this.props;
    const { getFieldDecorator } = form;
    // message.error('error');
    return user.status === 'signin' ? (
      <Redirect to="/" />
    ) : (
      <Form onSubmit={this.handleSubmit} className="login-form">
        <FormItem>
          {getFieldDecorator('userName', {
            rules: [{ required: true, message: '请输入用户名!' }],
          })(
            <Input
              prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
              placeholder="Username"
            />,
          )}
        </FormItem>
        <FormItem>
          {getFieldDecorator('password', {
            rules: [{ required: true, message: '请输入密码!' }],
          })(
            <Input
              prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
              type="password"
              placeholder="Password"
            />,
          )}
        </FormItem>
        <div className={style.remember}>
          <FormItem className="fuckform">
            {getFieldDecorator('remember', {
              valuePropName: 'checked',
              initialValue: true,
            })(<Checkbox>记住我</Checkbox>)}
            <Link to="/signin" className={style.signinFormForgot}>
              忘记密码?
            </Link>
          </FormItem>
        </div>

        <FormItem>
          <Button
            type="primary"
            htmlType="submit"
            className={style.signinFormButton}
          >
            登陆
          </Button>
        </FormItem>
      </Form>
    );
  }
}

const WrappedNormalLoginForm = Form.create()(NormalLoginForm);

NormalLoginForm.protoType = {
  form: PropTypes.object,
};

export default Content;
