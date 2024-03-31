import styled from 'styled-components'
import Container from './Container'
import Nav from './Nav'
import Icons from './Icons'

const StyledFooter = styled.footer`
  background-color: var(--main-black);
  position: relative;
`

const Box = styled.div`
  display: flex;
  flex-direction: column;
  padding: 7rem 0 5rem;
  overflow: hidden;

  @media (max-width: 30rem) {
    padding: 5rem 0;
  }
`
const Info = styled.div`
  padding-top: 4.2rem;
  color: white;
`
const P = styled.p`
  color: var(--grey);
  max-width: 55rem;
  font-size: 1.55rem;
  font-weight: 100;
  line-height: 1.5;

  &:first-child {
    margin-bottom: 4rem;
  }

  @media (max-width: 30rem) {
    margin: auto;
    text-align: center;
    width: 90%;
  }
`

const OrangeLine = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 10rem;
  height: 0.4rem;
  background-color: var(--main-orange);

  @media (max-width: 30rem) {
    /* 
    to center this element on small devices
    5rem came from 10rem/2, 
    we take half of the screen width - half of the element width value 
    */
    left: calc(50% - 5rem);
  }
`

const Row = styled.div`
  display: flex;
  justify-content: space-between;

  @media (max-width: 30rem) {
    flex-direction: column;
  }
`

function Footer() {
  return (
    <StyledFooter>
      <Container>
        <Box>
          <OrangeLine></OrangeLine>
          <Nav style={{ justifyContent: 'space-between' }} />

          <Row>
            <Info>
              <P>
                Audiophile is an all in one stop to fulfill your audio needs.
                We're a small team of music lovers and sound specialists who are
                devoted to helping you get the most out of personal audio. Come
                and visit our demo facility - we’re open 7 days a week.
              </P>
              <P>Copyright 2021. All Rights Reserved</P>
            </Info>

            <Icons />
          </Row>
        </Box>
      </Container>
    </StyledFooter>
  )
}

export default Footer
