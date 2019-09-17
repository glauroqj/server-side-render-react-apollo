import Home from '../pages/Home'

const routes = [
  {
    path: '/',
    name: 'home',
    exact: true,
    component: Home,
  }
]

export default routes

/** share entry-point between client and server */