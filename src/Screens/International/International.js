import { useState , useRef } from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Styles from './International.module.scss'
import { Link as NavLink } from 'react-router-dom';
import Locale from '../../Locale'

export default function International(){
    
    const [open , setOpen] = useState(false)
    const sliderRef = useRef(null)
    const  settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        vertical:true,
        verticalSwiping:true,
        // variableWidth:true,
        swipeToSlide:true,
      };
   
    const items = [0,1,2,3].map(index => {
        return (
            <div 
                className={`${Styles.item} ${!index ? Styles.first : index === 1 ? Styles.second : index === 2 ? Styles.third : Styles.fourth}`}
                key={index}
            >
                <div className={Styles.detail}>
                    <h2>Supporting <br /> our clients in <br /> 80 countries <br />accross the world</h2>
                    <h4>together as one</h4>
                </div>
            </div>
        )
    })
    
    return (
        <div className={`${Styles.international}`}>
                <div className={Styles.showList}>
                    <span className={`${Styles.mainIcon} ${open ? Styles.activeMainIcon : ''}`} onClick={() => setOpen(!open)}></span>
                    <span className={`${Styles.logo} icx icx-logo text-30 mx-2 text-white`} />
                </div>

            <div className={`${Styles.interList} ${open ? Styles.activeInterList : ''}`}>
                <div className='row'>
                    {/* menu */}
                    <div className='col-6 mx-auto d-flex justify-content-center'>
                        <ul className={`${Styles.list} ${open ? Styles.activeList : ''}`}>
                            <li>
                                <NavLink to="/company">
                                    {Locale['Company']}
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to='/international'>
                                    {Locale['International']}
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to='/client'>
                                    {Locale['Clients']}
                                </NavLink>
                            </li>
                            <li>
                                <NavLink className={`${Styles.teamLink}`} to='/team'>
                                    {Locale['Teams']}
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to='/contact'>
                                    {Locale['Contact']}
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
                <span className={`icx icx-close ${Styles.interClose}`} onClick={() => setOpen(false)}/>
            </div>
            <div className={Styles.Slider}>
                <Slider {...settings} ref={sliderRef}>
                    {items}
                </Slider>
            </div>
            <div className={Styles.arrow}>
                <span className='icx icx-arrow-down text-24' onClick={() => sliderRef.current.slickNext()} />
            </div>
        </div>
    )
}