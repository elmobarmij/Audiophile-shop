import {
  cloneElement,
  createContext,
  useContext,
  useEffect,
  useRef,
  useState,
} from 'react'
import { createPortal } from 'react-dom'
import styled from 'styled-components'
import {
  togglePaymentButton,
  removeAllItems,
  resetTotalPrice,
} from '../features/Cart/cartSlice'
import { useDispatch } from 'react-redux'

const StyledModal = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: var(--color-grey);
  border-radius: var(--main-radius);
  padding: 3.2rem 4rem;
  transition: all 0.5s;
  z-index: 100000;

  @media (max-width: 30rem) {
    padding: 2rem 2.4rem;
  }
`

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: var(--grey-secondary);
  backdrop-filter: blur(3px);
  z-index: 100000;
  transition: all 0.5s;
`

const ModalContext = createContext()

function Modal({ children }) {
  const [openName, setOpenName] = useState('')

  const close = () => setOpenName(false)
  const open = setOpenName

  return (
    <ModalContext.Provider value={{ openName, close, open }}>
      {children}
    </ModalContext.Provider>
  )
}

export function useModal() {
  const context = useContext(ModalContext)
  if (context === undefined)
    throw new Error('ModalContext was used outside of Modal')
  return context
}

function Open({ children, opens: opensWindowName }) {
  const { open } = useContext(ModalContext)

  return cloneElement(children, {
    onClick: () => open(opensWindowName),
  })
}

function Window({ children, name }) {
  const { openName, close } = useContext(ModalContext)
  const ref = useRef()
  const dispatch = useDispatch()

  useEffect(
    function () {
      function handleClick(e) {
        if (ref.current && !ref.current.contains(e.target)) {
          if (openName === 'payment-done') {
            dispatch(resetTotalPrice())
            dispatch(removeAllItems())
            dispatch(togglePaymentButton(true))
          }
          close()
        }
      }

      document.addEventListener('click', handleClick, true)
      return () => document.removeEventListener('click', handleClick, true)
    },
    [close, dispatch, openName],
  )

  if (name !== openName) return null

  return createPortal(
    <Overlay>
      <StyledModal ref={ref}>
        <div>{cloneElement(children)}</div>
      </StyledModal>
    </Overlay>,
    document.body,
  )
}

Modal.Open = Open
Modal.Window = Window

export default Modal
