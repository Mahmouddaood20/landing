import { useState } from 'react';
import axios from "axios"

export default function useSendEmail(requestBody) {
    
    const [status, setStatus] = useState(null)

    const sendEmail = () => {
        setStatus('fetching')
        axios.post(`/contact` , requestBody)
            .then(res => {
                setStatus('success')
            })
            .catch(err => {
                setStatus('error')
            })
    }


    return [sendEmail , status]
}