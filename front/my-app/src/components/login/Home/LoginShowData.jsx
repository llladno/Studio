import React from 'react';
import './styleOrderLogin.css'

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
    console.log(newmass)
    newmass.sort()
    return (
        <div className='containerorder'>
            <div className='styleContainer'>
                <h2>Вы записанны</h2>
                {newmass.map((x) => {
                    let mas = []
                    data.map((c) => {
                        if (c.day === x) mas.push(c.date)
                    })
                    return (<div className='card'>
                        <p>Дата: {x}</p>
                        <p>
                            {mas.map((x) => {
                                return (
                                    <p>Время: {x}</p>)
                            })}</p>
                    </div>)
                })}
            </div>
        </div>
    )
};

export default LoginShowData;