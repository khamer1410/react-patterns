import React from 'react';
import InfoBox from 'components/InfoBox'

const DataPresenter = ({ theme }) => (
  <div>
    <InfoBox>Current theme is <code>{theme}</code></InfoBox>
    <h3>All correct, just displaying some funny animals {'\u{1F436}'} </h3>
  </div>
)

export default DataPresenter
