import { useState,useEffect } from "react"
import { Axios } from "../axios/Axios"

const useFetch = (endpoint) =>{
    const [data ,setData] = useState([])
    const [loading,setLoading] = useState(false)

    const fetchData = async()=>{
        try {
            setLoading(true)
            const res = await Axios.get(endpoint)
            setLoading(false)
            setData(res.data.results)
        } catch (error) {
            console.log("error: ",error)
        }
    }

    useEffect(() => {
      fetchData()
    }, [])
    
    return {data , loading}
}

export default useFetch