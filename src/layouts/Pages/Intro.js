import React, { Fragment } from 'react';
import styled from 'styled-components';

export const Intro = () => (
  <Fragment>
    <h1>React patterns roadmap</h1>
    <Wrapper>
      <ListedSection header='On the run!' list={runItems} />
      <ListedSection header='Backlog' list={backlogItems} />
    </Wrapper>
  </Fragment>
)

export default Intro

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

const runItems = [
  { name: 'Design', done: false },
  { name: 'Hooks', done: false },
  { name: 'ContextAPI', done: false },
  { name: 'HOC pattern', done: false },
]

const backlogItems = [
  { name: 'Add redux', done: false },
  { name: 'render props', done: false },
]
