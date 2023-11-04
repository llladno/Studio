import axios from "axios";
import Bar from "../../mainPage/Bar";
import { useState } from "react";
import { elliss } from "../../mainPage/elliss.jsx";
import { showFn } from "./showFn.jsx";


function LoginHome() {
    const [selectData, setSelectData] = useState()
    const [loading, setLoading] = useState(true)
    let countMonth
    let dis
    let sendDataa

    window.onload = () => {

        dis = document.getElementsByClassName("dis")[0]
        dis.style.display = "none"
        sendDataa = document.getElementsByClassName('sendData')[0]
        sendDataa.style.display = 'none'
    }

    function howMuchDays() {
        let year = new Date().getFullYear()
        var today = new Date();
        var month = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
        var date1 = new Date(year, month - 1, 1);
        var date2 = new Date(year, month, 1);
        countMonth = Math.round((date2 - date1) / 1000 / 3600 / 24);
        return Math.round((date2 - date1) / 1000 / 3600 / 24);
    }

    howMuchDays()

    async function clickDate(event) {
        console.log(event.target.tagName)

        if (event.target.tagName == "DIV") {

        } else {
            let day
            day = event.target.textContent
            const time = Date.now()
            const today = new Date(time)
            let datetoday = today.toLocaleDateString()
            let data = datetoday.substring(2)

            if (event.target.textContent.length > 2) {
                let times = event.target.textContent.substring(2)
                setSelectData(selectData + ` ${times}`)
                event.target.classList.remove('btnunselected')
                event.target.classList.add('btnselected')
                let unsel = document.getElementsByClassName('btnunselected')
                for (let b = 0; b < unsel.length; b++) {
                    unsel[b].disabled = true;
                }
            } else {
                let sud = document.getElementsByClassName("sud")[0]
                day = event.target.textContent
                sendDataa = document.getElementsByClassName('sendData')[0]
                sendDataa.style.display = 'flex'
                elliss(event, setSelectData, data, axios, sud, selectData, day)
            }
        }
    }

    function sendData(e) {
        axios.post("http://109.68.215.157:3005/photosession/order", {
            id_user: sessionStorage.getItem('id'),
            date: selectData
        })
        e.target.textContent = 'Обработка...'
        setTimeout(()=>{
            e.target.textContent = 'Вы записаны!'
            e.target.style.background = "#0FC65C"
        },1000)
        setTimeout(()=>{
            window.location = '/login/order'
        },1000)
        
    }

    function show() {
        showFn(sendDataa, dis, countMonth)
    }

    function exit() {
        sessionStorage.clear()
    }

    return (
        <div>
            <Bar></Bar>
            <div>
                <div style={{ display: 'flex',marginTop:50}}>
                    <div style={{ width: 500,marginLeft:5+'%'}}>
                        <button onClick={show} className='bronir'>Выбрать время</button>
                        <a href='/login/order'>
                            <button className='bronir'> Мои записи</button>
                        </a>
                        <a href='/login/photos'>
                            <button className='bronir'>Мои фотографии</button>
                        </a>
                        <a href='/login'>
                            <button onClick={exit} className='bronir'>Выйти из аккаунта</button>
                        </a>
                    </div>
                    <div style={{ display: "flex", justifyContent: 'center' }}>
                        <div className="disbtn">
                            <div className="dis">
                                <div onClick={clickDate} className="sud">
                                </div>
                            </div>
                            <div style={{display:'flex',justifyContent:'center'}}>
                                <button onClick={sendData} className='sendData'>Забронировать</button>
                            </div>

                        </div>
                    </div>
                </div>

                {/*<div style={{display: 'flex'}}>*/}
                {/*    <div style={{width: 500}}>*/}
                {/*        <button onClick={show} className='bronir'>Выбрать время</button>*/}
                {/*        <a href='/login/order'>*/}
                {/*            <button className='bronir'> Мои записи</button>*/}
                {/*        </a>*/}
                {/*        <a href='/login/photos'>*/}
                {/*            <button className='bronir'>Мои фотографии</button>*/}
                {/*        </a>*/}
                {/*        <a href='/login'>*/}
                {/*            <button onClick={exit} className='bronir'>Выйти из аккаунта</button>*/}
                {/*        </a>*/}
                {/*    </div>*/}
                {/*    <div style={{display: "flex", justifyContent: 'center'}}>*/}
                {/*        <div className="dis">*/}
                {/*            <div onClick={clickDate} className="sud">*/}
                {/*            </div>*/}
                {/*        </div>*/}
                {/*    </div>*/}
                {/*</div>*/}

            </div>
        </div>
    )
}

export default LoginHome;