import React from 'react';
import InfoBox from 'components/InfoBox'

const DataPresenter = ({ theme }) => (
  <div>
    <InfoBox style={{ marginTop: '20px' }}>
      HOC can inject additional props - like selected Theme for instance:
      <br />
      <h3>Current theme is <code>{theme}</code></h3>
    </InfoBox>

    <InfoBox style={{ marginTop: '20px' }}>
      Or can handle logic basing on passed props - hit the buttons to demo
      <br />
      <h3>All correct, just displaying some funny animals {'\u{1F436}'} </h3>
    </InfoBox>
  </div>
)

export default DataPresenter
