import { useEffect, useState } from 'react';
import axios from "../../axios";

export default function useFetchTeam(id) {
    
    const [status, setStatus] = useState(null)
    const [team , setTeam] = useState(null)

    useEffect(() => {
        setStatus('fetching')
        axios.get(`/teams/${id}`)
            .then(res => {
                setTeam(res.data)
                setStatus('success')
            })
            .catch(err => {
                setStatus('error')
            })
    } , [id])


    return [team , status]
}