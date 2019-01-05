import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const propTypes = {
  label: PropTypes.string,
  onClick: PropTypes.func,
  isActive: PropTypes.bool,
  className: PropTypes.string,
  name: PropTypes.string,
  id: PropTypes.string,
}
const defaultProps = {
  onClick: () => { },
}

const TRANSITION_TIME = '0.5s'

const RawToggleButton = ({ label, onClick, className, isActive, name, id, ...props }) => (
  <label htmlFor={name} className={className} {...props}>
    <Switcher isActive={isActive} />
    <span>{label}</span>
    <input type="checkbox" name={name} id={id} onClick={onClick} />
  </label>
)

export const ToggleButton = styled(RawToggleButton)`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 5px;

  span {
    padding: 0 5px;
  }

  input {
    display: none;
  }
`

ToggleButton.propTypes = propTypes
ToggleButton.defaultProps = defaultProps

const Switcher = styled.div`
  background: ${({ isActive }) => isActive ? 'rgba(245,0,0, 0.8)' : '#2f3941'};
  border: none;
  border-radius: 10px;
  cursor: pointer;
  width: 40px;
  height: 20px;
  position: relative;
  transition: ${TRANSITION_TIME};

  ::before {
    content: '';
    position: absolute;
    width: 15px;
    height: 15px;
    background: white;
    border-radius: 50%;
    top: 2px;
    left: 5px;
    transition: ${TRANSITION_TIME};
    ${({ isActive }) => isActive && `
      left: 50%;
    `}
  }
`
