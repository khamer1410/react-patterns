import React from 'react'
import Amount from 'layouts/Pages/renderProps/Amount'
import InfoBox from 'components/InfoBox'

const RenderPropsPage = () => {
  return (
    <div>
      <h1>Render props pattern</h1>

      <InfoBox
        title={`Use this pattern when you want to inject Components but You don't want to lift the state up`}
      >
        <p>Pros & cons:</p>
        <ul>
          <li>No props name collision</li>
          <li>Easier to follow the logic</li>
          <li>More flexible composition than HOC's</li>
          <li>Harder to combine multiple layers of abstraction</li>
        </ul>
      </InfoBox>

      <section>
        <h2>Basic render prop</h2>
        <Amount
          render={amount => (
            <div>
              <Euro amount={amount} />
              <Pln amount={amount} />
            </div>
          )}
        />
        <p>Could be also written as child as a function</p>
      </section>
      <hr />

      <section>
        <h2>Multiple slots pattern</h2>
        <Amount
          render={amount => (
            <div>
              <h3>Placeholder 1 - change order</h3>
              <Pln amount={amount} />
              <Euro amount={amount} />
            </div>
          )}
          children={amount => (
            <div>
              <h3>Placeholder 2 - double money!</h3>
              <Euro amount={amount * 2} />
              <Pln amount={amount * 2} />
            </div>
          )}
        />
      </section>

    </div>
  )
}

export default RenderPropsPage

// Utils components, to small to extract
const Euro = ({ amount }) => <p>Euro: {amount * 0.86}</p>
const Pln = ({ amount }) => <p>PLN: {amount * 3.5}</p>
