import React from 'react'
import { Row, Col, Card } from 'antd'

class DataTablePage extends React.Component {
  constructor (props) {
    super(props)
    this.state = { filterCase: {
      gender: '',
    } }
  }

  render () {
    return (<div className="content-inner">
      <Row gutter={32}>
        <Col lg={12} md={24}>
          <Card title="默认">
            RBAC-角色管理
          </Card>
        </Col>
      </Row>
    </div>)
  }
}

export default DataTablePage
