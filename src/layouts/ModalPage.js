import React from 'react';
import { Modal } from 'components/Modal'

export default class ModalPage extends React.Component {
  state = {
    show: false,
  }

  toggleModal = () => {
    this.setState(prevState => ({
      show: !prevState.show
    }))
  }

  render() {
    const { show } = this.state
    return (
      <div>
        <button onClick={this.toggleModal}>Show Modal</button>
        <Modal
          show={show}
          header={<h1>Fancy Header</h1>}
          onClose={this.toggleModal}
        >
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa eaque qui alias blanditiis excepturi vitae eos enim, aliquam repellat, debitis consequuntur vero id! Voluptates excepturi molestiae quod ratione maxime atque.</p>
        </Modal>
      </div>
    )
  }

}
