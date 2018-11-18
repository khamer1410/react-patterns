import React, { Component } from 'react';
import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Transition from 'react-transition-group/Transition';

const duration = 300;

const defaultStyle = {
  transition: `opacity ${duration}ms`,
  opacity: 0,
};

const transitionStyles = {
  entering: { opacity: 0 },
  entered: { opacity: 1 },
};

export class Modal extends Component {
  static propTypes = {
    show: PropTypes.bool.isRequired,
    onClose: PropTypes.func.isRequired,
    header: PropTypes.node,
    children: PropTypes.node,
  };

  static defaultProps = {
    show: false,
    onClose: () => { },
    header: null,
    children: null,
  };

  componentDidMount = () => window.addEventListener('keydown', this.handleKeyDown);

  componentWillUnmount = () => window.removeEventListener('keydown', this.handleKeyDown);

  handleKeyDown = ({ key }) => key === 'Escape' && this.props.onClose();

  handleBackgroundClick = ({ target, currentTarget }) => target === currentTarget && this.props.onClose();

  render() {
    const { show, onClose, header, children, ...props } = this.props;

    return createPortal(
      <Transition in={show} mountOnEnter unmountOnExit timeout={duration}>
        {state => (
          <ModalBackground onClick={this.handleBackgroundClick} style={{ ...defaultStyle, ...transitionStyles[state] }}>
            <ModalContent {...props}>
              <ModalHeader>
                <HeaderContent>{header}</HeaderContent>
                <CloseButton onClick={onClose} />
              </ModalHeader>
              {children}
            </ModalContent>
          </ModalBackground>
        )}
      </Transition>,
      document.getElementById('modal-root')
    );
  }
}

const ModalBackground = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: rgba(61, 64, 76, 0.5);
  z-index: 9999;
`;

const ModalContent = styled.div`
  position: fixed;

  max-width: 100%;
  overflow-x: auto;
  border-radius: 8px;

  background: white;
  transition: 0.5s;

@media screen and (max-width: 800px) {
    top: 8px;
    right: 8px;
    bottom: 8px;
    left: 8px;

    width: calc(100% - 16px);
    height: calc(100% - 16px);
    padding: 15px;
}

 @media screen and (min-width: 800px)  {
    top: 20%;
    left: 50%;
    transform: translateX(-50%);
    padding: 25px;
 }
`;

const CLOSE_BUTTON_SIZE = '24px';

const ModalHeader = styled.div`
  display: flex;
`;

const HeaderContent = styled.div`
  flex: 1;
  padding-left: ${CLOSE_BUTTON_SIZE};
`;

export const CloseIcon = ({ stroke, strokeWidth, ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" {...props}>
    <path
      fill="none"
      fillRule="evenodd"
      stroke='grey'
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth='1.5'
      d="M1 15L15 1M1 1l14 14"
    />
  </svg>
);

const CloseButton = styled(CloseIcon)`
  width: ${CLOSE_BUTTON_SIZE};
  height: ${CLOSE_BUTTON_SIZE};
  flex: 0 0 ${CLOSE_BUTTON_SIZE};
  padding: 8px;
  margin: -11px;
  margin-left: auto;
  box-sizing: content-box;
  cursor: pointer;
  transition: 0.4s cubic-bezier(0.23, 1, 0.32, 1);

  &:hover {
    transform: rotate(90deg);
  }
`;
