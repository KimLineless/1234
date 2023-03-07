import React from 'react';
import List from "../component/List.js"
import Select from "../component/select.js"
import Chart from "../component/chart.js"
import P from "../component/P.js"
import "../css/sub.css"

const Inst = () => {
    return (
        <div className='inst'>  
            <div className='inst_hd'>
                <p>계측/센서관리</p>
            </div>
            <div className='sub_wrap'>
                <div className='sub'>
                    <div className='sub_top'>
                        <h3>관리조직목록</h3>
                        <ul className='gnb'>
                            <List name="서울 병행"/>
                            <List name="북부고객본부"/>
                            <List name="동부고객본부"/>
                            <List name="서부고객본부"/>
                            <List name="부산 병행"/>
                            <List name="부산/경남고객본부"/>
                            <List name="대구/경북고객본부"/>
                            <List name="충남/충북고객본부"/>
                        </ul>
                    </div>
                    <div className='sub_bot'>
                        <P value="광화문 BBH"/>
                        <div className='box'></div>
                    </div>
                </div>
                <div className='sub_main'>
                    <P value="실시간 모니터링"/>
                    <div className='sel'>
                        <P value="검색조건"/>
                        <Select name="센서 종류" op1="?" op2="?"/>
                        <Select name="센서명" op1="?" op2="?"/>
                        <Select name="센서 ID" op1="?" op2="?"/>
                    </div>
                    <div className='main_box'>
                        <div className='chart_name'>
                            <div className='chart_hd'>
                                <P value="장비명"/>
                                <P value="센서명"/>
                                <P value="센서ID"/>
                            </div>
                        </div>
                        <div className='chart'>
                            <Chart/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Inst;