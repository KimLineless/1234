import imglogo from '../img/KT_BBH.png'
import '../css/header.css'
import { BrowserRouter,Routes, Router,Switch,NavLink } from "react-router-dom";
import Equip from '../page/equip.js'
import Event from '../page/event.js'
import Inst from '../page/inst.js'
import Obsacle from '../page/obsacle.js'
import Sms from '../page/SMS.js'
import Stati from '../page/stati.js'
import User from '../page/user.js'
import Map from './Map.js'

function Header(){
    return(
        <header>
            <h1 className="logo"><img src={imglogo} alt='logo'></img></h1>
            <nav>
                <ul>
                <li>
                    <NavLink to="/map" element={<Map/>}>지도보기</NavLink>
                </li>
                <li>
                    <NavLink to="/inst" element={<Inst/>}>계측/센서관리</NavLink>
                </li>
                <li>
                    <NavLink to="/equip" element={<Equip/>}>장비/광센서관리</NavLink>
                </li>
                <li>
                    <NavLink to="/events" element={<Event/>}>이벤트정보</NavLink>
                </li>
                <li>
                    <NavLink to="/obsacle" element={<Obsacle/>}>장애정보</NavLink>
                </li>
                <li>
                    <NavLink to="/stati" element={<Stati/>}>통계</NavLink>
                </li>
                <li>
                    <NavLink to="/user" element={<User/>}>사용자관리</NavLink>
                </li>
                <li>
                    <NavLink to="/SMS" element={<Sms/>}>SMS관리</NavLink>
                </li>
                </ul>
            </nav>
        </header>
    )
}

export default Header