import Layout from "../../Components/Layout/Layout";
import { useSelector } from "react-redux";
import { useHistory } from 'react-router-dom';
import Styles from './Teams.module.scss'
import Locale from "../../Locale";
import useFetchTeams from "../../hooks/Teams/useFetchTeams";

export default function Teams(){

    const locale = useSelector(state => state.locale_reducer.locale)
    const history = useHistory()
    const [data , status] = useFetchTeams()

    console.log("Teams" , data , status)
  
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