import {useState} from "react"
import axios from 'axios'

const useApiCall = (url) => {

  const[isLoading, setIsLoading] = useState(false)
  const[errors, setErrors] = useState()
  const[response, setResponse] = useState()
  const[data, setData]= useState({})

  const getData =  () => {
      setIsLoading(true)
      axios
      .get(url)
      .then((response) => {
        setIsLoading(false)
        setResponse(response)
        setData(response.data)
      })
      .catch((err) => {
        setErrors(err)
        setIsLoading(false)
        alert('Ocorreu um erro, tente novamente')
      })
  }

  return {data, getData, isLoading}
  
}
export default useApiCall

