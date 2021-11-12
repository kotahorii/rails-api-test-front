import axios from 'axios'
import { useQuery } from 'react-query'
import { GetUser } from '../types/types'

export const useQueryUsers = () => {
  const getUsers = async () => {
    const { data } = await axios.get<GetUser[]>(
      `${process.env.REACT_APP_REST_URL}users/`
    )
    return data
  }
  return useQuery<GetUser[], Error>({
    queryKey: 'users',
    queryFn: getUsers,
    staleTime: 0,
  })
}
