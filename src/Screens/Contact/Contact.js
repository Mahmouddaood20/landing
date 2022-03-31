import { useState } from "react";
import Layout from "../../Components/Layout/Layout";
import useSendEmail from "../../hooks/Contact/useSendEmail";
import Locale from "../../Locale";
import Styles from './Contact.module.scss';

export default function Contact(){

    const [company , setCompany] = useState("")
    const [name , setName] = useState("")
    const [email , setEmail] = useState("")
    const [mobile , setMobile] = useState("")
    const [message , setMessage] = useState("")

    const requestBody = {
        "company": company,
        "name": name,
        "email": email,
        "mobile": mobile,
        "message": message
    }

    // console.log(requestBody)
    const [sendEmail , status] = useSendEmail(requestBody)

    return (
        <Layout
         >
            <div className='col-md-10 col-12 mx-auto'>
                <div className={Styles.contact}>
                    <div className="row">
                        <div className="col-12 text-center">
                            <h2>{Locale['Contact_Us']}</h2>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12 mt-4">
                            <div className="row align-items-center">
                                <div className="col-md-2 col-4">
                                    <h5>{Locale['Company']} : </h5>
                                </div>
                                <div className="col-md-10 col-8">
                                    <input 
                                        className="form-control text-18"
                                        placeholder={Locale['Company']}
                                        onChange={e => setCompany(e.target.value)}
                                        value={company}
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="col-12 mt-4">
                            <div className="row align-items-center">
                                <div className="col-md-2 col-4">
                                    <h5>{Locale['Name']} :</h5>
                                </div>
                                <div className="col-md-10 col-8">
                                    <input 
                                        className="form-control text-18"
                                        placeholder={Locale['Name']}
                                        onChange={e => setName(e.target.value)}
                                        value={name}
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="col-12 mt-4">
                            <div className="row align-items-center">
                                <div className="col-md-2 col-4">
                                    <h5>{Locale['Email']} :</h5>
                                </div>
                                <div className="col-md-10 col-8">
                                    <input 
                                        className="form-control text-18"
                                        placeholder={Locale['Email']}
                                        onChange={e => setEmail(e.target.value)}
                                        value={email}
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="col-12 mt-4">
                            <div className="row align-items-center">
                                <div className="col-md-2 col-4">
                                    <h5>{Locale['Mobile']} :</h5>
                                </div>
                                <div className="col-md-10 col-8">
                                    <input 
                                        className="form-control text-18"
                                        placeholder={Locale['Mobile']}
                                        onChange={e => setMobile(e.target.value)}
                                        value={mobile}
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="col-12 mt-4">
                            <div className="row align-items-center">
                                <div className="col-md-2 col-4">
                                    <h5>{Locale['Message']} :</h5>
                                </div>
                                <div className="col-md-10 col-8">
                                    <textarea
                                        rows={4}
                                        onChange={e => setMessage(e.target.value)}
                                        value={message}
                                        className="form-control text-18"
                                        placeholder={Locale['Message']}
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="col-6 mx-auto mt-4">
                            <div className="row align-items-center">
                                <div className="col-md-6 col-12">
                                    <button onClick={sendEmail} className="btn btn-primary w-100 text-18 fw-bold">
                                        {Locale['Send']}
                                    </button>
                                </div>
                                <div className="col-md-6 col-12">
                                    <button className="btn btn-danger w-100 text-18 fw-bold">
                                        {Locale['Cancel']}
                                    </button>
                                </div>
                            </div>
                        </div>
                       
                    </div>
                </div>
            </div>
        </Layout>
    )
}