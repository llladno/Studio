import {useState} from 'react';
import axios from 'axios'
import './index.css'
import Home from './components/mainPage/Home';
import {Routes, Route} from "react-router-dom"
import Login from './components/login/Login.jsx';
import LoginHome from './components/login/Home/LoginHome';
import LoginOrder from "./components/login/Home/LoginOrder";
import LoginRegister from "./components/login/Register/LoginRegister";
import PagePhotographer from "./components/Photographer/PagePhotographer";
import LoginPhotos from './components/login/Home/LoginPhotos';
import Develop from "./components/mainPage/Develop";
import StudioPage from "./components/otherPages/StudioPage";


function App() {
    return (
        <div className="App">
            <Routes>
                <Route path='/studio' element={<Home></Home>}></Route>
                <Route path='/studio/login' element={<Login></Login>}></Route>
                <Route path='/studio/login/home' element={<LoginHome></LoginHome>}></Route>
                <Route path='/studio/login/order' element={<LoginOrder></LoginOrder>}></Route>
                <Route path='/studio/login/register' element={<LoginRegister></LoginRegister>}></Route>
                <Route path='/studio/home/photographer' element={<PagePhotographer></PagePhotographer>}></Route>
                <Route path='/studio/login/photos' element={<LoginPhotos></LoginPhotos>}></Route>
                <Route path='/studio/develop' element={<Develop/>}></Route>
                <Route path='/studio/studio' element={<StudioPage/>}></Route>
            </Routes>
        </div>
    );
}

export default App;
