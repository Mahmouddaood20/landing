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
                <div className='row align-items-center justify-content-end position-relative'>
                    <div className={Styles.showList}>
                        <span className={`${Styles.mainIcon} ${location.pathname === "/" ? Styles.firstMainIcon : ''} ${open ? Styles.activeMainIcon : ''}`} onClick={() => setOpen(!open)}></span>
                        <span className={`${Styles.explore} ${location.pathname === "/" ? Styles.firstExplore : ''} ${open ? 'd-none' : ''}`}>{Locale['Explore']}</span>
                        <ul className={`${Styles.closeMenu} ${open ? Styles.activeCloseMenu : ''}`}>
                            <li>
                                <NavLink 
                                    to={'/company'}
                                    className={`${Styles.closeItem} ${location.pathname === "/company" ? Styles.acitveCloseItem : ''}`}
                                >
                                    {Locale['Company']}
                                </NavLink>
                            </li>
                            <li>
                                <NavLink 
                                    to={'/client'}
                                    className={`${Styles.closeItem} ${location.pathname === "/client" ? Styles.acitveCloseItem : ''}`}
                                >
                                    {Locale['Clients']}
                                </NavLink>
                            </li>
                            <li>
                                <NavLink 
                                    to={'/team'}
                                    className={`${Styles.closeItem} ${location.pathname === "/team" ? Styles.acitveCloseItem : ''}`}
                                >
                                    {Locale['Teams']}
                                </NavLink>
                            </li>
                            <li>
                                <NavLink 
                                    to={'/contact'}
                                    className={`${Styles.closeItem} ${location.pathname === "/contact" ? Styles.acitveCloseItem : ''}`}
                                >
                                    {Locale['Contact']}
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                    <div className={Styles.drop}>
                        <div className={`${Styles.dropItem}`} onClick={() => setOpenDrop(!openDrop)}>
                            <div className={`d-flex align-items-center ${locale === "ar" ? 'ms-2' : 'me-2'}`}>
                                <img src={locale === "ar" ? arbImg : engImg} width={35} height={30} alt="eng icon" />
                                <h3 className={`mt-2 ${locale === "ar" ? 'me-1' : 'ms-1'}`}>{locale === "ar" ? Locale['Arabic'] : Locale['English']}</h3>
                            </div>
                            <span className='icx icx-arrow-down fw-bold text-main text-14' />
                        </div>
                        <div className={`${Styles.content} ${openDrop ? Styles.showContent : ''}`}>
                            <div 
                                className={`${locale === "ar" ? Styles.activeDropItem : ''} ${Styles.dropItem} `} 
                                onClick={changeLocale("ar")} 
                            >
                                <div className={`d-flex align-items-center ${locale === "ar" ? 'ms-2' : 'me-2'}`}>
                                    <img src={arbImg} className="radius-10" width={25} height={25} alt="eng icon" />
                                    <h3 className={`mt-2 ${locale === "ar" ? 'me-1' : 'ms-1'}`}>{Locale['Arabic']}</h3>
                                </div>
                            </div>
                            <div 
                                className={`${locale === "en" ? Styles.activeDropItem : ''} ${Styles.dropItem}`}
                                onClick={changeLocale("en")}
                            > 
                                <div className={`d-flex align-items-center ${locale === "ar" ? 'ms-2' : 'me-2'}`}>
                                    <img src={engImg} className="radius-10" width={25} height={25} alt="eng icon" />
                                    <h3 className={`mt-2 ${locale === "ar" ? 'me-1' : 'ms-1'}`}>{Locale['English']}</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='row'>
                    {/* menu */}
                    {/* <div className='col-6 mx-auto'>
                        <ul className={`${Styles.list} ${open ? Styles.activeList : ''}`}>
                            <li><NavLink className={`${location.pathname === "/" ? 'text-white ' : 'text-main'}`} to="/">{Locale['Companies']}</NavLink></li>
                            <li><NavLink className={`${location.pathname === "/" ? 'text-white ' : 'text-main'}`} to='/client'>{Locale['Clients']}</NavLink></li>
                            <li><NavLink className={`${location.pathname === "/" ? 'text-white ' : 'text-main'}`} to='/team'>{Locale['Teams']}</NavLink></li>
                            <li><NavLink className={`${location.pathname === "/" ? 'text-white ' : 'text-main'}`} to='/contact'>{Locale['Contact']}</NavLink></li>
                        </ul>
                    </div> */}
                    {/* {!open &&  */}
                        <>
                            <div 
                                className={`${location.pathname === "/client" || location.pathname === "/team" ? 'h-90' : 'h-80'}`}>
                                {children}
                            </div>
                            <footer className={`${location.pathname !== "/" ? 'text-gray' : 'text-white'} ${location.pathname === "/" ? 'mt-0' : 'mt-3'} text-center`}>
                                <div className='col-md-6 mx-auto d-flex justify-content-center'>
                                        <div className='d-flex align-items-center'>
                                            <div className={`${locale === "ar" ? 'ms-md-5 ' : 'me-md-5'} ${locale === "ar" ? 'ms-2' : 'me-2'}`}>
                                                <h2>{Locale['Abdullah AlHudaithi']}</h2>
                                                <h3>{Locale['Professional_Services']}</h3>
                                            </div>
                                            <div className={Styles.divider} />
                                            <div className={` ${locale === "ar" ? 'me-md-5 ' : 'ms-md-5'} ${locale === "ar" ? 'me-1 ' : 'ms-1'} d-flex align-items-start`}>
                                                <img 
                                                    src={globalImg}
                                                    alt='global image'
                                                    className={`${locale === "ar" ? 'ms-3' : 'me-3'}`}
                                                />
                                                <h4>{Locale['Proud_Member_of']} <br /> <span>{Locale['Alliott_Global_Alliance']}</span></h4>
                                            </div>
                                        </div>
                                </div>
                            </footer>
                        </>
                    {/* } */}
                </div>
            </div>
        </div>
    )
}