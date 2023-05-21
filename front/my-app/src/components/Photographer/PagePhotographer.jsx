import React, {useState} from 'react';
import Bar from "../mainPage/Bar";
import axios from "axios";


const PagePhotographer = () => {
    const [photoFile, setphotoFile] = useState()
    const [loading, setLoading] = useState(false)

    function change(e) {
        let input = document.getElementsByTagName("input")[0]
        console.log(e.target.files[0])
        setphotoFile(e.target.files[0])

    }

    const getPhoto = async () => {
        let suuuu = document.getElementsByClassName("suuuu")

        const formData = new FormData();
        console.log(formData)
        console.log(photoFile)

        formData.append("file", photoFile)

        const res = await axios.post("http://localhost:3005/upload/photo", formData,
            {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            })
        const data222 = res
        console.log(data222.data.data.data)
        suuuu.src = data222
    }

    return (
        <div>
            <Bar></Bar>
            <div>
                <input onChange={change} type='file'></input>
                <button onClick={getPhoto}>Отправить фото</button>
            </div>
        </div>
    );
};

export default PagePhotographer;