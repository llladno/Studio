import axios from "axios";
import {useEffect, useState} from "react";
import './stylePhoto.css'
import Bar from "../../mainPage/Bar";

const LoginPhotos = () => {
    const [myPhoto, setmyPhoto] = useState()
    const [loading, setLoading] = useState(false)

    async function getPhoto() {
        let err = "notErr"
        const res = await axios.post("http://localhost:3005/user/getPhotos", {
            login: sessionStorage.getItem('login')
        }).catch(e => {
            err = "ERROR"
        })
        if (err === "ERROR") {
            setmyPhoto("ERROR")
        } else {
            console.log(res)
            const getPhotos = res.data.files
            setmyPhoto(res.data)
            setLoading(true)
        }

    }

    useEffect(() => {
        getPhoto()
    }, [])

    function show(e) {
        e.target.style.display = "none"
        if (loading == true) {
            console.log(myPhoto)
            let photo = document.getElementsByClassName("photo")[0]
            console.log(myPhoto)
            console.log(photo)
            for (let c = 0; c < myPhoto.files.length; c++) {
                photo.innerHTML += `<img src="http://localhost:3005/photos/${myPhoto.folder}/${myPhoto.files[c]}">`
            }
        }
    }


    return (
        <div>
            <Bar></Bar>
            <div className='container'>
                <div style={{display: 'flex', width: 30 + "%"}}>
                    <div>
                        <div>
                        <button onClick={show} className='btnmenu'>Показать фотографии</button>
                        </div>
                        <div>
                            <a href='/login'>
                            <button className='btnmenu'>Назад</button>
                        </a>
                        </div>
                    </div>
                </div>
                <div>
                    {myPhoto === "ERROR" ? <h1>Ваши фотографии ещё не загружены :(</h1>
                        : null}
                    <br></br>
                    {loading ? (<div style={{width: 100 + "%", marginLeft: 50}}>
                            <h1>Ваши фотографии</h1>
                            <div className="photo">
                            </div>
                        </div>)
                        : <p>loading</p>}</div>
            </div>
        </div>


    );
};

export default LoginPhotos;