import React from 'react'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import Container from './Container'

const Button = styled.button`
  color: rgb(12 0 0 / 27%);
  transition: var(--main-transition);
  border: none;
  margin-top: 8rem;
  background-color: transparent;
  cursor: pointer;
  font-size: 1.6rem;

  &:hover {
    text-decoration: underline;
  }

  @media (min-width: 30rem) and (max-width: 62rem) {
    margin-top: 3rem;
  }
  @media (max-width: 30rem) {
    margin-top: 2rem;
  }
`

function GoBackButton() {
  const navigate = useNavigate()

  function goBack() {
    navigate(-1)
  }

  return (
    <Container>
      <Button onClick={goBack}>Go Back</Button>
    </Container>
  )
}

export default GoBackButton
