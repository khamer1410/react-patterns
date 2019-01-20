import NotFoundPage from 'pages/NotFoundPage'
import LoginPage from 'pages/Login'
import IntroPage from 'pages/IntroPage'
import DemoPage from 'pages/componentsDemo/DemoPage'
import PrivateSection from 'pages/PrivateSection'
import ConditionalRenderingPage from 'pages/conditionalRendering/ConditionalRenderingPage'
import ContainerPage from 'pages/container-presenter/Container'
import HigherOrderComponentDemoPage from 'pages/higherOrderComponent/HigherOrderComponentPage'
import RenderPropsPage from 'pages/renderProps/RenderPropsPage'
import ReduxPage from 'pages/redux/ReduxPage';
import ReactUtilsPage from 'pages/reactUtils/reactUtilsPage';

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
    name: 'React utils',
    path: '/utils',
    component: ReactUtilsPage,
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
    name: 'Redux',
    path: '/redux',
    component: ReduxPage,
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
