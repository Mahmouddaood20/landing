import { useState } from 'react';
import axios from "../../axios";

export default function useCreateClient(requestBody) {
    
    const [status, setStatus] = useState(null)

    const addClient = () => {
        setStatus('fetching')
        axios.post(`/clients` , requestBody)
            .then(res => {
                setStatus('success')
            })
            .catch(err => {
                setStatus('error')
            })
    }


    return [addClient , status]
}