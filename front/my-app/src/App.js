import {useState} from 'react';
import axios from 'axios'
import Home from './components/mainPage/Home';
import {Routes, Route} from "react-router-dom"
import Login from './components/login/Login.jsx';
import LoginHome from './components/login/Home/LoginHome';
import LoginOrder from "./components/login/Home/LoginOrder";
import LoginRegister from "./components/login/Register/LoginRegister";

function App() {
    return (
        <div className="App">
            <Routes>
                <Route path='/' element={<Home></Home>}></Route>
                <Route path='/login' element={<Login></Login>}></Route>
                <Route path='/login/home' element={<LoginHome></LoginHome>}></Route>
                <Route path='/login/order' element={<LoginOrder></LoginOrder>}></Route>
                <Route path='/login/register' element={<LoginRegister></LoginRegister>}></Route>
            </Routes>
        </div>
    );
}

export default App;
