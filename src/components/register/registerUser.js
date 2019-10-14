import React from 'react'
import axios from 'axios'
import { Link, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'

import { Form, Icon, Input, Button, Select } from 'antd';

const { Option } = Select;

class RegisterUser extends React.Component {
    state = {
        value: 'customer'
    }
    handleSubmit = e => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                axios.post('http://localhost:3005/register', { ...values, role: this.state.value })
                    .then(response => {
                        if (response.data._id) {
                            this.props.form.resetFields()
                            this.props.history.push('/login')

                        }
                        else {
                            window.alert('something went wrong')
                        }
                    })
                    .catch(err => {
                        console.log(err)
                    })


            }
        });

    };

    handleChange = (value) => {
        this.setState({ value })


    }

    render() {
        const { getFieldDecorator } = this.props.form;
        if (this.props.user._id) {
            return <Redirect to='/products' />
        }

        return (
            <div id="register">
                <Form onSubmit={this.handleSubmit} className="login-form">
                    <Form.Item>
                        {getFieldDecorator('username', {
                            rules: [{ required: true, message: 'Please input your username!' }],
                        })(
                            <Input
                                prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                placeholder="Username"
                            />,
                        )}
                    </Form.Item>
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
                        {getFieldDecorator('mobile', {
                            rules: [{ required: true, message: 'Please input your mobile number!' }],
                        })(
                            <Input
                                prefix={<Icon type="mail" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                placeholder="Number"
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
                        <Select defaultValue="customer" style={{ width: 120 }} onChange={this.handleChange}>
                            <Option value="customer">customer</Option>
                            <Option value="seller">seller</Option>
                        </Select>
                    </Form.Item>
                    <Form.Item>
                        <Button type="primary" htmlType="submit" className="login-form-button">
                            Register
          </Button>
                        Or <Link to='/login'>Login now</Link>
                    </Form.Item>
                </Form>
            </div>
        );
    }
}

const UserRegister = Form.create({ name: 'normal_login' })(RegisterUser);
const mapStateToProps = (state) => {
    return {
        user: state.user
    }
}
export default connect(mapStateToProps)(UserRegister)
