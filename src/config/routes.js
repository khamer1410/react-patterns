import NotFound from 'layouts/Pages/NotFound'
import LoginPage from 'components/Login'
import Intro from 'layouts/Pages/Intro'
import DemoPage from 'layouts/Pages/componentsDemo/DemoPage'
import PrivateSection from 'layouts/Pages/PrivateSection'
import ConditionalRendering from 'layouts/Pages/ConditionalRendering'

export const routes = [
  {
    name: 'Intro',
    path: '/',
    component: Intro,
    exact: true
  },
  {
    name: 'Components demo',
    path: '/components-demo',
    component: DemoPage,
  },
  {
    name: 'Conditional Rendering',
    path: '/conditional-rendering',
    component: ConditionalRendering,
  },
  {
    name: 'Login page',
    path: '/login',
    component: LoginPage,
  },
  {
    name: 'Private section',
    path: '/private',
    component: PrivateSection,
    privateRoute: true,
    redirect: '/login'
  },
  // 404# scenarios
  {
    name: 'Not found',
    component: NotFound
  }
]

export default routes
