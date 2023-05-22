import React, {useState} from 'react';
import Bar from "../mainPage/Bar";
import axios from "axios";


const PagePhotographer = () => {
    const [photoFile, setphotoFile] = useState()
    const [loading, setLoading] = useState(false)

    function change(e) {
        let input = document.getElementsByTagName("input")[0]
        console.log(e.target.files[0])
        console.log(e.target.files)
        setphotoFile(e.target.files)

    }

    const getPhoto = async () => {
        let suuu = document.getElementsByClassName("suuu")[0].value
        console.log(suuu)
        const formData = new FormData();
        console.log(formData)
        console.log(photoFile)
        for(let b = 0; b < photoFile.length;b++){
            formData.append("file", photoFile[b])
            formData.append("user", `${suuu}`)
        }
        

        const res = await axios.post("http://localhost:3005/upload/photo", formData,
            {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            })
    }

    return (
        <div>
            <Bar></Bar>
            <div>
                <input onChange={change} type='file' multiple="multiple"></input>
                <p>Введите Login клиента</p>
                <input className='suuu'></input>
                <button onClick={getPhoto}>Отправить фото</button>
            </div>
        </div>
    );
};

export default PagePhotographer;