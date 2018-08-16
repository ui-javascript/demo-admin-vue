import React from 'react'
import { Row, Col } from 'antd'

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
          公共页
        </Col>
      </Row>
    </div>)
  }
}

export default DataTablePage
