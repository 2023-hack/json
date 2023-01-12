import './App.css';
import Header from './Components/Header';
import Body from './Components/Body';
import Star from './Components/Star';
import Nostar from './Components/Nostar';
import Bodycap from './Components/Bodycap';
import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {
  return (
    <div>
      <BrowserRouter>
      <>
        <Header/>
        <Routes>
          <Route path="/" element={ 
                <>
                  <Body/>
                </>
              }
            />
          <Route path="/star in" element={ 
                <>
                  <Star/>
                </>
              }
            />
          <Route path="/nostar in" element={ 
                <>
                  <Nostar/>
                </>
              }
            />
            <Route path="/body cap" element={ 
                <>
                  <Bodycap/>
                </>
              }
            />
          </Routes>
        </>
      </BrowserRouter>
    </div> 
  );
}

export default App;
