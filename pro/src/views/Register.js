import React, { Component } from 'react'
import com from './L_Com.module.css'
import { NavLink } from 'react-router-dom'
import * as api from '../api/getInfo'
import { Form, Input, Checkbox, Button } from 'antd';
import { message} from 'antd';
import 'antd/dist/antd.css'

class RegistrationForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      phoneMsg: "",
      name1:false,
      num1:false
    }
  }
  state = {
    confirmDirty: false,
    autoCompleteResult: [],
  };
//用户名判断
  name(){
    var nameDc=document.getElementById("name")
    if (this.props.form.getFieldValue("nickname")==undefined || this.props.form.getFieldValue("nickname")=="") {
      nameDc.style.display = "block";
      nameDc.innerText = "请输入用户名!";
      nameDc.style.color="red"
    } else {
      api.getname({ uname: this.props.form.getFieldValue("nickname") }).then((data) => {
          nameDc.innerText = data.data.msg;
          nameDc.style.display = "block";
          if(data.data.code==203){
            nameDc.style.color="red"
          }else{
            nameDc.style.color="green"
            this.state.name1=true
          }
      })
    }
  }
  //手机输入框判断
  phone() {
    var phoneDc=document.getElementById("num")
    if (this.props.form.getFieldValue("phone")==undefined || this.props.form.getFieldValue("phone")=="") {
      phoneDc.style.display = "block";
      phoneDc.style.color = "red";
      phoneDc.innerText = "请输入手机号!";
    } else if(!(/^[1]([3-9])[0-9]{9}$/.test(this.props.form.getFieldValue("phone")))){
      phoneDc.innerText = "请输入正确的手机号!";
      phoneDc.style.color = "red";
      phoneDc.style.display = "block";
    }else{
      api.getphone({ unum: this.props.form.getFieldValue("phone") }).then((data) => {
        this.setState({ phoneMsg: data.data.msg })
          phoneDc.innerText = data.data.msg;
          phoneDc.style.display = "block";
          if(data.data.code==203){
            phoneDc.style.color = "red"
          }else{
            phoneDc.style.color = "green"
            this.state.name1=true
          }
      })      
    }
  }

  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFieldsAndScroll((err, values) => {
      console.log(this.state.name1,this.state.num1)
      if (!err && this.state.name1 && this.state.num1 ) {
        if(values.agreement==true){
          var str={
            uname:values.nickname,  
            unum:values.phone,
            upwd:values.password
          }
          api.getregister(str).then((data)=>{
            if(data.data.code==400){
              message.warning("注册失败");
            }else{
              message.success("注册成功")
            }
          })
        }else{
          message.warning("请仔细阅读豆果协议");
        }
      }else{
        message.warning("请认真填写");

      }
    });
  };
  handleConfirmBlur = e => {
    const { value } = e.target;
    this.setState({ confirmDirty: this.state.confirmDirty || !!value });
  };

  compareToFirstPassword = (rule, value, callback) => {
    const { form } = this.props;
    if (value && value !== form.getFieldValue('password')) {
      callback('两次密码不同!');
    } else {
      callback();
    }
  };

  validateToNextPassword = (rule, value, callback) => {
    const { form } = this.props;
    if (value && this.state.confirmDirty) {
      form.validateFields(['confirm'], { force: true });
    }
    callback();
  };
  render() {
    const { getFieldDecorator } = this.props.form;
    
    const formItemLayout = {
      labelCol: {
        xs: { span: 20 },
        sm: { span: 7 },
      },
      wrapperCol: {
        xs: { span: 20 },
        sm: { span: 12 },
      },
    };
    const tailFormItemLayout = {
      wrapperCol: {
        xs: {
          span: 24,
          offset: 0,
        },
        sm: {
          span: 16,
          offset: 8,
        },
      },
    };
    return (
      <div className={com.box}>
        <div className={com.regh}>
          <h2>新用户注册</h2>
          <span>
            <NavLink to="/login">已有账号 去登陆 ></NavLink>
          </span>
        </div>
        <Form {...formItemLayout} onSubmit={this.handleSubmit}>
                                          {/* 用户名 */}
          <Form.Item
            label={
              <span>
                用户名&nbsp;
              </span>
            }
          >
            {getFieldDecorator('nickname', {
              rules: [{ required: true, message: ' ', whitespace: true }],
            })(<Input onBlur={() => this.name()} placeholder="请输入用户名"/>)}
            <div id="name" className={com.name}>用户名已存在</div>
          </Form.Item>
                                              {/* 手机号 */}
          <Form.Item label="手机号">
            {getFieldDecorator('phone', {
              rules: [{ required: true, message: ' ' }],
            })(<Input onBlur={() => this.phone()} placeholder="请输入手机号"/>)}
            <div id="num" className={com.num}>请输入正确的手机号</div>
          </Form.Item>
                                              {/* 密码 */}
          <Form.Item label="密码" hasFeedback>
            {getFieldDecorator('password', {
              rules: [
                {
                  required: true,
                  message: '请输入密码',
                },
                {
                  validator: this.validateToNextPassword,
                },
              ],
            })(<Input.Password placeholder="请输入密码"/>)}
            
          </Form.Item>
                                                {/* 确认密码 */}
          <Form.Item label="确认密码" hasFeedback>
            {getFieldDecorator('confirm', {
              rules: [
                {
                  required: true,
                  message: '请确认密码',
                },
                {
                  validator: this.compareToFirstPassword,
                },
              ],
            })(<Input.Password onBlur={this.handleConfirmBlur} placeholder="再次确认密码"/>)}
          </Form.Item>
          
          <Form.Item {...tailFormItemLayout}>
            {getFieldDecorator('agreement', {
              valuePropName: 'checked',
            })(
              <Checkbox>
                我已阅读 <a href=""> 豆果协议</a>
              </Checkbox>
            )}
          </Form.Item>
          <Form.Item {...tailFormItemLayout}>
            <Button type="primary" htmlType="submit">
              注册
            </Button>
          </Form.Item>
        </Form>

      </div>
    );
  }

}

const WrappedRegistrationForm = Form.create({ name: 'register' })(RegistrationForm);
export default WrappedRegistrationForm