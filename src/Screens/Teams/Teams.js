import Layout from "../../Components/Layout/Layout";
import Styles from './Teams.module.scss'
import { useHistory } from 'react-router-dom';
import profileImg1 from '../../assets/images/profile1.jpg'
import profileImg2 from '../../assets/images/profile2.jpg'
import clientImg from '../../assets/images/client1.jpg'
import { useSelector } from "react-redux";
import Locale from "../../Locale";

export default function Teams(){

    const locale = useSelector(state => state.locale_reducer.locale)
    const history = useHistory()

    return (
        <Layout>
            <div className="col-md-10 col-12 mx-auto">
                <div className={Styles.teams}>
                    <h2>{Locale['Teams']}</h2>
                    <div className="row mt-5">
                        {[0,1,2,3].map((_ , index) => {
                            return (
                                <div className="col-md-3 col-12" key={index}>
                                    <button className=" btn btn-clear mt-3" onClick={() => history.push(`/team/${index + 1}`)}>
                                        <div className={Styles.profileImg}>
                                            <div className={Styles.imgContent}>
                                                 <img width={220} height={220} src={index % 2 === 0 ? profileImg1 : profileImg2} alt="profile 1" />
                                            </div>
                                            <h5 className={locale === "ar" ? 'ms-5' : 'me-5'}>Team {index + 1}</h5>
                                        </div>
                                    </button>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </Layout>
    )
}