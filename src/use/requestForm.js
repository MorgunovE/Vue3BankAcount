import {useField, useForm} from 'vee-validate'
import * as yup from 'yup'

export function useRequestForm(fn) {
  const {isSubmitting, handleSubmit} = useForm({
    initialValues: {
      status: 'active'
    }
  })
  
  const {value: name, errorMessage: nError, handleBlur: nBlur} = useField('name',
    yup
      .string()
      .trim()
      .required('Type Name')
  )
  const {value: phone, errorMessage: pError, handleBlur: pBlur} = useField('phone',
    yup
      .string()
      .trim()
      .required("Phone can't be empty")
  )
  const {value: amount, errorMessage: aError, handleBlur: aBlur} = useField('amount',
    yup
      .number()
      .required('Type Amount')
      .min(0, "Amount can't be lower than 0")
  )
  const {value: status} = useField('status')
  
  const onSubmit = handleSubmit(fn)
  
  return {
    status,
    isSubmitting,
    onSubmit,
    name,
    nError,
    nBlur,
    phone,
    pError,
    pBlur,
    amount,
    aError,
    aBlur
  }
}
