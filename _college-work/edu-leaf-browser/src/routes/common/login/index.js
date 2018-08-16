/**
 * 登录页面, 没有组件
 */
import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'dva'
import { Button, Row, Form, Input } from 'antd'
import { config } from '../../../utils'
import styles from './index.less'

const FormItem = Form.Item // 便于控制form的选项

/**
 * 登录函数
 * @param {*} param0
 */
const Login = ({
  login,
  dispatch,
  form: {
    getFieldDecorator,
    validateFieldsAndScroll,
  },
}) => {
  const { loginLoading } = login

  /**
   * 表单填写完enter触发事件的处理函数
   */
  function handleOk () {
    validateFieldsAndScroll((errors, values) => {
      // 如果有错误,返回null
      if (errors) {
        return
      }

      console.log('跳转前:')
      console.log(values)

      // 跳转页面?
      dispatch({ type: 'login/login', payload: values }) // payload 有效载荷,荷载物
    })
  }

  return (
    <div className={styles.form}>
      <div className={styles.logo}>
        <img alt={'logo'} src={config.logo} />
        <span>{config.name}</span>
      </div>
      <form>
        <FormItem hasFeedback>
          {getFieldDecorator('username', {
            rules: [
              {
                required: true,
              },
            ],
          })(<Input size="large" onPressEnter={handleOk} placeholder="请输入用户名" />)}
        </FormItem>
        <FormItem hasFeedback>
          {getFieldDecorator('password', {
            rules: [
              {
                required: true,
              },
            ],
          })(<Input size="large" type="password" onPressEnter={handleOk} placeholder="请输入密码" />)}
        </FormItem>
        <Row>
          <Button type="primary" size="large" onClick={handleOk} loading={loginLoading}>
            登录
          </Button>
        </Row>

      </form>
    </div>
  )
}

Login.propTypes = {
  form: PropTypes.object,
  login: PropTypes.object,
  dispatch: PropTypes.func,
}

export default connect(({ login }) => ({ login }))(Form.create()(Login))
