import axios from "axios";
import {useEffect, useState} from "react";
import './stylePhoto.css'
import Bar from "../../mainPage/Bar";

const LoginPhotos = () => {
    const [myPhoto, setmyPhoto] = useState()
    const [loading, setLoading] = useState(false)
    async function getPhoto() {
        const res = await axios.post("http://localhost:3005/user/getPhotos", {
            login: sessionStorage.getItem('login')
        })
        const getPhotos = res.data.files
        setmyPhoto(res.data)
            setLoading(true)
    }
    useEffect(()=>{
        getPhoto()
    },[])

    function show(e){
        console.log("su")
        console.log(loading)
        console.log(myPhoto)
        e.target.style.display = "none"
        if(loading == true) {
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
                <div style={{display:'flex',width:30+"%"}}>
                    <div>
                    <button onClick={show} className='btnmenu'>Показать фотографии</button>
                <a href='/login'><button className='btnmenu'>Назад</button></a>
                    </div>
                </div>
                {loading ? (<div style={{width:100+"%",marginLeft:50}}>
                    <h1>Ваши фотографии</h1>
                    <div className="photo">
                    </div>
                    </div>)
                    : <p>loading</p>}
            </div>
        </div>


    );
};

export default LoginPhotos;