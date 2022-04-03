import { useState, useEffect } from 'react';
import axios from "../../axios";

export default function useFetchInfo() {
    
    const [status, setStatus] = useState(null)
    const [data , setData] = useState(null)

    useEffect(() => {
        setStatus('fetching')
        axios.get(`/about`)
            .then(res => {
                setData(res.data)
                setStatus('success')
            })
            .catch(err => {
                setStatus('error')
            })
    }, [])


    return [data , status]
}