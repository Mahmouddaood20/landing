import { useState, useEffect } from 'react';
import axios from "../../axios";

export default function useFetchClients() {
    
    const [status, setStatus] = useState(null)
    const [data , setData] = useState([])

    useEffect(() => {
        setStatus('fetching')
        axios.get(`/clients`)
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