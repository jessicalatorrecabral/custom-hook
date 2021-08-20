import { useState, useEffect } from "react"
import axios from 'axios'

const useApiCall = (url) =>{
    const[isLoading, setIsLoading] = useState(true)
    const[errors, setErrors] = useState()
    const[response, setResponse] = useState()
    const[data, setData]= useState({})

    const getData = async () => {
        await axios
          .get(url)
          .then((response) => {
              setResponse(response)
            setData(response.data)
            setIsLoading(false);
          })
          .catch((err) => {
            setErrors(err)
            setIsLoading(false);
          });
      };

      useEffect(() => {
        getData();
      }, []);

      return {data, isLoading, getData, response, errors}
    
}
export default useApiCall

