import { useState } from 'react'

export function usePaymentMethod() {
  const [isEMoneyChecked, setIsEMoneyChecked] = useState(true)
  const [isCashOnDeliveryChecked, setIsCashOnDeliveryChecked] = useState(false)

  function handleCashOnDeliveryChange() {
    setIsCashOnDeliveryChecked(true)
    if (isEMoneyChecked) setIsEMoneyChecked(false)
  }

  function handleEMoneyChange() {
    setIsEMoneyChecked(true)
    if (isCashOnDeliveryChecked) setIsCashOnDeliveryChecked(false) // Uncheck the other checkbox
  }

  return {
    isCashOnDeliveryChecked,
    setIsCashOnDeliveryChecked,
    isEMoneyChecked,
    setIsEMoneyChecked,
    handleCashOnDeliveryChange,
    handleEMoneyChange,
  }
}
