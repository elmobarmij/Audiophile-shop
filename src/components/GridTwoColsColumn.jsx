import styled from 'styled-components'

const StyledGridTwoCols = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  gap: 3rem;

  @media (min-width: 62rem) {
    flex-direction: row;
    text-align: left;
    align-items: center;
    justify-content: flex-start;
    gap: 12rem;
  }

  @media (max-width: 62rem) {
    & div:has(img) {
      order: -1;
    }
  }
`

// this component is simular to GridTwoCols,
// but it allows the product components to be in column direction
// only before desktop breakpoint

function GridTwoColsColumn({ children, direction }) {
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

export default GridTwoColsColumn
