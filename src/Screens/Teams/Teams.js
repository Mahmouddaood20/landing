import Layout from "../../Components/Layout/Layout";
import { useSelector } from "react-redux";
import { useHistory } from 'react-router-dom';
import Styles from './Teams.module.scss'
import Locale from "../../Locale";
import profileImg1 from '../../assets/images/profile1.jpg'
import profileImg2 from '../../assets/images/profile2.jpg'

const data = [
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

export default function Teams(){

    const locale = useSelector(state => state.locale_reducer.locale)
    const history = useHistory()

    return (
        <Layout>
            <div className="col-md-10 col-12 mx-auto">
                <div className={Styles.teams}>
                    <h2>{Locale['Teams']}</h2>
                    <div className="row mt-4">
                        {data.map(item => {
                            return (
                                <div className="col-md-3 col-12" key={item.id}>
                                    <button className=" btn btn-clear mt-3" onClick={() => history.push({
                                        pathname:`/team/${item.id}`,
                                        state: { item }
                                    })}>
                                        <div className={Styles.profileImg}>
                                            <div className={Styles.imgContent}>
                                                 <img width={190} height={190} src={item.image} alt="profile 1" />
                                            </div>
                                            <h5 className={locale === "ar" ? 'ms-5' : 'me-5'}>{item.name}</h5>
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