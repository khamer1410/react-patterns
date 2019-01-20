import React from 'react'
import styled from 'styled-components';

const PrivateSection = props => (
  <>
    <h1>Congrats! Welcome to private page</h1>
    <p>As a reward You can see all component's props</p>
    <hr />
    <Board>
      <pre>
        {JSON.stringify(props, null, 2)}
      </pre>
    </Board>

  </>
)

export default PrivateSection

const Board = styled.div`
  max-width: 80%;
  background: aliceblue;
  border-radius: 10px;
  padding: 5px;
  overflow: auto;
`
