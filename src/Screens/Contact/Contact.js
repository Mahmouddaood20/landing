import Layout from "../../Components/Layout/Layout";
import Locale from "../../Locale";
import Styles from './Contact.module.scss';

export default function Contact(){
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
                                        className="form-control text-18"
                                        placeholder={Locale['Message']}
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="col-6 mx-auto mt-4">
                            <div className="row align-items-center">
                                <div className="col-md-6 col-12">
                                    <button className="btn btn-primary w-100 text-18 fw-bold">
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