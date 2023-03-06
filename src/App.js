import './css/App.css';
import Header from './layout/header.js'
import Section from './layout/section.js'
import {Slide} from './layout/Slide.js'
// 
import imglogo from './img/KT_BBH.png'
import './css/header.css'
import { BrowserRouter,Route, Router,Switch,NavLink } from "react-router-dom";
// import Equip from './page/equip.js'
// import Event from './page/event.js'
// import Inst from './page/inst.js'
// import Obsacle from './page/obsacle.js'
// import Sms from './page/SMS.js'
// import Stati from './page/stati.js'
// import User from './page/user.js'
// import Map from './layout/Map.js'


function App() {
  return (
    <div className="App">
      <header>
            <h1 className="logo"><img src={imglogo} alt='logo'></img></h1>
            <nav>
                <ul>
                    <li>
                      <NavLink to="/map">지도보기</NavLink>
                    </li>
                </ul>
                <ul>
                    <li>
                      <NavLink to="/inst">계측/센서관리</NavLink>
                    </li>
                </ul>
                <ul>
                    <li>
                      <NavLink to="/equip">장비/광센서관리</NavLink>
                    </li>
                </ul>
                <ul>
                    <li>
                      <NavLink to="/events">이벤트정보</NavLink>
                    </li>
                </ul>
                <ul>
                    <li>
                      <NavLink to="/obsacle">장애정보</NavLink>
                    </li>
                </ul>
                <ul>
                    <li>
                      <NavLink to="/stati">통계</NavLink>
                    </li>
                </ul>
                <ul>
                    <li>
                      <NavLink to="/user">사용자관리</NavLink>
                    </li>
                </ul>
                <ul>
                    <li>
                      <NavLink to="/SMS">SMS관리</NavLink>
                    </li>
                </ul>
            </nav>
        </header>
      {/* <Header/> */}
      <Section/>
      <Slide/> 
    </div>
  );

}

export default App;
