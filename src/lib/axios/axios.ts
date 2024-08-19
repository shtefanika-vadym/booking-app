import axios from 'axios'
import type { AxiosInstance } from 'axios'
import { USER_STORAGE_KEY } from '@/constants/constants'

const getToken = (): Promise<string | null> => {
  return new Promise((resolve) => {
    const token = localStorage.getItem(USER_STORAGE_KEY)
    resolve(token)
  })
}

const axiosInstance: AxiosInstance = axios.create({
  baseURL: `${process.env.NEXT_PUBLIC_SERVER_URL}/api`
})

axiosInstance.interceptors.request.use(
  async (config) => {
    const userToken: string | null = await getToken()

    if (userToken) config.headers.Authorization = `Bearer ${userToken}`

    return config
  },
  (error) => {
    return Promise.reject(error)
  }
)

axiosInstance.interceptors.response.use(
  (response) => {
    return response
  },
  (error) => {
    if (error.response && error.response.status === 401) {
      console.error('Unauthorized access - token might be invalid')
      localStorage.removeItem(USER_STORAGE_KEY)
    }

    return Promise.reject(error)
  }
)

export default axiosInstance
