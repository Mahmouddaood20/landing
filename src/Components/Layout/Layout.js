import { useState , useEffect } from 'react';
import Styles from './Layout.module.scss'
import { Link as NavLink , useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Locale from '../../Locale'
import arbImg from '../../assets/images/arb.png';
import engImg from '../../assets/images/eng.jpg';
import menuImg from '../../assets/images/menu.png'
import globalImg from '../../assets/images/worldwide.png'

export default function Layout({
    children,
    background
}){
    
    const [openDrop , setOpenDrop] = useState(false)
    const [open , setOpen] = useState(false)
    const [selected , setSelected] = useState(1)
    const dispatch = useDispatch()
    const location = useLocation()
    const locale = useSelector(state => state.locale_reducer.locale)
    console.log("DOc", )

    const changeLocale = lang => () => {
        dispatch({
            type : "Change_Current_Locale",
            locale: lang
        })
        setOpenDrop(false)
    }

    useEffect(() => {
        document.body.style.direction = locale === "ar" ? "rtl" : "ltr"
    } , [locale])

    return (
        <div className={`${Styles.layout} ${location.pathname !== "/" ? Styles.activeLayout : ''}`}>
            <div className='container'>
                <div className={Styles.showList}>
                    <span className={`${Styles.mainIcon} ${location.pathname === "/" ? Styles.firstMainIcon : ''} ${open ? Styles.activeMainIcon : ''}`} onClick={() => setOpen(!open)}></span>
                    <span className={`${Styles.explore} ${location.pathname === "/" ? Styles.firstExplore : ''} ${open ? 'd-none' : ''}`}>explore</span>
                    {/* <ul className={`${Styles.closeMenu} ${open ? Styles.activeCloseMenu : ''}`}>
                        <li>
                            <NavLink 
                                to={'/company'}
                                className={`${Styles.closeItem} ${location.pathname === "/company" ? Styles.acitveCloseItem : ''}`}
                            >
                                Company
                            </NavLink>
                        </li>
                        <li>
                            <NavLink 
                                to={'/international'}
                                className={`${Styles.closeItem} ${location.pathname === "/international" ? Styles.acitveCloseItem : ''}`}
                            >
                                International
                            </NavLink>
                        </li>
                        <li>
                            <NavLink 
                                to={'/client'}
                                className={`${Styles.closeItem} ${location.pathname === "/client" ? Styles.acitveCloseItem : ''}`}
                            >
                                Clients
                            </NavLink>
                        </li>
                        <li>
                            <NavLink 
                                to={'/team'}
                                className={`${Styles.closeItem} ${location.pathname === "/team" ? Styles.acitveCloseItem : ''}`}
                            >
                                Teams
                            </NavLink>
                        </li>
                        <li>
                            <NavLink 
                                to={'/contact'}
                                className={`${Styles.closeItem} ${location.pathname === "/contact" ? Styles.acitveCloseItem : ''}`}
                            >
                                Contact
                            </NavLink>
                        </li>
                    </ul> */}
                </div>

                <div className='row'>
                    {/* menu */}
                    <div className='col-6 mx-auto d-flex justify-content-center'>
                        <ul className={`${Styles.list} ${open ? Styles.activeList : ''}`}>
                            <li>
                                <NavLink className={`${location.pathname === "/" ? 'text-white ' : 'text-main'}`} to="/company">
                                    {Locale['Company']}
                                </NavLink>
                            </li>
                            <li>
                                <NavLink className={`${location.pathname === "/" ? 'text-white ' : 'text-main'}`} to='/international'>
                                    {Locale['International']}
                                </NavLink>
                            </li>
                            <li>
                                <NavLink className={`${location.pathname === "/" ? 'text-white ' : 'text-main'}`} to='/client'>
                                    {Locale['Clients']}
                                </NavLink>
                            </li>
                            <li>
                                <NavLink className={`${Styles.teamLink} ${location.pathname === "/" ? 'text-white ' : 'text-main'}`} to='/team'>
                                    {Locale['Teams']}
                                </NavLink>
                            </li>
                            <li>
                                <NavLink className={`${location.pathname === "/" ? 'text-white ' : 'text-main'}`} to='/contact'>
                                    {Locale['Contact']}
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                    {!open && 
                        <>
                            <div 
                                className={`${location.pathname === "/client" || location.pathname === "/team" ? 'h-90' : 'h-80'}`}>
                                {children}
                            </div>
                            <footer className={`${location.pathname !== "/" ? 'text-gray' : 'text-white'} mt-3`}>
                                <div className='col-md-6 mx-auto'>
                                        <div className='d-flex align-items-center justify-content-center'>
                                            <div className='me-md-5 me-2'>
                                                <h2>Abdullah AlHudaithi</h2>
                                                <h3>Professional Services</h3>
                                            </div>
                                            <div className={Styles.divider} />
                                            <div className='ms-md-5 ms-1 d-flex align-items-start'>
                                                <img 
                                                    src={globalImg}
                                                    alt='global image'
                                                    className='me-3'
                                                />
                                                <h4>Proud Member of <br /> <span>Alliott Global Alliance</span></h4>
                                            </div>
                                        </div>
                                </div>
                            </footer>
                        </>
                    }
                </div>
            </div>
        </div>
    )
}