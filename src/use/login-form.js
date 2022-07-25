import {useField, useForm} from 'vee-validate'
import {computed, watch} from 'vue'
import * as yup from 'yup'
import {useStore} from 'vuex'
import {useRouter} from 'vue-router'

export function useLoginForm() {
  const store = useStore()
  const router = useRouter()
  
  const {handleSubmit, isSubmitting, submitCount} = useForm()
  
  const onSubmit = handleSubmit(async values => {
    try {
      await store.dispatch('auth/login', values)
      router.push('/')
    } catch (e) {
      console.log(e)
    }
  })
  
  const tooManySubmits = computed(() => submitCount.value >= 3)
  
  watch(tooManySubmits, val => {
    if (val) {
      setTimeout(() => {
        submitCount.value = 0
      }, 1500)
    }
  })
  
  const MIN_LENGTH = 6
  
  const {value: email, errorMessage: eError, handleBlur: eBlur} = useField(
    'email',
    yup
      .string()
      .trim()
      .required('Please type EMAIL')
      .email("Please type correct EMAIL")
  )
  const {value: password, errorMessage: pError, handleBlur: pBlur} = useField(
    'password',
    yup
      .string()
      .trim()
      .required()
      .min(MIN_LENGTH)
  )
  
  return {
    email,
    eError,
    eBlur,
    password,
    pError,
    pBlur,
    onSubmit,
    isSubmitting,
    tooManySubmits
  }
}
