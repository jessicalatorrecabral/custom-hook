import { useState, useEffect } from "react"
import axios from 'axios'

const useApiCall = (url) => {

  const[isLoading, setIsLoading] = useState(false)
  const[errors, setErrors] = useState()
  const[response, setResponse] = useState()
  const[data, setData]= useState({})

  const getData =  () =>
          // setIsLoading(true)
    
        axios
          .get(url)

          .then((response) => {

            setResponse(response)
            setData(response.data)
            setIsLoading(false)


          })
          .catch((err) => {
            setErrors(err)
            // alert('ocorreu um erro, tente novamente')
            setIsLoading(false)
          }
    
  )

  // useEffect(() => {
  //   getData();
  // }, [data]);

  return {data, getData, isLoading, response, errors}

 
  

    // const[isLoading, setIsLoading] = useState(true)
    // const[errors, setErrors] = useState()
    // const[response, setResponse] = useState()
    // const[data, setData]= useState({})

    // const getData =  () => {
    //     axios
    //       .get(url)
    //       .then((response) => {
    //           setResponse(response)
    //         setData(response.data)
    //         setIsLoading(false);
    //       })
    //       .catch((err) => {
    //         setErrors(err)
    //         setIsLoading(false);
    //       });
    //   };

     

    //   return {data, isLoading, getData, response, errors}
    
}
export default useApiCall

