import React from 'react';
import styled from 'styled-components';
import Infobox from 'components/InfoBox';

export const IntroPage = () => (
  <>
    <h1>React patterns</h1>
    <Infobox>
      <span>
        <p>This site was created to have a build-from-scratch playground for React & React tools.</p>
        <p>By this approach, I can test new features or try some more complex patterns isolated, outside of a commercial project.</p>
        <p>No need to worry about dependencies, complexity - this is an easily customizable playground for React.</p>
        <p>It's (and probably always will be, as React is evolving) ongoing project - planned features and used technologies are listed below.</p>
      </span>
    </Infobox>

    <ListedSection header='TODO list' list={tasks} />

    <h2>Used technologies</h2>
    <Wrapper>
      <ListedSection header='JavaScript' list={JSitems} />
      <ListedSection header='CSS' list={CSSItems} />
      <ListedSection header='Other' list={otherItems} />
    </Wrapper>
  </>
)

export default IntroPage

const Wrapper = styled.div`
  display: flex;
  justify-content: space-around;
  padding: 15px;
`

const ListedSection = props => (
  <section>
    <div>
      <h1>{props.header}</h1>
      <ul>
        {props.list.map(({ name }) => (
          <li key={name}>{name}</li>
        ))}
      </ul>
    </div>
  </section>
)

const tasks = [
  { name: 'Improve design, add Material-design, add RWD', done: false },
  { name: 'Add Redux + Middleware', done: false },
  { name: 'Add React Utils section (lazy, memo, suspense, didCatch)', done: false },
  { name: 'Add CompoundComponent pattern', done: false },
  { name: 'Use service workers', done: false },
  { name: 'Use advanced Hooks patterns', done: false },
  { name: 'Add tests', done: false },
]

const JSitems = [
  { name: 'Create-react-app', done: false },
  { name: 'React Hooks', done: false },
  { name: 'ContextAPI', done: false },
  { name: 'Custom components', done: false },
]

const CSSItems = [
  { name: 'Styled components', done: false },
]

const otherItems = [
  { name: 'React router', done: false },
  { name: 'axios', done: false },
]
