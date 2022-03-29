import Layout from '../../Components/Layout/Layout'
import Locale from '../../Locale';
import Styles from './Companies.module.scss'

import companyImg from '../../assets/images/company.jpg'

export default function Companies(){
    return (
        <Layout background={'light'}>
            <div className='col-md-10 mx-auto col-12'>
                <div className={Styles.detail}>
                    {/* <h1>{Locale['Company_Info']}</h1>
                    <p>
                        {Locale['Company_Description']}
                    </p> */}
                    <div className={Styles.companyImage}>
                        <img 
                            src={companyImg}
                            alt="company image"
                        />
                    </div>
                    <p>Abdullah AlHudaithi Charteded Accountants - A Professional Limited Company , and a proud of Alliott Global Alliance 
                       (Referred to as: AlHudaithi Alliott Global), is a full licensed company 
                       by Ministry of Commerce , Working directly under the supervision of Saudi Organization for Chartere and Professional Accountants
                       with passion for growth , focused primarily on Accounting , tax, Audit. with international and Middle-East Level Clients.
                       All Directors in this young , ambitious firm have already been through a proper , lengthly experience in big four firms
                       We Managed to establish Ourseleves immediately as a mid-tier accounting firm growing fast and serving more than two Hundred clients
                       in only our second year. The aim is always to keep developing towards reaching a leading position at the forefront of Professional
                       services firms . through hard work accompanied by recognized knowledge and high quality.
                    </p>
                </div>
            </div>
        </Layout>
    );
}