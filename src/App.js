import { lazy , Suspense } from 'react';
import { Route , BrowserRouter as Router  , Switch } from 'react-router-dom';
import { useSelector } from 'react-redux';
import './scss/styles.scss';
import Locale from './Locale';

const Companies = lazy(() => import('./Screens/Companies/Companies'));
const Clients = lazy(() => import('./Screens/Clients/Clients'));
const Contact = lazy(() => import('./Screens/Contact/Contact'));
const Teams = lazy(() => import('./Screens/Teams/Teams'));
const Layout = lazy(() => import('./Components/Layout/Layout'));
const TeamDetail = lazy(() => import('./Screens/Teams/detail/TeamDetail'));

function App() {

    const locale = useSelector(state => state.locale_reducer.locale)
    Locale.setLanguage(locale)

    return (
        <Router>
            <Suspense fallback={null}>
                <Switch>
                    <Route path='/' exact component={Layout} />
                    <Route path='/company' exact component={Companies} />
                    <Route path='/client' exact component={Clients} />
                    <Route path='/contact' exact component={Contact} />
                    <Route path='/team' exact component={Teams} />
                    <Route path='/team/:id' exact component={TeamDetail} />
                </Switch>
            </Suspense>
        </Router>
    );
}

export default App;
