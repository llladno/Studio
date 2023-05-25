import React from 'react';
import './styleOrderLogin.css'
import axios from "axios"
import deletepng from './../../img/delete.png'

const LoginShowData = (props) => {
    const data = props.data
    const mergedData = [];

    data.map((x) => {
        mergedData.push(x.day)
    })

    const newmass = []
    let sss = []
    mergedData.map(x => {
        sss = newmass.find(item => item === x)
        if (!sss) {
            newmass.push(x)
        }
    })

    function deleteOrder(e){
        let user = sessionStorage.getItem("id")
        console.log(e.target.id)
        axios.post('http://localhost:3005/delete/order',{
            user: user,
            day: e.target.id
        })
        window.location.reload();

    }
    console.log(newmass)
    newmass.sort()
    return (
        <div className='containerorder'>
            <div className='styleContainer'>
                <h2>Вы записанны</h2>
                {newmass.map((x) => {
                    console.log(newmass)
                    let mas = []
                    data.map((c) => {
                        if (c.day === x) mas.push(c.date)
                    })
                    return (<div className='card'>
                        <div>
                        <p>Дата: {x}</p>
                        <p>
                            {mas.map((x) => {
                                return (
                                    <p>Время: {x}</p>)
                            })}</p>
                        </div>
                        <button onClick={deleteOrder} id={x}><img id={x} width='40px' src={deletepng}></img></button>
                    </div>)
                })}
            </div>
        </div>
    )
};

export default LoginShowData;