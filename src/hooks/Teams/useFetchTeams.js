import { useState, useEffect } from 'react';
import axios from "../../axios";
import profileImg1 from '../../assets/images/profile1.jpg'
import profileImg2 from '../../assets/images/profile2.jpg'

const customData = [
    {
        id:1,
        name:"Omar K. Alqarari",
        image: profileImg1
    },
    {
        id:2,
        name:"Mr Abdallah AlHudithi",
        image: profileImg2
    },
    {
        id:3,
        name:"Mahmoud Dawoud",
        image: profileImg2
    },
    {
        id:4,
        name:"Team Member",
        image: profileImg1
    },
    // {
    //     id:5,
    //     name:"Arshavin",
    //     image: profileImg2
    // },
    // {
    //     id:6,
    //     name:"Team Member",
    //     image: profileImg1
    // }
]

export default function useFetchTeams() {
    
    const [status, setStatus] = useState(null)
    const [data , setData] = useState([])

    useEffect(() => {
        console.log("fetch Teams")
        setStatus('fetching')
        axios.get(`/teams`)
            .then(res => {
                debugger
                console.log("res =>", res)
                setData(res.data)
                setStatus('success')
        })
        .catch(err => {
            debugger
            console.log("err =>", err)
            setStatus('error')
        })
        setData(customData)
    }, [])


    return [data , status]
}