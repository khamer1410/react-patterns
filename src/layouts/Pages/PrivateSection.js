import React, { Fragment } from 'react'
import styled from 'styled-components';

const PrivateSection = props => (
  <Fragment>
    <h1>Congrats! Welcome to private page</h1>
    <p>As a reward You can see all component's props</p>
    <hr />
    <Board>
      <pre>
        {JSON.stringify(props, null, 2)}
      </pre>
    </Board>

  </Fragment>
)

export default PrivateSection

const Board = styled.div`
  max-width: 80%;
  background: aliceblue;
  border-radius: 10px;
  padding: 5px;
  overflow: auto;
`
