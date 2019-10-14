import React from 'react'
import { startSetUser } from '../../actions/userActions';
import { connect } from 'react-redux'
import { Link, Redirect } from 'react-router-dom'

import { Form, Icon, Input, Button } from 'antd';


class LoginUser extends React.Component {

    handleSubmit = e => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                this.props.dispatch(startSetUser(values))
                this.props.form.resetFields()


            }
        });

    };


    render() {
        const { getFieldDecorator } = this.props.form;
        if (this.props.user._id) {
            return <Redirect to='/products' />
        }


        return (
            <div id="register">
                <Form onSubmit={this.handleSubmit} className="login-form">

                    <Form.Item>
                        {getFieldDecorator('email', {
                            rules: [{ required: true, message: 'Please input your email!' }],
                        })(
                            <Input
                                prefix={<Icon type="mail" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                placeholder="Email"
                            />,
                        )}
                    </Form.Item>

                    <Form.Item>
                        {getFieldDecorator('password', {
                            rules: [{ required: true, message: 'Please input your Password!' }],
                        })(
                            <Input
                                prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                type="password"
                                placeholder="Password"
                            />,
                        )}
                    </Form.Item>

                    <Form.Item>
                        <Button type="primary" htmlType="submit" className="login-form-button">
                            Login
          </Button>
                        Or <Link to='/register'>Register Now</Link>
                    </Form.Item>
                </Form>
            </div>
        );
    }
}
const mapStateToProps = (state) => {
    return {
        user: state.user
    }
}

const UserLogin = Form.create({ name: 'normal_login' })(LoginUser);
export default connect(mapStateToProps)(UserLogin)
