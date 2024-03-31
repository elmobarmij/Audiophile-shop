import styled from 'styled-components'

const StyledGridTwoCols = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 12rem;

  @media (min-width: 30rem) and (max-width: 62rem) {
    gap: 3rem;
  }

  @media (max-width: 30rem) {
    flex-direction: column;
    gap: 3rem;
  }
`

function GridTwoCols({ children, direction }) {
  return (
    <StyledGridTwoCols direction={direction}>
      {direction === 'reverse' ? (
        <>
          {children[1]}
          {children[0]}
        </>
      ) : (
        <>
          {children[0]}
          {children[1]}
        </>
      )}
    </StyledGridTwoCols>
  )
}

export default GridTwoCols
