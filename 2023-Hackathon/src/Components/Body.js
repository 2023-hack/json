import './css/Body.css';
import camera from '../assets/images/Vector.png';

function Body() {
    return(
        <div className="center">
            <div className="imgFile">
            <img src={camera} class="img5" alt="Big"/>
            </div>
            <button class="button">오늘의 코디 하러 가기!</button>
        </div>
    );
}

export default Body;