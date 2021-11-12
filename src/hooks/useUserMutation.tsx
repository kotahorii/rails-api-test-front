import axios from 'axios'
import { useMutation, useQueryClient } from 'react-query'
import { GetUser, PostUser } from '../types/types'

export const useUserMutation = () => {
  const queryClinent = useQueryClient()

  const createUserMutation = useMutation(
    (name: PostUser) =>
      axios.post<GetUser>(`${process.env.REACT_APP_REST_URL}users/`, name, {
        headers: { 'Content-Type': 'application/json' },
      }),
    {
      onSuccess: (res) => {
        const previousUser = queryClinent.getQueryData<GetUser[]>('users')
        if (previousUser) {
          queryClinent.setQueryData<GetUser[]>('users', [
            ...previousUser,
            res.data,
          ])
        }
      },
    }
  )
  return { createUserMutation }
}
