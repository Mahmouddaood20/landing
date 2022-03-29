import { useState } from 'react';
import { useSelector } from 'react-redux';
import Styles from './Clients.module.scss'
import Locale from '../../Locale';
import Layout from '../../Components/Layout/Layout';

import clientImg1 from '../../assets/images/client1.jpg'
import clientImg2 from '../../assets/images/client2.jpg'
import clientImg3 from '../../assets/images/client3.jpg'


const data = [
    {
        id:1,
        title: "Power & Energy",
        images:[
            clientImg1,
            clientImg2,
            clientImg3,
            clientImg2
        ]
    },
    {
        id:2,
        title: "Technology",
        images:[
            clientImg2,
            clientImg3,
            clientImg1,
        ]
    },
    {
        id:3,
        title: "Banking and Finance",
        images:[
            clientImg2,
            clientImg1,
            clientImg3,
        ]
    },
    {
        id:4,
        title: "Technology",
        images:[
            clientImg2,
            clientImg3,
            clientImg1,
            clientImg2,
            clientImg3
        ]
    },
    {
        id:5,
        title: "Power & energy",
        images:[
            clientImg2,
            clientImg3,
            clientImg1,
            clientImg3
        ]
    },
    {
        id:6,
        title: "Banking and finance",
        images:[
            clientImg2,
            clientImg3,
            clientImg1,
        ]
    },
    {
        id:7,
        title: "Miran",
        images:[
            clientImg1,
            clientImg3,
            clientImg2,
            clientImg3
        ]
    },
    {
        id:8,
        title: "Technology",
        images:[
            clientImg2,
            clientImg1,
            clientImg3,
            clientImg2
        ]
    },
]

export default function Clients(){

    const [open , setOpen] = useState(1)
    const locale = useSelector(state => state.locale_reducer.locale)

    return (
        <Layout>
            <div className='col-md-10 col-12 mx-auto'>
                <div className={Styles.clientDetail}>
                    <h2>{Locale['Clients_Title']}</h2>
                    {/* <p className='mt-3'>{Locale['Client_Description']}</p> */}
                    <div className={Styles.clientsDate} >
                        <div className='row'>
                            {data.map(item => {
                            return (
                                    <div className='col-12' key={item.id}>
                                        <button onClick={() => setOpen(item.id)} className={`btn btn-clear ${Styles.clientBtn} ${open === item.id ? Styles.activeClientBtn: ''} `} >
                                            {item.title}
                                        </button>
                                        
                                            <ul className={`${Styles.clientDropDown} ${open === item.id ? Styles.activeClientDropDown : ''} `} >
                                                {item.images.map((image , i) => {
                                                    return (
                                                        <li>
                                                            <a href="#">
                                                                <img src={image} width={200} height={150} alt="client1"/>
                                                            </a>
                                                        </li>
                                                    );
                                                })}
                                            </ul>
                                    </div>
                                ) 
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    )
}