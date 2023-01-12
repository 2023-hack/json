import './css/Nostar.css';
import Dummy from '../dummy.json';
import heart from '../assets/heart.png';
import redheart from '../assets/redheart.png';

import { useRef } from 'react';

function Nostar() {

    const img = useRef([]);

    return(
        <div className="container5">
                <div className="staro">
                    트랜드
                </div>
                <div className="align">
                {Dummy.map((n, index)=>(
                    <div className="top">
                        <img src={n.src} alt='' />
                        <div className="heart1" style={{background:`url(${heart})`}} ref={(el)=>img.current[index]=el}  onClick={()=>{
                            if(Dummy[index].heart === "false") {
                                img.current[index].style.background = `url(${redheart})`;
                                Dummy[index].heart="true";
                                console.log(Dummy[index].heart)
                            }
                            else if(Dummy[index].heart === "true") {
                                img.current[index].style.background = `url(${heart})`;
                                Dummy[index].heart="false";
                                console.log(Dummy[index].heart)
                            }
                        }}/>
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

export default Nostar;