import './css/Star.css';
import star from '../assets/images/star.png';

function Star() {
    return(
        <div className="container1">
            <div>
                <div className="sta">
                    즐겨찾기
                </div>
                <img src={star} className="img3" alt="Big"/>
                <img src={star} className="img3" alt="Big"/>
                <img src={star} className="img3" alt="Big"/>
                <img src={star} className="img3" alt="Big"/>
                <img src={star} className="img3" alt="Big"/>
                <img src={star} className="img3" alt="Big"/>
            </div>
        </div>
    );
}

export default Star;