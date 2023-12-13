import React, {useState} from 'react';
import Bar from "../mainPage/Bar";
import axios from "axios";
import './PagePhotographer.css'


const PagePhotographer = () => {
    const [photoFile, setphotoFile] = useState()
    const [loading, setLoading] = useState(false)

    function change(e) {
        let input = document.getElementsByTagName("input")[0]
        setphotoFile(e.target.files)
    }

    const getPhoto = async () => {
        let suuu = document.getElementsByClassName("suuu")[0].value
        const formData = new FormData();
        for (let b = 0; b < photoFile.length; b++) {
            formData.append("file", photoFile[b])
            formData.append("user", `${suuu}`)
        }


        const res = await axios.post("http://109.68.215.157:3005/upload/photo", formData,
            {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            })
    }

    return (
        <div>
            <Bar></Bar>
            <div style={{display: 'flex', justifyContent: 'center'}}>
                <div>
                    <p>Выберете фалы</p>
                    <label className='custom-file-upload'>
                        Выбрать
                        <input onChange={change} type='file' multiple="multiple" className='custom-file-upload'></input>
                    </label>
                    <p>Введите Login клиента</p>
                    <input className='suuu'></input>
                    <div>
                        <button onClick={getPhoto} className='btn'>Отправить фото</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PagePhotographer;