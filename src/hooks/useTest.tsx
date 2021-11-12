import { ChangeEvent, useCallback, useState } from 'react'
import { useQueryUsers } from './useQueryUsers'
import { useUserMutation } from './useUserMutation'

export const useTest = () => {
  const { data } = useQueryUsers()
  const { createUserMutation } = useUserMutation()
  const [name, setName] = useState('')
  const handleNameInput = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => setName(e.target.value),
    []
  )
  const submitUserName = useCallback(() => {
    createUserMutation.mutate({ name: name })
    setName('')
  }, [name])
  return {
    data,
    name,
    handleNameInput,
    submitUserName,
  }
}
