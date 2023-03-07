import './css/App.css';
import Header from './layout/header.js'
import Main from './layout/main.js'
import { Routes,Route } from "react-router-dom";

// 
import Equip from './page/equip.js'
import Event from './page/event.js'
import Inst from './page/inst.js'
import Obsacle from './page/obsacle.js'
import Sms from './page/SMS.js'
import Stati from './page/stati.js'
import User from './page/user.js'


function App() {
  return (
    <div className="App">
      <Header />
				<Routes>
					<Route path="/" element={<Main />}></Route>
					<Route path="/inst" element={<Inst />}></Route>
					<Route path="/equip" element={<Equip />}></Route>
					<Route path="/event" element={<Event />}></Route>
					<Route path="/obsacle" element={<Obsacle />}></Route>
					<Route path="/sms" element={<Sms />}></Route>
					<Route path="/stati" element={<Stati />}></Route>
					<Route path="/user" element={<User />}></Route>
				</Routes>
    </div>
  );

}

export default App;
