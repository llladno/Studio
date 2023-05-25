import React from 'react';
import Bar from "./Bar";

const Develop = () => {
    return (
        <div>
            <Bar></Bar>
            <div style={{display: 'flex', justifyContent: 'center'}}>
                <div>
                    <h1>Страница ещё в разработке, но на нашем сайте уже доступен основной функционал</h1>
                    <h1>Пожалуйста вернитесь на главную страницу :)</h1>
                    <button onClick={e => window.location.href = '/'} className='bronir'>
                        Вернуться</button>
                </div>
            </div>
        </div>
    );
};

export default Develop;