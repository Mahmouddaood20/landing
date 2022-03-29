import { useState } from 'react';
import Styles from './Clients.module.scss'

import clientImg1 from '../../assets/images/client1.jpg'
import clientImg2 from '../../assets/images/client2.jpg'
import clientImg3 from '../../assets/images/client3.jpg'
import Layout from '../../Components/Layout/Layout';
import Locale from '../../Locale';
import { useSelector } from 'react-redux';


export default function Clients(){

    const [open , setOpen] = useState(0)
    const locale = useSelector(state => state.locale_reducer.locale)

    return (
        <Layout>
            <div className='col-md-10 col-12 mx-auto'>
                <div className={Styles.clientDetail}>
                    <h2>{Locale['Clients_Title']}</h2>
                    {/* <p className='mt-3'>{Locale['Client_Description']}</p> */}
                    <div className={Styles.clientsDate} >
                        {/* <div className='row'>
                            {[0,1,2,3,4,5,6,7,8,9,10].map((_ , index) => {
                            return (
                                    <div className='col-3' key={index}>
                                        <button onClick={() => setOpen(index)} className="btn btn-clear py-2 px-5 text-22 fw-bold" >
                                            Miran
                                        </button>
                                        {open === index ? 
                                            <ul className={`${Styles.clientDropDown} ${open !== index ? 'd-none' : index % 4 === 0 ? 'float-left' : 'float-right'} `} >
                                                <li>
                                                    <a href="#">
                                                        <img src={clientImg1} width={130} height={130} alt="client1"/>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#">
                                                        <img src={clientImg2} width={130} height={130} alt="client2"/>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#">
                                                        <img src={clientImg3} width={130} height={130} alt="client3"/>
                                                    </a>
                                                </li>
                                                {(index === 3 || index === 6 || index === 8) && <li>
                                                    <a href="#">
                                                        <img src={clientImg3} width={130} height={130} alt="client3"/>
                                                    </a>
                                                </li>}
                                            </ul>
                                            : ''
                                        }
                                    </div>
                                ) 
                            })}
                        </div> */}

                        <div className='row'>
                            {[0,1,2,3,4,5,6,7,8,9,10].map((_ , index) => {
                            return (
                                    <div className='col-12' key={index}>
                                        <button onClick={() => setOpen(index)} className={`btn btn-clear ${Styles.clientBtn} ${open === index ? Styles.activeClientBtn: ''} `} >
                                            {locale === "ar" ? " شركة ميران" : "Banking and Finance"}
                                        </button>
                                        
                                            <ul className={`${Styles.clientDropDown} ${open === index ? Styles.activeClientDropDown : ''} `} >
                                                <li>
                                                    <a href="#">
                                                        <img src={clientImg1} width={200} height={150} alt="client1"/>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#">
                                                        <img src={clientImg2} width={200} height={150} alt="client2"/>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#">
                                                        <img src={clientImg3} width={200} height={150} alt="client3"/>
                                                    </a>
                                                </li>
                                                {(index === 3 || index === 0 || index === 8) && <li>
                                                    <a href="#">
                                                        <img src={clientImg3} width={200} height={150} alt="client3"/>
                                                    </a>
                                                </li>}
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