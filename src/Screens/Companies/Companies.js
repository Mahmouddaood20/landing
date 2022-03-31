import { useRef, useState } from 'react';
import Layout from '../../Components/Layout/Layout'
import Locale from '../../Locale';
import Styles from './Companies.module.scss'

import companyImg from '../../assets/images/company.jpg'
import useAddInfo from '../../hooks/About/useAddInfo';

export default function Companies(){
    const [inputShown , setInputShown] = useState(false)
    const [fileShown , setFileShown] = useState(false)
    const [about , setAbout] = useState("")
    const [image , setImage] = useState({
        imgForSent: "",
        imgforDisplay:""
    })
    const inputRef = useRef(null)
    const formBody = new FormData()
    formBody.append("about" , about)
    formBody.append("image" , image.imgForSent)

    // const requestBody = {
    //     "about": about,
    //     "image": image.imgForSent
    // }

    // console.log(requestBody)
    const [addInfo , status] = useAddInfo(formBody)

    return (
        <Layout background={'light'}>
            <div className='col-md-10 mx-auto col-12'>
                <div className={Styles.detail}>
                    {/* <h1>{Locale['Company_Info']}</h1>
                    <p>
                        {Locale['Company_Description']}
                    </p> */}
                    <button 
                        className={`${Styles.companyImage} btn btn-clear`}
                        onClick={() => inputRef.current.click()}
                    >
                        <img 
                            src={image.imgforDisplay !== "" ? image.imgforDisplay : companyImg}
                            alt="company image"
                        />
                        <input 
                            type="file"
                            className='d-none'
                            ref={inputRef}
                            onChange={e => {
                                const reader = new FileReader();
                                reader.onload = () => {
                                    setImage({
                                        imgForSent: e.target.files[0],
                                        imgforDisplay: reader.result
                                    })
                                }
                                reader.readAsDataURL(e.target.files[0]);
                            
                            }}
                        />
                    </button>
                    <p onClick={() => setInputShown(!inputShown)} className={`${inputShown ? 'd-none' : ''}`}>
                        Abdullah AlHudaithi Charteded Accountants - A Professional Limited Company , and a proud of Alliott Global Alliance 
                        (Referred to as: AlHudaithi Alliott Global), is a full licensed company 
                        by Ministry of Commerce , Working directly under the supervision of Saudi Organization for Chartere and Professional Accountants
                        with passion for growth , focused primarily on Accounting , tax, Audit. with international and Middle-East Level Clients.
                        All Directors in this young , ambitious firm have already been through a proper , lengthly experience in big four firms
                        We Managed to establish Ourseleves immediately as a mid-tier accounting firm growing fast and serving more than two Hundred clients
                        in only our second year. The aim is always to keep developing towards reaching a leading position at the forefront of Professional
                        services firms . through hard work accompanied by recognized knowledge and high quality.
                    </p>
                    {inputShown ? 
                        <>
                            <textarea 
                                className='form-control'
                                rows={6}
                                onChange={e => setAbout(e.target.value)}
                                placeholder="Add Info"
                            />
                            <div className='row align-items-center'>
                                <div className='col-md-6 col-12 mx-auto d-flex'>
                                    <button 
                                        className='btn btn-primary w-50 my-3 mx-2'
                                        onClick={addInfo}
                                    >
                                        {Locale['Submit']}
                                    </button>
                                    <button 
                                        className='btn btn-danger w-50 my-3 mx-2'
                                        onClick={() => setInputShown(false)}
                                    >
                                        {Locale['Cancel']}
                                    </button>
                                </div>
                            </div>
                        </>
                        : ''
                    }
                </div>
            </div>
        </Layout>
    );
}