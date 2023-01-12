import './css/Bodycap.css';
import photo from '../assets/photo.png';
import recommend1 from '../assets/codi1.png';
import recommend2 from '../assets/codi2.png';
import recommend3 from '../assets/codi3.png';

function Bodycap() {
    return(
        <div className="container1">
            <div>
                <div className="stat">
                    체형 분석
                </div>
                <div className = "imgBox">
                <img src={photo} class="imgIcon" alt="img"/>   
                <div className = "concon">
                    <h3>측정결과</h3>
                    <p>당신의 키 : 140~144cm</p> 
                    <p>당신의 몸무게 : 40~44kg</p>
                    <p>당신의 성별 : 여</p>
                    <p>선택한 계절 : 겨울</p>
                    <p></p>
                    <p>추천드리는 코디</p>
                    <img src={recommend1} class="codi" alt="img"/>
                    <img src={recommend2} class="codi" alt="img"/>
                    <img src={recommend3} class="codi" alt="img"/>
                </div> 
                </div>
            </div>
        </div>
    );
}

export default Bodycap;