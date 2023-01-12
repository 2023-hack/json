/* eslint-disable */
import './css/Nostar.css';
import Dumy from '../dumy.json';
import heart from '../assets/redheart.png'
import redheart from '../assets/redheart.png'

function Star() {

    return(
        <div className="container1">
            <div>
                <div className="staro">
                    즐겨찾기
                </div>
                <div className='align'>
                    {Dumy.map((n)=>(
                        <>
                        <div className='top'>
                            <img src={redheart} className='heart1' alt='' />
                            <img src={n.src} alt='' />
                            <div className="images1">
                                <span>#{n.weight}</span><br/>
                                <span>#{n.height}</span><br/>
                                <span>#{n.gender}</span><br/>
                                <span>#{n.season}</span><br/>
                            </div>
                        </div>
                        </>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Star;