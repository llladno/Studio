import axios from "axios";
import Bar from "../mainPage/Bar";
import {useState} from "react";


function Login() {
    const [loading, setLoading] = useState(true)
    if (sessionStorage.getItem("login")) {
        window.location = "/login/home"
    }

    async function clickLogin() {
        let login = document.getElementById("login").value
        let passwd = document.getElementById("passwd").value
        const res = await axios.post("http://localhost:3005/login", {
            login: login,
            passwd: passwd
        })
        let status = res.data

        if (status[0] === "ok") {
            sessionStorage.setItem('id', status[1].id)
            sessionStorage.setItem('login', status[1].login)
            sessionStorage.setItem('name', status[1].name)
            sessionStorage.setItem('mail', status[1].mail)
            sessionStorage.setItem('phone', status[1].phone)
            window.location = "/login/home"
        } else {
            console.log("err")
        }
    }

    setTimeout(() => {
        setLoading(false)
    }, 1000)

    const regis = () => window.location = "/login/register"

    return (
        <div>
            <Bar></Bar>
            <div>
                <div>{loading ? <p>loading...</p>
                    : <div>
                        <p>login</p>
                        <input id="login"></input>
                        <p>Passwd</p>
                        <input id="passwd"></input>
                        <div>
                            <button onClick={clickLogin}>Войти</button>
                            <button onClick={regis}>Зарегистрироваться</button>
                        </div>
                    </div>
                }
                </div>
            </div>
        </div>
    )
}

export default Login;