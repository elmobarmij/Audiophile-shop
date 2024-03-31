import { useState } from 'react'

export function useToggleMenu() {
  const [isOpenButtonShown, setIsOpenButtonShown] = useState(true)
  const [isCloseButtonShown, setIsCloseButtonShown] = useState(false)
  const [showOverlay, setShowOverlay] = useState(false)

  return {
    isOpenButtonShown,
    setIsOpenButtonShown,
    isCloseButtonShown,
    setIsCloseButtonShown,
    showOverlay,
    setShowOverlay,
  }
}
