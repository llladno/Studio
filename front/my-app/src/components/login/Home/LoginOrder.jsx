import axios from "axios";
import {useEffect, useState} from "react";
import Bar from "../../mainPage/Bar";
import LoginShowData from "./LoginShowData";


function LoginOrder() {
    const [getData, setGetData] = useState()
    const [loadging ,setLoading] = useState(false)
    useEffect(()=>{
        async function get (){
            const res = await axios.post("http://109.68.215.157:3005/user/order",{
                userId :sessionStorage.getItem('id')
            })

            setGetData(res.data)
            setLoading(true)
        }
        get()
    },[])
    return (
        <div>
            <Bar></Bar>
            <div>
                {loadging ? <LoginShowData data={getData}></LoginShowData>
                :<p>Loading...</p>}
            </div>
        </div>
    )
}

export default LoginOrder;