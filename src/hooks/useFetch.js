import {useEffect, useState} from "react";

export const useFetch = (fetchFunc) => {
  
  const [data, setData] = useState(null)
  const [error, setError] = useState(null)
  const [isLoaded, setIsLoaded] = useState(false)
  
  useEffect(() => {
    (
      async function(){
        try {
          const loadedData = await fetchFunc();
          setData(loadedData)
        } catch(err) {
          setError(err)
        } finally {
          setIsLoaded(true)
        }
      }
    )()
  }, [fetchFunc])
  
  return { data, error, isLoaded }
  
}
