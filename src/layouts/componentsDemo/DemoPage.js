import React from 'react';
import styled from 'styled-components';
import ModalPage from 'layouts/componentsDemo/ModalPage'

const DemoPage = () => (
  <div>
    <h1>React components demo page</h1>
    <hr />
    <Section>
      <ModalPage />
    </Section>
    <hr />
  </div>
)
const Section = styled.div`
  margin: 5px 0;
`
export default DemoPage
