import React from 'react'
import PropTypes from 'prop-types'
import { Router } from 'dva/router'
import App from './routes/app'

const registerModel = (app, model) => {
  if (!(app._models.filter(m => m.namespace === model.namespace).length === 1)) {
    app.model(model)
  }
}

const Routers = function ({ history, app }) {
  const routes = [
    {
      path: '/',
      component: App,
      getIndexRoute (nextState, cb) {
        require.ensure([], require => {
          // registerModel(app, require('./models/dashboard'))
          cb(null, { component: require('./routes/common/message/') })
        }, 'message')
      },
      childRoutes: [
        {
          path: 'message',
          getComponent (nextState, cb) {
            require.ensure([], require => {
              // registerModel(app, require('./models/dashboard'))
              cb(null, require('./routes/common/message/'))
            }, 'message')
          },
        }, {
          path: 'login',
          getComponent (nextState, cb) {
            require.ensure([], require => {
              registerModel(app, require('./models/login'))
              cb(null, require('./routes/common/login/'))
            }, 'login')
          },
        }, {
          path: 'info',
          getComponent (nextState, cb) {
            require.ensure([], require => {
              cb(null, require('./routes/info/stu/'))
            }, 'stu-info')
          },
        }, {
          path: 'info/stu',
          getComponent (nextState, cb) {
            require.ensure([], require => {
              cb(null, require('./routes/info/stu/'))
            }, 'stu-info')
          },
        }, {
          path: 'info/tch',
          getComponent (nextState, cb) {
            require.ensure([], require => {
              cb(null, require('./routes/info/tch/'))
            }, 'tch-info')
          },
        }, {
          path: 'info/dept',
          getComponent (nextState, cb) {
            require.ensure([], require => {
              cb(null, require('./routes/info/dept/'))
            }, 'dept-info')
          },
        }, {
          path: 'info/major',
          getComponent (nextState, cb) {
            require.ensure([], require => {
              cb(null, require('./routes/info/major/'))
            }, 'major-info')
          },
        }, {
          path: 'schedule/plan',
          getComponent (nextState, cb) {
            require.ensure([], require => {
              cb(null, require('./routes/schedule/plan/'))
            }, 'plan-info')
          },
        }, {
          path: 'info/semester',
          getComponent (nextState, cb) {
            require.ensure([], require => {
              cb(null, require('./routes/info/semester/'))
            }, 'semester-info')
          },
        }, {
          path: 'info/class',
          getComponent (nextState, cb) {
            require.ensure([], require => {
              cb(null, require('./routes/info/class/'))
            }, 'class-info')
          },
        }, {
          path: 'schedule/task',
          getComponent (nextState, cb) {
            require.ensure([], require => {
              cb(null, require('./routes/schedule/task/'))
            }, 'task-schedule')
          },
        }, {
          path: 'schedule/tchtask',
          getComponent (nextState, cb) {
            require.ensure([], require => {
              cb(null, require('./routes/schedule/tchtask/'))
            }, 'task-schedule')
          },
        }, {
          path: 'account/deptadmin',
          getComponent (nextState, cb) {
            require.ensure([], require => {
              cb(null, require('./routes/account/deptAdmin/'))
            }, 'deptadmin-info')
          },
        }, {
          path: 'account/stu',
          getComponent (nextState, cb) {
            require.ensure([], require => {
              cb(null, require('./routes/account/stu/'))
            }, 'account-stu')
          },
        }, {
          path: 'account/sysAdmin',
          getComponent (nextState, cb) {
            require.ensure([], require => {
              cb(null, require('./routes/account/sysAdmin/'))
            }, 'account-sysadmin')
          },
        }, {
          path: 'account/tch',
          getComponent (nextState, cb) {
            require.ensure([], require => {
              cb(null, require('./routes/account/tch/'))
            }, 'account-tch')
          },
        }, {
          path: 'cloud/deptadmin',
          getComponent (nextState, cb) {
            require.ensure([], require => {
              cb(null, require('./routes/cloud/deptAdmin/'))
            }, 'cloud-deptadmin')
          },
        }, {
          path: 'cloud/stu',
          getComponent (nextState, cb) {
            require.ensure([], require => {
              cb(null, require('./routes/cloud/stu/'))
            }, 'cloud-stu')
          },
        }, {
          path: 'cloud/tch',
          getComponent (nextState, cb) {
            require.ensure([], require => {
              cb(null, require('./routes/cloud/tch/'))
            }, 'cloud-tch')
          },
        }, {
          path: 'cloud/type',
          getComponent (nextState, cb) {
            require.ensure([], require => {
              cb(null, require('./routes/cloud/type/'))
            }, 'cloud-type')
          },
        }, {
          path: 'cloud/deptadminrecieve',
          getComponent (nextState, cb) {
            require.ensure([], require => {
              cb(null, require('./routes/cloud/deptAdminRecieve/'))
            }, 'cloud-deptadminrecieve')
          },
        }, {
          path: 'rbac/resource',
          getComponent (nextState, cb) {
            require.ensure([], require => {
              cb(null, require('./routes/rbac/resource/'))
            }, 'rbac-resource')
          },
        }, {
          path: 'rbac/role',
          getComponent (nextState, cb) {
            require.ensure([], require => {
              cb(null, require('./routes/rbac/role/'))
            }, 'rbac-role')
          },
        }, {
          path: 'rbac/user',
          getComponent (nextState, cb) {
            require.ensure([], require => {
              cb(null, require('./routes/rbac/user/'))
            }, 'rbac-role')
          },
        }, {
          path: 'sys/arg',
          getComponent (nextState, cb) {
            require.ensure([], require => {
              cb(null, require('./routes/sys/arg/'))
            }, 'sys-arg')
          },
        }, {
          path: 'sys/log',
          getComponent (nextState, cb) {
            require.ensure([], require => {
              cb(null, require('./routes/sys/log/'))
            }, 'sys-log')
          },
        }, {
          path: 'sys/timetask',
          getComponent (nextState, cb) {
            require.ensure([], require => {
              cb(null, require('./routes/sys/timetask/'))
            }, 'sys-timetask')
          },
        }, {
          path: '*',
          getComponent (nextState, cb) {
            require.ensure([], require => {
              cb(null, require('./routes/common/error/'))
            }, 'error')
          },
        },
      ],
    },
  ]

  return <Router history={history} routes={routes} />
}

Routers.propTypes = {
  history: PropTypes.object,
  app: PropTypes.object,
}

export default Routers
