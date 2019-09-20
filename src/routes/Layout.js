import { Route, Switch } from 'react-router'
import React from 'react'

// A Routes file is a good shared entry-point between client and server
import routes from './routes'

const Layout = () => (
  <>
    {/* New <Switch> behavior introduced in React Router v4
       https://reacttraining.com/react-router/web/api/Switch */}
    <div>HEADER</div>
    <Switch>
      {routes.map(route => <Route key={route.name} {...route} />)}
    </Switch>
    <div>FOOTER</div>
  </>
)

export default Layout;