import React, {Component} from 'react';
import Bar from './../mainPage/Bar.jsx'
import './OtherPages.css'
import location from './../../components/img/Screenshot_2.png'

function StudioPage() {

    return (
            <div>
                <Bar></Bar>
                <div className='studioPageFlex'>
                    <h1>О студии</h1>
                    <p className='pFramep'>
                        PFrame Studio- это уникальное пространство в самом сердце Санкт-Петербурга,
                        где каждый кадр становится поводом для создания воспоминаний.
                        Фотостудия предлагает уютное и стильное оформление,
                        которое подчеркнет ваш индивидуальный стиль и придаст красочность любому мероприятию.
                        <br/><br/>
                        Адрес: Санкт-Петербург, Невский проспект, дом 90-92Б <b>*</b>
                    </p>
                    <img src={location}></img>
                    <p style={{fontSize: 15 + 'px'}}>* Адрес является выдуманным</p>
                </div>
            </div>
        );
}

export default StudioPage;