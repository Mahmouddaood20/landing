import { useState, useRef } from 'react';
import { Modal } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import Styles from './Clients.module.scss'
import AddClient from './AddClient/AddClient'
import Locale from '../../Locale';
import Layout from '../../Components/Layout/Layout';
import { data } from './data'
import useFetchClients from '../../hooks/Clients/useFetchClients';

export default function Clients(){

    const [open , setOpen] = useState(1)
    const [showModal , setShowModal] = useState(false)
    const locale = useSelector(state => state.locale_reducer.locale)
    // const [data , status] = useFetchClients()

    return (
        <Layout>
            <div className='col-md-10 col-12 mx-auto'>
                <div className={Styles.clientDetail}>
                    <div className='row align-items-center justify-content-between'>
                        <div className='col-6'>
                            <h2>{Locale['Clients_Title']}</h2>
                        </div>
                        <div className='col-6 text-end'>
                            <AddClient />
                        </div>
                    </div>
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
                                                                <img src={image} alt="client1"/>
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