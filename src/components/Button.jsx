import React from 'react'
import styled from 'styled-components'

const StyledButton = styled.button`
  font-size: 1.2rem;
  padding: 1.4rem 2.8rem;
  font-weight: 300;
  letter-spacing: 0.2rem;
  &:disabled {
    cursor: not-allowed;
  }

  border: ${props =>
    props.type === 'primary' ||
    props.type === 'secondary' ||
    props.type === 'submit'
      ? 'none'
      : '1px solid #000'};

  border-radius: 0.2rem;
  cursor: pointer;
  transition: background-color 0.3s ease;

  color: ${props =>
    props.type === 'primary' ||
    props.type === 'secondary' ||
    props.type === 'submit'
      ? 'white'
      : '#000'};
  text-transform: uppercase;
  align-self: ${props =>
    props.position === 'center' ? 'center' : 'flex-start'};

  background-color: ${props =>
    props.type === 'primary' || props.type === 'submit'
      ? 'var(--main-orange)'
      : props.type === 'secondary'
        ? '#000'
        : 'transparent'};

  &:hover {
    color: white;
    background-color: ${props =>
      props.type === 'primary' || props.type === 'submit'
        ? '#fbaf85d6'
        : props.type === 'secondary'
          ? '#4C4C4C'
          : '#000'};
  }
`

Button.defaultProps = {
  type: 'primary',
}

function Button({ children, ...props }) {
  return <StyledButton {...props}>{children}</StyledButton>
}

export default Button
