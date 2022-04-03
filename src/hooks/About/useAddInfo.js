import { useState } from 'react';
import axios from "../../axios";

export default function useAddInfo(requestBody) {
    
    const [status, setStatus] = useState(null)

    const addInfo = () => {
        setStatus('fetching')
        axios.post(`/about` , requestBody)
            .then(res => {
                setStatus('success')
            })
            .catch(err => {
                setStatus('error')
            })
    }


    return [addInfo , status]
}