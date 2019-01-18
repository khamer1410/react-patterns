import React, { Component, PureComponent, memo } from "react";
import { ToggleButton } from "components/ToggleButton";

export default class PureComponentExample extends Component {
  state = {
    isActive: false
  };

  toggleState = () => {
    this.setState(state => ({ isActive: !state.isActive }));
  };

  render() {
    const { isActive } = this.state;
    return (
      <div>
        <h2>Pure component example</h2>
        <p>Click button to change state and check the console to see components rendering report</p>
        <ToggleButton
          label="change state"
          onClick={this.toggleState}
          isActive={isActive}
        />
        <DummyInfo name='functional component' caption='I will rerender each time my parent do'/>
        <SmartInfo name='pure component' caption='I will rerender only when new props are passed'/>
        <MemoInfo name='memo component' caption='I work like PureComponent but for dummy components also thanks to React.memo'/>
      </div>
    );
  }
}

const DummyInfo = ({name, caption}) => {
  console.log(`${name}: I render!`);
  return (
    <div>
      <p><strong>{name}</strong>: {caption}</p>
    </div>
  );
};

class SmartInfo extends PureComponent {
  render() {
    console.log(`${this.props.name}: I render!`);
    return (
      <div>
        <p><strong>{this.props.name}</strong>: {this.props.caption}</p>
      </div>
    );
  }
}

const MemoInfo = memo(DummyInfo)
