import { createContext, useContext, useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { useLocation } from 'react-router-dom'

const FormValidationContext = createContext()

function FormValidationProvider({ children }) {
  const { reset, getValues, handleSubmit, register, formState } = useForm()
  const { errors } = formState
  const [isPaid, setIsPaid] = useState(false)
  const location = useLocation()

  function onSubmit() {
    setIsPaid(true)
    reset()
  }

  useEffect(
    function () {
      if (location.pathname === '/checkout') setIsPaid(false)
    },
    [location.pathname],
  )

  return (
    <FormValidationContext.Provider
      value={{
        reset,
        getValues,
        handleSubmit,
        register,
        formState,
        errors,
        onSubmit,
        isPaid,
      }}
    >
      {children}
    </FormValidationContext.Provider>
  )
}

function useFormValidation() {
  const context = useContext(FormValidationContext)
  if (!context) {
    throw new Error(
      'FormValidationContext was used outside of FormValidationProvider',
    )
  }

  return context
}

export { FormValidationProvider, useFormValidation }
