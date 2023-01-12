import './css/Star.css';
import Dummy from '../dummy.json';
import { useRef } from 'react';
import heart from '../assets/heart.png'
import redheart from '../assets/redheart.png'

function Star() {

    const img = useRef();

    return(
        <div className="container1">
            <div>
                <div className="sta">
                    즐겨찾기
                </div>
                {Dummy.map((n, index)=>(
                        <div className='images1'>
                            <span>#{n.weight}</span><br/>
                            <span>#{n.height}</span><br/>
                            <span>#{n.gender}</span><br/>
                            <span>#{n.season}</span><br/>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Star;