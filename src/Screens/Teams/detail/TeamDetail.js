import Styles from './Team.module.scss'
import { useHistory } from 'react-router-dom'
import Layout from '../../../Components/Layout/Layout'
import useFetchTeam from '../../../hooks/Teams/useFetchTeam'

export default function TeamDetail(){
    const history = useHistory()
    const item = history.location.state.item
    // const [team , status] = useFetchTeam(item.id)

    return (
        <Layout>
            <div className="col-md-10 col-12 mx-auto">
                <div className={Styles.team}>
                    <div className={Styles.imgContent}>
                        <img src={item.image} alt="profile 1" />
                    </div>
                    <h2>{item.name}</h2>
                    <h5>Exceutive Director</h5>
                    <p>Graduating from King Saud University with a first honor degree . Omar came through Delaitte's ranks for more than 8 years as a manager .
                       His Significant covers manufacrturing and constracting sectors . telecom , investment banks , mutual funds,
                       insurance , government institutions , hospitals and educational establishments. Omar carries a very high reputation in the field.
                       and one of the most accomplished professionals our firm has . He specialized in listed company's audit and assurance services for both IFRS and IFRS for SMS,
                       IFRS conversion focusing on IFRS 9 , IFRS 15 16 modelling , he also offers great skills as an acting CFO. 
                    </p>
                </div>
            </div>
        </Layout>
    )
}