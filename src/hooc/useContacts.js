import {useEffect, useState} from "react";


export function useContacts() {
    const [data, setData] = useState([])
    const [ isLoading, setIsLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() =>{
        const getLoading = async () => {
            try {
                setIsLoading(true)
                const response = await  fetch("https://randomuser.me/api/?results=200")
                const { results, error } = await response.json()
                if (error) throw new Error(error)
                setData(results)
                setIsLoading(false)


            } catch (e) {
                console.log(e)
                setError(e.message)
            } finally {
                setIsLoading(false)
            }
        }
        getLoading().catch(e =>console.log(e))


    },[])
    return  {
        data,
        isLoading,
        error
    }
}