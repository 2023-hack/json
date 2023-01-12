/* eslint-disable */
import './css/Body.css';
import Webcam from 'react-webcam';
import React from 'react';
import {Link} from "react-router-dom";

function Body() {
    
    const webcamRef= React.useRef(null);
    const capture = React.useCallback(
        () => {
          const imageSrc = webcamRef.current.getScreenshot();
        },
        [webcamRef]
      );

    return(
        <div className="center">
            <div className="imgFile">
                <Webcam
                    height={500}
                    ref={webcamRef}
                    screenshotFormat="image/jpeg"    
                ></Webcam>
            </div>
            <Link to = '/Body cap'>
                <button class="button" onClick={capture}>오늘의 코디 하러 가기!</button>
            </Link>
        </div>
    );
}

export default Body;