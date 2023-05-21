import axios from "axios";
import Bar from "../../mainPage/Bar";
import {useState} from "react";
import {elliss} from "../../mainPage/elliss.jsx";
import {showFn} from "./showFn.jsx";


function LoginHome() {
    const [selectData, setSelectData] = useState()
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
        if(event.target.tagName === "P" || "BUTTON"){
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
                for(let b = 0;b < unsel.length;b ++){
                    unsel[b].disabled = true;
                }
            }
            else {
                let sud = document.getElementsByClassName("sud")[0]
                day = event.target.textContent
                sendDataa = document.getElementsByClassName('sendData')[0]
                sendDataa.style.display = 'flex'
                elliss(event, setSelectData,data,axios,sud,selectData, day)
            }
        }
    }

    function sendData() {
            axios.post("http://localhost:3005/photosession/order", {
                id_user: sessionStorage.getItem('id'),
                date: selectData
            })
    }
    function  show (){
        showFn(sendDataa,dis,countMonth)
    }
    function exit() {sessionStorage.clear()}

    return (
        <div>
            <Bar></Bar>
            <div>
            <div style={{display:'flex',justifyContent:"center"}}>
                <button onClick={show} className='bronir' >Выбрать время</button>
                <a href='/login/order'><button className='bronir'> Мои записи</button></a>
                <a href='/login'><button onClick={exit} className='bronir'>Выйти из аккаунта</button></a>
            </div>
                <div style={{display:"flex",justifyContent:'center'}}>
                    <div className="dis">
                        <div onClick={clickDate} className="sud">
                        </div>
                    </div>
                </div>
            <button onClick={sendData} className='sendData'>Забронировать</button>
            </div>
        </div>
    )
}

export default LoginHome;