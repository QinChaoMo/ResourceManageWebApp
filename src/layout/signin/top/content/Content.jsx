import React from 'react';
import { Form, Icon, Input, Button, Checkbox, Tabs } from 'antd';
import PropTypes from 'prop-types';
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
        <TabPane tab="手机登陆" key="2">
          还没做...orz
        </TabPane>
      </Tabs>
    </div>
  );
}

class NormalLoginForm extends React.Component {
  handleSubmit = e => {
    e.preventDefault();
    const { form } = this.props;
    form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
      }
    });
  };

  render() {
    const { form } = this.props;
    const { getFieldDecorator } = form;
    return (
      <Form onSubmit={this.handleSubmit} className="login-form">
        <FormItem>
          {getFieldDecorator('userName', {
            rules: [{ required: true, message: 'Please input your username!' }],
          })(
            <Input
              prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
              placeholder="Username"
            />,
          )}
        </FormItem>
        <FormItem>
          {getFieldDecorator('password', {
            rules: [{ required: true, message: 'Please input your Password!' }],
          })(
            <Input
              prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
              type="password"
              placeholder="Password"
            />,
          )}
        </FormItem>
        <div className={style.remember}>
          <FormItem>
            {getFieldDecorator('remember', {
              valuePropName: 'checked',
              initialValue: true,
            })(<Checkbox>记住我</Checkbox>)}
            <a className="login-form-forgot" href="/signin">
              忘记密码?
            </a>
          </FormItem>
        </div>

        <FormItem>
          <Button
            type="primary"
            htmlType="submit"
            className="login-form-button"
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
