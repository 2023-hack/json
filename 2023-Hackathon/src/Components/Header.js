import './css/Header.css';
import headLogo from '../assets/images/menu 1.png';
import cp from '../assets/images/cp.png';
import {Link} from "react-router-dom";

import {useRef} from "react";

function Header() {

    const filter = useRef();

    const tlq = useRef();

    const tlqk = useRef();

    const showFilter = () => {
        filter.current.style.display = "flex";
        for(let i=0; i<=100; i++) {
            setTimeout(()=> {
                filter.current.style.width = `${i*0.4}%`;
            }, 5*i); //js의 비동기적 처리?
        }
        filter.current.style.height = "100%";
        setTimeout(()=>{
            tlq.current.style.opacity = "100%";
        }, 750);
        setTimeout(()=>{
            tlqk.current.style.opacity = "100%";
        },650);
    }

    const closeFilter = () => {
        filter.current.style.display = "none";
        filter.current.style.width = "0%";
        filter.current.style.height = "0%";
        tlq.current.style.opacity = "0%";
        tlqk.current.style.opacity = "0%";
    }


    return(
        <div className="header">
            <div className='header1'>
                <img src={headLogo} className="img1" alt="BigCo Inc. logo" onClick={showFilter}/>
                <h1>
                    <div class="small" ref={filter}>
                        <div className='closebtn' onClick={closeFilter}></div>
                        <div className='filter'>
                            <div class="filter-con">
                                <img src={cp} className="img2" alt="logo"/>
                                <div ref={tlqk} class="font-filter">필터 설정</div>
                            </div>
                            <div className='tlq' ref={tlq}>
                            <div class='gen'><span class="red">*</span>성별</div><br/>
                            <div class="gender">
                                <button class="button2">여자</button>
                                <button class="button2">남자</button>
                            </div>

                            <div class='gen'><span class="red">*</span>계절</div><br/>
                            <div class="weather">
                                <button class="button3">봄</button>
                                <button class="button3">여름</button>
                                <button class="button3">가을</button>
                                <button class="button3">겨울</button>
                            </div>
                            
                            <div class='gen'><span class="red">*</span>몸무게</div><br/>
                            <div class="weat">
                                <button class="button4">~39kg</button>
                                <button class="button4">40~44kg</button>
                                <button class="button4">45~49kg</button>
                                <button class="button4">50~54kg</button>
                                <button class="button4">55~59kg</button>
                                <button class="button4">60~64kg</button>
                                <button class="button4">65~69kg</button>
                                <button class="button4">70~74kg</button>
                                <button class="button4">75~79kg</button>
                                <button class="button4">80~84kg</button>
                                <button class="button4">85~89kg</button>
                                <button class="button4">90kg~</button>
                            </div>

                            <div class='gen'><span class="red">*</span>몸무게</div><br/>
                            <div class="height">
                                <button class="button5">~139cm</button>
                                <button class="button5">140~144cm</button>
                                <button class="button5">145cm~149cm</button>
                                <button class="button5">150cm~154cm</button>
                                <button class="button5">155~159cm</button>
                                <button class="button5">160~164cm</button>
                                <button class="button5">165cm~169cm</button>
                                <button class="button5">170~174cm</button>
                                <button class="button5">175~179cm</button>
                                <button class="button5">180~184cm</button>
                                <button class="button5">185~189cm</button>
                                <button class="button5">~189cm</button>
                            </div>
                            </div>
                        </div>
                    </div>
                    <Link to ='/'>
                        오늘의 코디
                    </Link>
                </h1>
            </div>
            
            <div className='header2'>
                <Link to ='/star in'>
                    <div className='list'>즐겨찾기</div>
                </Link>
                <Link to ='/nostar in'>
                    <div className='list'>트랜드</div>
                </Link>
                <Link to ='/body cap'>
                    <div className='list'>체형분석</div>
                </Link>
            </div>
        </div>
    );
}

export default Header;