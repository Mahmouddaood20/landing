// import { useSelector } from 'react-redux';
import Styles from './International.module.scss'
import Locale from '../../Locale';
import Layout from '../../Components/Layout/Layout';

export default function International(){

    // const locale = useSelector(state => state.locale_reducer.locale)

    return (
        <Layout>
            <div className='col-md-10 col-12 mx-auto'>
                <div className={Styles.International}>
                    <h2>{Locale['International']}</h2>

                </div>
            </div>
        </Layout>
    );

}    