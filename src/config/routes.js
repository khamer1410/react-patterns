import NotFoundPage from 'layouts/Pages/NotFoundPage'
import LoginPage from 'layouts/Pages/Login'
import IntroPage from 'layouts/Pages/IntroPage'
import DemoPage from 'layouts/Pages/componentsDemo/DemoPage'
import PrivateSection from 'layouts/Pages/PrivateSection'
import ConditionalRenderingPage from 'layouts/Pages/conditionalRendering/ConditionalRenderingPage'
import ContainerPage from 'layouts/Pages/container-presenter/Container'
import HigherOrderComponentDemoPage from 'layouts/Pages/higherOrderComponent/HigherOrderComponentPage'
import RenderPropsPage from 'layouts/Pages/renderProps/RenderPropsPage'

export const routes = [
  {
    name: 'Intro',
    path: '/',
    component: IntroPage,
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
    component: ConditionalRenderingPage,
  },
  {
    name: 'Container / Presenter',
    path: '/container-presenter',
    component: ContainerPage,
  },
  {
    name: 'Higher order component',
    path: '/hoc',
    component: HigherOrderComponentDemoPage,
  },
  {
    name: 'Render props',
    path: '/render-props',
    component: RenderPropsPage,
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
    redirect: '/login',
  },
  // 404# scenarios
  {
    name: 'Not found',
    component: NotFoundPage
  }
]

export default routes
