import { useState } from 'react'
import '../css/slide.css'

const Slide = ()=>{
    
const [visivle,setVisible]=useState(false)

    return(
        <div className={visivle?"slide_box":"slide_box on"}>
        <div className='slide'>
            <div>
                <p>구조물 관리</p>
            </div>
            <div>
                <p><span>이벤트 발생</span> / 전체 센서 수</p>
            </div>
            <div>
                <p>실시간 장애 현황</p>
            </div>
        </div>
        
        <div className='btn' onClick={()=>{
            setVisible(!visivle);
        }}>
            {visivle?">":"<"}
        </div>
        </div>
        
    )
}





function BtnHandler(){




}

export {Slide,BtnHandler}