import React from 'react';
import Bar from "../../mainPage/Bar.jsx";
import {AddUser} from "./AddUser";
import axios from "axios";
import './Login.css'


const LoginRegister = () => {
    let data = []

    function click() {
        let email = document.getElementById("email")
        let name = document.getElementById("name")
        let login = document.getElementById("login")
        let passwd = document.getElementsByClassName("passwd")
        let number = document.getElementById("number")
        if (passwd[0].value == passwd[1].value) {
            if (email.value && name.value && login.value && passwd.value != "") {
                data.push(name.value, email.value, number.value,passwd[0].value,login.value)
                AddUser(data, axios)
                window.location.href = "/login"
                data.length = 0
            } else {

            }
        } else {
            let uncorrect = document.getElementsByClassName("uncorrect")[0]
            uncorrect.innerHTML = `<p>Пароли не совпадают</p>`
        }
    }

    return (
        <div>
            <Bar></Bar>
            <div className="container2">
                <div className="loginplace">
                    <div className="styleLogin2">
                        <h1 style={{textAlign: "center"}}>Регистрация</h1>
                        <div style={{display: "flex"}}>
                            <div>
                                <p>Email</p>
                                <input id="email"></input>
                            </div>
                            <div style={{width: 20}}></div>
                            <div>
                                <p>Имя</p>
                                <input id="name"></input>
                            </div>
                        </div>
                        <div style={{display: "flex"}}>
                            <div>
                                <p>Логин</p>
                                <input id="login"></input>
                            </div>
                            <div style={{width:20}}></div>
                            <div>
                                <p>Телефон</p>
                                <input id="number"></input>
                            </div>
                        </div>

                        <div style={{display: "flex"}}>
                            <div>
                                <p>Пароль</p>
                                <input className="passwd"></input>
                            </div>
                            <div style={{width: 20}}></div>
                            <div>
                                <p>Повторите пароль</p>
                                <input className="passwd"></input>
                            </div>
                        </div>
                        <div className="btnStyle">
                            <button className='btn' onClick={click}>Зарегистрироваться</button>
                        </div>
                        <div className="uncorrect"></div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default LoginRegister;