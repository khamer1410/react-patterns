import React, { Component } from 'react';
import { createPortal } from 'react-dom';
import styled from 'styled-components';
import PropTypes from 'prop-types';

class ModalComponent extends Component {
  static defaultProps = {
    show: false,
    onClose: () => { },
  };

  static propTypes = {
    show: PropTypes.bool,
    onClose: PropTypes.func.isRequired,
    header: PropTypes.element,
  };

  componentDidMount() {
    window.addEventListener('keydown', this.onEscapeDown);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.onEscapeDown);
  }

  onEscapeDown = ({ key }) => {
    key === 'Escape' && this.props.onClose();
  };

  onOutsideClick = ({ target, currentTarget }) => {
    target === currentTarget && this.props.onClose();
  };

  render() {
    const { show, style, onClose, header, children, ...custom } = this.props;

    if (!show) return null;

    return (
      <ModalBackground onClick={this.onOutsideClick}>
        <ModalContent style={style} {...custom}>
          <ModalHeader>
            <HeaderContent>{header}</HeaderContent>
            <CloseButton onClick={onClose} />
          </ModalHeader>
          {children}
        </ModalContent>
      </ModalBackground>
    );
  }
}

// TODO: Parent Wrapper component to ensure children lifecycle methods will fire. Will be replaced with TransitionGroup
export class Modal extends Component {
  static defaultProps = {
    show: false,
  };

  static propTypes = {
    show: PropTypes.bool,
  };

  render() {
    if (!this.props.show) return null;

    return createPortal(<ModalComponent {...this.props} />, document.getElementById('modal-root'));
  }
}

export const CloseIcon = ({ stroke, strokeWidth, ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" {...props}>
    <path
      fill="none"
      fillRule="evenodd"
      stroke={stroke}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={strokeWidth}
      d="M1 15L15 1M1 1l14 14"
    />
  </svg>
);

CloseIcon.defaultProps = {
  stroke: '#A5A5A5',
  strokeWidth: '1.5',
};;

const ModalBackground = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: rgba(61, 64, 76, 0.5);
  z-index: 9999;
`;

// prettier-ignore
const ModalContent = styled.div`
  position: fixed;

  max-width: 100%;
  overflow-x: auto;
  border-radius: 8px;

  background: white;
  transition: 0.5s;

  /* ${screenSize.desktop`
    top: 8px;
    right: 8px;
    bottom: 8px;
    left: 8px;  

    width: calc(100% - 16px);
    height: calc(100% - 16px);
    padding: 15px;
  `} 
  
  ${screenSize.desktop`
    top: 20%;
    left: 50%;
    transform: translateX(-50%);
    padding: 25px;
  `}; */
`;

const CLOSE_BUTTON_SIZE = '24px';

const ModalHeader = styled.div`
  display: flex;
`;

const HeaderContent = styled.div`
  flex: 1;
  padding-left: ${CLOSE_BUTTON_SIZE};
`;

const CloseButton = styled(CloseIcon)`
  width: ${CLOSE_BUTTON_SIZE};
  height: ${CLOSE_BUTTON_SIZE};
  flex: 0 0 ${CLOSE_BUTTON_SIZE};
  padding: 8px;
  margin: -11px;
  margin-left: auto;
  box-sizing: content-box;
  cursor: pointer;

  &:hover {
    transform: rotate(90deg);
  }
  transition: 0.4s cubic-bezier(0.23, 1, 0.32, 1);
`;
