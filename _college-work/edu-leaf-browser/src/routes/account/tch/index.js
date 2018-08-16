import React from 'react'
import PropTypes from 'prop-types'
import { Row, Col, Card, Form, Icon, Input, Button } from 'antd'

const FormItem = Form.Item

class DataTablePage extends React.Component {
  constructor (props) {
    super(props)
    this.state = {}
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values)
      }
    })
  }

  handleConfirmBlur = (e) => {
    const value = e.target.value
    this.setState({ confirmDirty: this.state.confirmDirty || !!value })
  }
  checkPassword = (rule, value, callback) => {
    const form = this.props.form
    if (value && value !== form.getFieldValue('password')) {
      callback('两次输入密码不一致!')
    } else {
      callback()
    }
  }

  checkConfirm = (rule, value, callback) => {
    const form = this.props.form
    if (value && this.state.confirmDirty) {
      form.validateFields(['confirm'], { force: true })
    }
    callback()
  }

  handleReset = () => {
    this.props.form.resetFields()
  }


  render () {
    const { getFieldDecorator } = this.props.form

    return (
      <div className="content-inner">
        <Row gutter={32}>
          <Col lg={12} md={24} style={{ marginTop: '12px' }}>
            <Card title={<b>名片</b>} extra={<a href="#">分享</a>}>
              <p><b>工号</b>:&nbsp;2014211116</p>
              <p><b>姓名</b>:&nbsp;陈旭元</p>
              <p><b>性别</b>:&nbsp;男</p>
              <p><b>职称</b>:&nbsp;教务处主任</p>
              <p><b>最后学历</b>:&nbsp;博士</p>
              <p><b>最后学历毕业学校</b>:&nbsp;浙江大学</p>
              <p><b>最后学位</b>:&nbsp;博士</p>
              <p><b>最后学位毕业学校</b>:&nbsp;浙江大学</p>
              <p><b>研究方向</b>:&nbsp;图像识别</p>
              <p><b>生日</b>:&nbsp;1996-04-12</p>
              <p><b>家庭电话</b>:&nbsp;65352222</p>
              <p><b>手机号</b>:&nbsp;17816869505</p>
              <p><b>邮箱</b>:&nbsp;17816869505@163.com</p>
              <p><b>备注</b>:&nbsp;经常保持联系哦,QQ已卸载!</p>
            </Card>
          </Col>
          <Col lg={12} md={24} style={{ marginTop: '12px' }}>
            <Card title={<b>账号安全</b>}>
              <Form onSubmit={this.handleSubmit}>
                <FormItem>
                {getFieldDecorator('oldpassword', {
                  rules: [{ required: true, message: '旧密码为空或不符合条件' }],
                })(<Input prefix={<Icon type="lock" style={{ fontSize: 13 }} />} type="password" placeholder="请输入旧密码" />
                )}
                </FormItem>
                <FormItem
                  hasFeedback
                >
                  {getFieldDecorator('password', {
                    rules: [{
                      required: true, message: '新密码为空或不符合条件!',
                    }, {
                      validator: this.checkConfirm,
                    }],
                  })(
                    <Input prefix={<Icon type="lock" style={{ fontSize: 13 }} />} type="password" placeholder="请输入新密码" />
                  )}
                </FormItem>
                <FormItem
                  hasFeedback
                >
                  {getFieldDecorator('confirm', {
                    rules: [{
                      required: true, message: '新密码为空或不符合条件!',
                    }, {
                      validator: this.checkPassword,
                    }],
                  })(
                    <Input prefix={<Icon type="lock" style={{ fontSize: 13 }} />} type="password" onBlur={this.handleConfirmBlur} placeholder="再次输入新密码" />
                  )}
                </FormItem>
                <FormItem>
                  <Button
                    type="primary"
                    htmlType="submit"
                    style={{ marginRight: '3%' }}
                  >
                    更新密码
                  </Button>
                  <Button
                    htmlType="reset"
                    onClick={this.handleReset}
                  >
                    重置
                  </Button>
                </FormItem>
              </Form>
            </Card>
          </Col>
          <Col lg={12} md={24} style={{ marginTop: '12px' }}>
            <Card title={<b>联系方式更新</b>}>
              <Form>
                <FormItem>
                  {getFieldDecorator('tel', {
                    rules: [{ required: false, message: '请输入家庭电话!' }],
                  })(
                    <Input type="tel" prefix={<Icon type="phone" style={{ fontSize: 13 }} />} placeholder="请输入家庭电话" />
                  )}
                </FormItem>
                <FormItem>
                  {getFieldDecorator('mobile', {
                    rules: [{ required: false, message: '请输入手机号!' }],
                  })(
                    <Input type="tel" prefix={<Icon type="mobile" style={{ fontSize: 13 }} />} placeholder="请输入手机号" />
                  )}
                </FormItem>
                <FormItem>
                  {getFieldDecorator('mail', {
                    rules: [{ required: false, message: '请输入邮箱!' }],
                  })(
                    <Input type="email" prefix={<Icon type="mail" style={{ fontSize: 13 }} />} placeholder="请输入邮箱" />
                  )}
                </FormItem>
                <FormItem>
                  {getFieldDecorator('description', {
                    rules: [{ required: false, message: '请输入备注!' }],
                  })(
                    <Input prefix={<Icon type="smile-o" style={{ fontSize: 13 }} />} placeholder="请输入简洁的备注信息" />
                  )}
                </FormItem>
                <FormItem>
                  <Button
                    type="primary"
                    htmlType="submit"
                    style={{ marginRight: '3%' }}
                  >
                    更新信息
                  </Button>
                  <Button
                    htmlType="reset"
                    onClick={this.handleReset}
                  >
                    重置
                  </Button>
                </FormItem>
              </Form>
            </Card>
          </Col>
        </Row>
      </div>
    )
  }
}

DataTablePage.propTypes = {
  form: PropTypes.object,
}

const WrappedRegistrationForm = Form.create()(DataTablePage)

export default WrappedRegistrationForm

