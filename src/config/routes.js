import { lazy } from 'react'

const NotFoundPage = lazy(()=> import('pages/NotFoundPage'))
const LoginPage = lazy(()=> import('pages/Login'))
const IntroPage = lazy(()=> import('pages/IntroPage'))
const DemoPage = lazy(()=> import('pages/componentsDemo/DemoPage'))
const PrivateSection = lazy(()=> import('pages/PrivateSection'))
const ConditionalRenderingPage = lazy(()=> import('pages/conditionalRendering/ConditionalRenderingPage'))
const ContainerPage = lazy(()=> import('pages/container-presenter/Container'))
const HigherOrderComponentDemoPage = lazy(()=> import('pages/higherOrderComponent/HigherOrderComponentPage'))
const RenderPropsPage = lazy(()=> import('pages/renderProps/RenderPropsPage'))
const ReduxPage = lazy(()=> import('pages/redux/ReduxPage'))
const ReactUtilsPage = lazy(()=> import('pages/reactUtils/ReactUtilsPage'))
const FormPage = lazy(()=> import('pages/form/FormPage'))

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
    name: 'Form',
    path: '/form',
    component: FormPage
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
