import './css/Star.css';
import nostar from '../assets/images/nostar.png';
import Dummy from '../dummy.json';

function Nostar() {
    console.log(Dummy[0].src)
    return(
        <div className="container1">
            <div>
                <div className="sta">
                    트랜드
                </div>
                {/* <img src={nostar} className="img3" alt="Big"/>
                <img src={nostar} className="img3" alt="Big"/>
                <img src={nostar} className="img3" alt="Big"/>
                <img src={nostar} className="img3" alt="Big"/>
                <img src={nostar} className="img3" alt="Big"/>
                <img src={nostar} className="img3" alt="Big"/> */}
                {Dummy.map((n)=>(
                    <>
                    <img src={n.src} alt='' />
                    <span>{n.weight}</span><br/>
                    <span>{n.height}</span><br/>
                    <span>{n.gender}</span><br/>
                    <span>{n.계절}</span><br/>
                    </>
                ))}
            </div>
        </div>
    );
}

export default Nostar;